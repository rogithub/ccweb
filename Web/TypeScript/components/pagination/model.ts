import range from '../../constants/range';

export class Model {
    private ko: KnockoutStatic;

    public pageSize: KnockoutObservable<number>;
    public page: KnockoutObservable<number>;
    public totalRows: KnockoutObservable<number>;
    public list: KnockoutComputed<number[]>;

    constructor(ko: KnockoutStatic) {
        this.ko = ko;
        this.page = this.ko.observable<number>(1);
        this.pageSize = this.ko.observable<number>(20);
        this.totalRows = this.ko.observable<number>(0);

        this.list = this.ko.pureComputed(() => {
            if (this.totalRows() <= 0) return [];

            let pageCount = this.totalRows() / this.pageSize();
            let remainder = this.totalRows() % this.pageSize();

            if (remainder > 0) {
                pageCount += 1;
            }

            return range(1, pageCount, 1);
        });
    }
}

