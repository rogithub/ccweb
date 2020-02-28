import { Model as DataTableModel, ColumnModel } from '../components/dataTable';
import { Model as PaginationModel } from '../components/pagination';
import { Api } from '../shared/api';
import { ResultSet } from './resultSet';
import { Cliente } from './cliente';
import { SearchData, OrderCol } from './searchData';
import { TableColumn } from '../shared/tableColumn';
import { SortOrder } from '../constants/sortOrder';
import { SortableColumn } from '../models/sortableColumn';

export class JsonDataTable extends DataTableModel {
    private api: Api;
    public searchText: KnockoutObservable<string>;
    public searchUrl: string;
    public sorting: KnockoutComputed<OrderCol[]>;
    public pagination: PaginationModel;

    constructor(ko: KnockoutStatic, api: Api, searchUrl: string, cols: TableColumn[]) {
        super(ko);
        this.api = api;
        this.searchUrl = searchUrl;
        this.cols(this.ko.utils.arrayMap(cols, c => new ColumnModel(c)));
        this.searchText = this.ko.observable<string>("");
        this.pagination = new PaginationModel(ko);

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

        this.pagination.page.subscribe(this.fetch);
        this.pagination.pageSize.subscribe(this.fetch);
        this.searchText.subscribe(this.fetch);
        this.sorting.subscribe(this.fetch);
    }

    fetch = async () => {

        let data: SearchData = {
            limit: this.pagination.pageSize(),
            offset: (this.pagination.page() - 1),
            columns: this.sorting(),
            pattern: this.searchText()
        }

        let set = await this.api.post<ResultSet<Cliente[]>>(this.searchUrl, data);
        this.pagination.totalRows(set.totalRows);
        this.rows(set.payload);
    }
}
