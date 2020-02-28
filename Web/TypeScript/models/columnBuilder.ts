import { DataColInfo } from '../interfaces/dataColInfo';
import { TableColumn } from '../interfaces/tableColumn';
import Constants from '../constants/dataTableConstants';
import { ObjectLiteral } from '../interfaces/objectLiteral';

export default (
    title: string,
    rowKey: string = title.toLowerCase(),
    sortable: boolean = false,
    header: DataColInfo = { title, rowKey, sortable },
    celTemplate: string = Constants.DATA_CELL_DEFAULT_TEMPLATE,
    headTemplate: string = Constants.DATA_CELL_DEFAULT_TEMPLATE,
    getCellData: (row: ObjectLiteral) => ObjectLiteral = row => row[header.rowKey],
    getHeadData: (header: ObjectLiteral) => ObjectLiteral = header => header.title

): TableColumn => {
    return {
        celTemplate,
        headTemplate,
        getCellData,
        getHeadData,
        header,
    }
};