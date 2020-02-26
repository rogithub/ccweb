import { ObjectLiteral } from '../interfaces/objectLiteral';
import { Model as DataTableModel } from '../components/dataTable';
import { SortOrder } from '../enums/sortOrder';

export class HeaderModel {
    public order: KnockoutObservable<SortOrder>;
    public title: KnockoutObservable<string>;
    private ko: KnockoutStatic;

    constructor(ko: KnockoutStatic, title: string = "") {
        this.ko = ko;
        this.order = this.ko.observable<SortOrder>(SortOrder.None);
        this.title = this.ko.observable<string>(title);
    }

    public changeOrder = (): void => {
        switch (this.order()) {
            case SortOrder.None:
                this.order(SortOrder.Asc);
                break;
            case SortOrder.Asc:
                this.order(SortOrder.Desc);
                break;
            case SortOrder.Desc:
                this.order(SortOrder.None);
                break;
        }
    }
}

export class DataTableBuilder {
    private ko: KnockoutStatic;
    private model: DataTableModel;

    public constructor(ko: KnockoutStatic) {
        this.ko = ko;
        this.model = new DataTableModel(this.ko);
    }

    public get = (): DataTableModel => this.model;

    public addCol = (title: string, rowKey: string,
        celTemplate: string = "data-cell-default-data-template",
        headTemplate: string = "data-cell-default-header-template"): void => {

        this.model.cols.push({
            celTemplate,
            headTemplate,
            header: { title },
            getCellData: r => r[rowKey],
            getHeadData: h => new HeaderModel(this.ko, h.title)
        });
    }

    public load = (rows: Array<ObjectLiteral>): void => {
        this.model.rows(rows);
    }
}