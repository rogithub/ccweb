import { SortOrder } from '../constants/sortOrder';

export interface SortableColumn {
    order: KnockoutObservable<SortOrder>
}