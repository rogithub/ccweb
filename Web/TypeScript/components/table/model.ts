import { ObjectLiteral } from '../../interfaces/objectLiteral';
import { TableColumn } from '../../interfaces/tableColumn';

export class Model {
    public cols: KnockoutObservableArray<TableColumn>;
    public rows: KnockoutObservableArray<ObjectLiteral>;
    private ko: KnockoutStatic;

    constructor(ko: KnockoutStatic) {
        this.ko = ko;
        this.cols = this.ko.observableArray<TableColumn>([]);
        this.rows = this.ko.observableArray<ObjectLiteral>([]);
    }
}
