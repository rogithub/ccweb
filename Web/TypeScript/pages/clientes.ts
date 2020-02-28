import { Component } from '../services/component';
import { View as DataTableView } from '../components/dataTable';
import { View as DataCellView, Model as DataCellModel } from '../components/dataCell';
import { JsonDataTable } from '../models/jsonDataTable';
import { JsonReq } from '../services/jsonReq';
import serverInfo from '../constants/serverInfo';
import { ColumnBuilder } from '../models/columnBuilder';

$(() => {
    let component = new Component(ko);

    component.register("data-cell", DataCellView, (params) => {
        return new DataCellModel(ko, params.template, params.data);
    });

    component.register("data-table", DataTableView, () => {
        let api = new JsonReq(serverInfo.host, fetch);

        let model = new JsonDataTable(ko, api, [
            new ColumnBuilder("Folio", "id").sortHeader(ko),
            new ColumnBuilder("Empresa").build(),
            new ColumnBuilder("Contacto").build(),
            new ColumnBuilder("Teléfono", "telefono").build(),
            new ColumnBuilder("Email", "email").build(),
            new ColumnBuilder("Cliente Desde", "fechaCreado").build()
        ]);

        model.fetch("/clientes/search")

        return model;
    });

    ko.applyBindings();
});
