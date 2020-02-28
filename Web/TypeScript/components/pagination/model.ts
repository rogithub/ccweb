

export class Model {
    private ko: KnockoutStatic;

    public pageSize: KnockoutObservable<number>;
    public page: KnockoutObservable<number>;
    public totalRows: KnockoutObservable<number>;

    constructor(ko: KnockoutStatic) {
        this.ko = ko;
        this.page = this.ko.observable<number>(1);
        this.pageSize = this.ko.observable<number>(20);
        this.totalRows = this.ko.observable<number>(0);
    }
}

