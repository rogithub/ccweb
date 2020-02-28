import { ObjectLiteral } from '../../shared/objectLiteral';
import { TableColumn } from '../../shared/tableColumn';

export class ColumnModel {
    public info: TableColumn;
    public model: ObjectLiteral;

    constructor(info: TableColumn) {
        this.info = info;
        this.model = info.getHeadData(info.header);
    }
}

export class Model {
    public cols: KnockoutObservableArray<ColumnModel>;
    public rows: KnockoutObservableArray<ObjectLiteral>;
    protected ko: KnockoutStatic;

    constructor(ko: KnockoutStatic) {
        this.ko = ko;
        this.cols = this.ko.observableArray<ColumnModel>([]);
        this.rows = this.ko.observableArray<ObjectLiteral>([]);
    }
}
