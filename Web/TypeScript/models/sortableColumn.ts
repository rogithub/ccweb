import { SortOrder } from '../enums/sortOrder';

export interface SortableColumn {
    order: KnockoutObservable<SortOrder>
}