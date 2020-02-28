import { Component } from '../services/component';
import { View as DataTableView } from '../components/dataTable';
import { View as DataCellView, Model as DataCellModel } from '../components/dataCell';
import { JsonDataTable } from '../models/jsonDataTable';
import { JsonReq } from '../services/jsonReq';
import serverInfo from '../constants/serverInfo';
import colBuilder from '../models/columnBuilder';

$(() => {
    let component = new Component(ko);

    component.register("data-cell", DataCellView, (params) => {
        return new DataCellModel(ko, params.template, params.data);
    });

    component.register("data-table", DataTableView, () => {
        let api = new JsonReq(serverInfo.host, fetch);

        let model = new JsonDataTable(ko, api, [
            colBuilder("Folio", "id"),
            colBuilder("Empresa"),
            colBuilder("Contacto"),
            colBuilder("Teléfono", "telefono"),
            colBuilder("Email", "email"),
            colBuilder("Cliente Desde", "fechaCreado")
        ]);

        model.fetch("/clientes/search")

        return model;
    });

    ko.applyBindings();
});
