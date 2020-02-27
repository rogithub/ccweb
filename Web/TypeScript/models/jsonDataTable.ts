import { Model as DataTableModel } from '../components/dataTable';
import { DataColInfo } from '../interfaces/dataColInfo'
import Constants from '../constants/dataTableConstants';
import { SortableHeaderCell } from '../models/sortableHeaderCell';
import { ObjectLiteral } from '../interfaces/objectLiteral';

export class JsonDataTable extends DataTableModel {

    constructor(ko: KnockoutStatic, cols: DataColInfo[]) {
        super(ko);

        ko.utils.arrayMap(cols, c => {
            let hTemplate = c.sortable ?
                Constants.DATA_CELL_SORTABLE_HEADER :
                Constants.DATA_CELL_DEFAULT_TEMPLATE;

            let hDataFn: (h: ObjectLiteral) => ObjectLiteral;

            hDataFn = c.sortable ?
                (h) => new SortableHeaderCell(ko, h.title) :
                (h) => h.title;

            this.cols.push({
                celTemplate: Constants.DATA_CELL_DEFAULT_TEMPLATE,
                headTemplate: hTemplate,
                getCellData: r => r[c.rowKey],
                getHeadData: hDataFn,
                header: c
            });
        });
    }


}
