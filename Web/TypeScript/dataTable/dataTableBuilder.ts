import { SortOrder } from '../enums/sortOrder';
import { ObjectLiteral } from '../interfaces/objectLiteral';
import { Model as TableModel } from '../components/table';

class Column {
    public order: KnockoutObservable<SortOrder>;
    public title: KnockoutObservable<string>;
    private ko: KnockoutStatic;

    constructor(ko: KnockoutStatic, rowKey: string, title: string = "") {
        this.ko = ko;
        this.order = this.ko.observable<SortOrder>(SortOrder.None);
        this.title = this.ko.observable<string>(title);
    }
}

class Cell {
    public data: KnockoutObservable<string>;
    private ko: KnockoutStatic;

    constructor(ko: KnockoutStatic, data: string = "") {
        this.ko = ko;
        this.data = this.ko.observable<string>(data);
    }
}

export class DataTableBuilder {
    private ko: KnockoutStatic;
    private model: TableModel;

    public constructor(ko: KnockoutStatic) {
        this.ko = ko;
        this.model = new TableModel(this.ko);
    }

    public get = (): TableModel => this.model;

    private getTemplate = (template: string, rowKey: string): string => {
        return `<!-- ko template: { name: "${template}", data: $data.${rowKey} } --><!-- /ko -->`;
    }

    public addCol = (title: string, rowKey: string, colTemplate: string = "data-table-default-data-template", headTemplate: string = "data-table-default-head-template"): void => {
        this.model.cols.push({
            colTemplate: colTemplate,
            headTemplate: headTemplate,
            header: new Column(this.ko, rowKey, title),
            modelFactory: r => r[rowKey]
        });
    }

    public load = (rows: Array<ObjectLiteral>): void => {
        this.model.rows(rows);
    }
}