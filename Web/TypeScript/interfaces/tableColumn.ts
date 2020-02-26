import { ObjectLiteral } from './objectLiteral';

export interface TableColumn {
    header: ObjectLiteral;
    headTemplate: string;
    colTemplate: string;
    modelFactory: (row: ObjectLiteral) => ObjectLiteral;
}
