import { ObjectLiteral } from './objectLiteral';

export interface TableColumn {
    header: ObjectLiteral;
    celTemplate: string;
    getCellData: (row: ObjectLiteral) => ObjectLiteral;
}
