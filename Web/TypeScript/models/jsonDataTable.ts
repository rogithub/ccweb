import { Model as DataTableModel } from '../components/dataTable';
import { DataColInfo } from '../interfaces/dataColInfo';
import { Api } from '../interfaces/api';
import toTableCol from '../mappers/toTableCol';
import { ResultSet } from './resultSet';
import { Cliente } from './cliente';
import { SearchData } from './searchData';

export class JsonDataTable extends DataTableModel {
    private api: Api;
    public pageSize: KnockoutObservable<number>;
    public page: KnockoutObservable<number>;
    public searchText: KnockoutObservable<string>;
    public totalRows: KnockoutObservable<number>;

    constructor(ko: KnockoutStatic, api: Api, cols: DataColInfo[]) {
        super(ko);
        this.api = api;
        this.cols(this.ko.utils.arrayMap(cols, c => toTableCol(ko, c)));
        this.page = this.ko.observable<number>(1);
        this.pageSize = this.ko.observable<number>(20);
        this.searchText = this.ko.observable<string>("");
        this.totalRows = this.ko.observable<number>(0);
    }

    fetch = async (url: string) => {
        let data: SearchData = {
            limit: this.pageSize(),
            offset: (this.page() - 1)
        }
        let set = await this.api.post<ResultSet<Cliente[]>>(url, data);
        this.totalRows(set.totalRows);
        this.rows(set.payload);
    }
}
