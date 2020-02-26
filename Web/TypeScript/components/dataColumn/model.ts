import { SortOrder } from '../../enums/sortOrder';

export class Model {
    public order: KnockoutObservable<SortOrder>;
    public title: KnockoutObservable<string>;
    private ko: KnockoutStatic;

    constructor(ko: KnockoutStatic, title: string = "") {
        this.ko = ko;
        this.order = this.ko.observable<SortOrder>(SortOrder.None);
        this.title = this.ko.observable<string>(title);
    }
}

