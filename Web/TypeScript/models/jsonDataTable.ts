import { Model as DataTableModel, ColumnModel } from '../components/dataTable';
import { Api } from '../shared/api';
import { ResultSet } from './resultSet';
import { Cliente } from './cliente';
import { SearchData, OrderCol } from './searchData';
import { TableColumn } from '../shared/tableColumn';
import { SortOrder } from '../constants/sortOrder';
import { SortableColumn } from '../models/sortableColumn';

export class JsonDataTable extends DataTableModel {
    private api: Api;
    public pageSize: KnockoutObservable<number>;
    public page: KnockoutObservable<number>;
    public searchText: KnockoutObservable<string>;
    public totalRows: KnockoutObservable<number>;
    public searchUrl: string;
    public sorting: KnockoutComputed<OrderCol[]>;

    constructor(ko: KnockoutStatic, api: Api, searchUrl: string, cols: TableColumn[]) {
        super(ko);
        this.api = api;
        this.searchUrl = searchUrl;
        this.cols(this.ko.utils.arrayMap(cols, c => new ColumnModel(c)));
        this.page = this.ko.observable<number>(1);
        this.pageSize = this.ko.observable<number>(20);
        this.searchText = this.ko.observable<string>("");
        this.totalRows = this.ko.observable<number>(0);

        this.sorting = this.ko.pureComputed<OrderCol[]>(() => {
            let cols = this.ko.utils.arrayFilter(this.cols(), c => {
                if (typeof c.model.order !== "function") return false;
                let item = c.model as SortableColumn;
                return item.order() !== SortOrder.None;
            });

            return this.ko.utils.arrayMap(cols, (c: ColumnModel): OrderCol => {
                let item = c.model as SortableColumn;
                return {
                    col: c.info.header["rowKey"],
                    order: item.order() === SortOrder.Asc ? 0 : 1
                }
            });
        });

        this.page.subscribe(this.fetch);
        this.pageSize.subscribe(this.fetch);
        this.searchText.subscribe(this.fetch);
        this.sorting.subscribe(this.fetch);
    }

    fetch = async () => {

        let data: SearchData = {
            limit: this.pageSize(),
            offset: (this.page() - 1),
            columns: this.sorting(),
            pattern: this.searchText()
        }

        let set = await this.api.post<ResultSet<Cliente[]>>(this.searchUrl, data);
        this.totalRows(set.totalRows);
        this.rows(set.payload);
    }
}
