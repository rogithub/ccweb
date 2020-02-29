import { TableColumn } from '../../shared/tableColumn';
import Constants from '../../constants/dataTableConstants';
import { ObjectLiteral } from '../../shared/objectLiteral';

export class ColumnBase implements TableColumn {
    public header: ObjectLiteral;
    public celTemplate: string;
    public headTemplate: string;
    public getCellData: (row: ObjectLiteral) => ObjectLiteral;
    public getHeadData: (header: ObjectLiteral) => ObjectLiteral;

    constructor(title: string, rowKey: string = title.toLocaleLowerCase()) {
        this.celTemplate = Constants.DATA_CELL_DEFAULT_TEMPLATE;
        this.headTemplate = Constants.DATA_CELL_DEFAULT_TEMPLATE;
        this.header = { title, rowKey }
        this.getCellData = row => row[rowKey];
        this.getHeadData = head => head.title;
    }

    public setGetCellData = <T>(fn: (row: ObjectLiteral) => T): ColumnBase => {
        this.getHeadData = fn;
        return this;
    }

    public setGetHeadData = <T>(fn: (row: ObjectLiteral) => T): ColumnBase => {
        this.getHeadData = fn;
        return this;
    }
}