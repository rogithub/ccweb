import * as ko from 'knockout';
import { ObjectLiteral } from '../../interfaces/objectLiteral';
import { TableColumn } from '../../interfaces/tableColumn';

export class Model {
    public cols: KnockoutObservableArray<TableColumn>;
    public rows: KnockoutObservableArray<ObjectLiteral>;

    constructor(cols: TableColumn[]) {
        this.cols = ko.observableArray<TableColumn>(cols);
        this.rows = ko.observableArray<ObjectLiteral>([]);
    }

    public load = (rows: ObjectLiteral[]): void => {
        this.rows(rows);
    }
}
