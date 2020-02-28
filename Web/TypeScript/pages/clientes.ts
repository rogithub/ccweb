import { Component } from '../services/component';
import { View as DataTableView, Model as DataTableModel } from '../components/dataTable';
import { View as PaginationView } from '../components/pagination';
import { View as SearchFieldView } from '../components/searchField';
import { View as DataCellView, Model as DataCellModel } from '../components/dataCell';
import { JsonReq } from '../services/jsonReq';
import serverInfo from '../constants/serverInfo';
import { ColumnBuilder } from '../models/columnBuilder';
import { Cliente } from '../models/cliente';

$(() => {
    let component = new Component(ko);

    component.register("pagination", PaginationView, (params) => {
        return params.model;
    });
    component.register("search-field", SearchFieldView, (params) => {
        return params.model;
    });

    component.register("data-cell", DataCellView, (params) => {
        return new DataCellModel(ko, params.template, params.data);
    });

    component.register("data-table", DataTableView, () => {
        let api = new JsonReq(serverInfo.host, fetch);

        let model = new DataTableModel<Cliente>(ko, api, "/clientes/search", [
            new ColumnBuilder("Folio", "id").sortHeader(ko),
            new ColumnBuilder("Empresa").build(),
            new ColumnBuilder("Contacto").build(),
            new ColumnBuilder("Teléfono", "telefono").build(),
            new ColumnBuilder("Email", "email").build(),
            new ColumnBuilder("Cliente Desde", "fechaCreado").customCell(r => new Date(r.fechaCreado).toLocaleDateString())
        ]);

        model.fetch();

        return model;
    });

    ko.applyBindings();
});
