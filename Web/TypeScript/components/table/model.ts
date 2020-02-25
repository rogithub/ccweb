import * as ko from 'knockout';
import { ObjectLiteral } from '../../interfaces/objectLiteral';
import { TableColumn } from '../../interfaces/tableColumn';

export class Model {
    public cols: KnockoutObservableArray<TableColumn>;
    public rows: KnockoutObservableArray<ObjectLiteral>;

    constructor() {
        this.cols = ko.observableArray<TableColumn>([]);
        this.rows = ko.observableArray<ObjectLiteral>([]);
    }

    public load = (cols: TableColumn[], rows: ObjectLiteral[]): void => {
	this.cols(cols);
	this.rows(rows);
    }
}
