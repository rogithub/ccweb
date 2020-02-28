import { ObjectLiteral } from '../../shared/objectLiteral';
import { TableColumn } from '../../shared/tableColumn';

export class Model {
    public cols: KnockoutObservableArray<TableColumn>;
    public rows: KnockoutObservableArray<ObjectLiteral>;
    protected ko: KnockoutStatic;

    constructor(ko: KnockoutStatic) {
        this.ko = ko;
        this.cols = this.ko.observableArray<TableColumn>([]);
        this.rows = this.ko.observableArray<ObjectLiteral>([]);
    }
}
