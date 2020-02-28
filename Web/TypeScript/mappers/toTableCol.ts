import { DataColInfo } from '../interfaces/dataColInfo';
import { TableColumn } from '../interfaces/tableColumn';
import Constants from '../constants/dataTableConstants';
import { ObjectLiteral } from '../interfaces/objectLiteral';
import { SortableHeaderCell } from '../models/sortableHeaderCell';

export default (ko: KnockoutStatic, c: DataColInfo): TableColumn => {
    let hTemplate = c.sortable ?
        Constants.DATA_CELL_SORTABLE_HEADER :
        Constants.DATA_CELL_DEFAULT_TEMPLATE;

    let hDataFn: (h: ObjectLiteral) => ObjectLiteral;

    hDataFn = c.sortable ?
        (h) => new SortableHeaderCell(ko, h.title) :
        (h) => h.title;

    return {
        celTemplate: Constants.DATA_CELL_DEFAULT_TEMPLATE,
        headTemplate: hTemplate,
        getCellData: r => r[c.rowKey],
        getHeadData: hDataFn,
        header: c
    };
}