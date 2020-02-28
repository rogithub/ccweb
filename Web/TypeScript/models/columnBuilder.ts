import { DataColInfo } from '../interfaces/dataColInfo';
import { TableColumn } from '../interfaces/tableColumn';
import Constants from '../constants/dataTableConstants';
import { ObjectLiteral } from '../interfaces/objectLiteral';
import { SortableHeaderCell } from './sortableHeaderCell';

export class ColumnBuilder {
    private info: DataColInfo;
    private defGetCellData: (row: ObjectLiteral) => ObjectLiteral;
    private defGetHeadData: (head: ObjectLiteral) => ObjectLiteral;

    public constructor(title: string, rowKey: string = title.toLowerCase(), sortable: boolean = false) {
        this.info = { title, rowKey, sortable };
        this.defGetCellData = row => row[this.info.rowKey];
        this.defGetHeadData = head => head.title;
    }

    public build = (
        getCellData?: (row: ObjectLiteral) => ObjectLiteral,
        celTemplate?: string,

        getHeadData?: (head: ObjectLiteral) => ObjectLiteral,
        headTemplate?: string
    ):
        TableColumn => {
        return {
            header: this.info,
            celTemplate: celTemplate || Constants.DATA_CELL_DEFAULT_TEMPLATE,
            headTemplate: headTemplate || Constants.DATA_CELL_DEFAULT_TEMPLATE,
            getCellData: getCellData || this.defGetCellData,
            getHeadData: getHeadData || this.defGetHeadData
        }
    }

    public customHeader = (
        getHeadData?: (head: ObjectLiteral) => ObjectLiteral,
        headTemplate?: string,
    ):
        TableColumn => {
        return this.build(null, null, getHeadData, headTemplate);
    }

    public sortHeader = (ko: KnockoutStatic,
        getHeadData: (head: ObjectLiteral) => ObjectLiteral = head => new SortableHeaderCell(ko, head.title),
        headTemplate: string = Constants.DATA_CELL_SORTABLE_HEADER
    ):
        TableColumn => {
        return this.build(null, null, getHeadData, headTemplate);
    }

    public customCell = <T>(
        getCellData?: (row: ObjectLiteral) => T,
        celTemplate?: string
    ):
        TableColumn => {
        return this.build(getCellData, celTemplate);
    }
}