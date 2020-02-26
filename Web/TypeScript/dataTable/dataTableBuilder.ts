import { ObjectLiteral } from '../interfaces/objectLiteral';
import { Model as DataTableModel } from '../components/dataTable';


export class DataTableBuilder {
    private ko: KnockoutStatic;
    private model: DataTableModel;

    public constructor(ko: KnockoutStatic) {
        this.ko = ko;
        this.model = new DataTableModel(this.ko);
    }

    public get = (): DataTableModel => this.model;

    public addCol = (title: string, rowKey: string, celTemplate: string = "data-table-default-data-template"): void => {
        this.model.cols.push({
            celTemplate: celTemplate,
            header: { title },
            modelFactory: r => r[rowKey]
        });
    }

    public load = (rows: Array<ObjectLiteral>): void => {
        this.model.rows(rows);
    }
}