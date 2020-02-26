import { ObjectLiteral } from '../interfaces/objectLiteral';
import { Model as DataTableModel } from '../components/dataTable';
import { SortableHeaderCell } from './sortableHeaderCell';

export class DataTableBuilder {
    private ko: KnockoutStatic;
    private model: DataTableModel;

    public constructor(ko: KnockoutStatic) {
        this.ko = ko;
        this.model = new DataTableModel(this.ko);
    }

    public get = (): DataTableModel => this.model;

    public addSortableCol = (title: string, rowKey: string,
        celTemplate: string = "data-cell-default-data-template",
        headTemplate: string = "data-cell-sortable-header-template"): void => {

        this.model.cols.push({
            celTemplate,
            headTemplate,
            header: { title },
            getCellData: r => r[rowKey],
            getHeadData: h => new SortableHeaderCell(this.ko, h.title)
        });
    }

    public addTextCol = (title: string, rowKey: string,
        celTemplate: string = "data-cell-default-data-template",
        headTemplate: string = "data-cell-default-data-template"): void => {

        this.model.cols.push({
            celTemplate,
            headTemplate,
            header: { title },
            getCellData: r => r[rowKey],
            getHeadData: h => h.title
        });
    }

    public load = (rows: Array<ObjectLiteral>): void => {
        this.model.rows(rows);
    }
}