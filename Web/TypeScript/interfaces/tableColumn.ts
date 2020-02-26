import { ObjectLiteral } from './objectLiteral';

export interface TableColumn {
    header: ObjectLiteral;
    celTemplate: string;
    modelFactory: (row: ObjectLiteral) => ObjectLiteral;
}
