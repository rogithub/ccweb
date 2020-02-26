import { ObjectLiteral } from './objectLiteral';

export interface TableColumn {
    header: ObjectLiteral;
    celTemplate: string;
    headTemplate: string;
    getCellData: (row: ObjectLiteral) => ObjectLiteral;
    getHeadData: (row: ObjectLiteral) => ObjectLiteral;
}
