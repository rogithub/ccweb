import { Component } from '../services/component';
import { View as DataTableView, Model as DataTableModel } from '../components/dataTable';
import { Model as Dialog } from '../components/dialog';
import { View as PaginationView } from '../components/pagination';
import { View as SearchFieldView } from '../components/searchField';
import { DefaultColumn, SortableColumn, ActionsColumn } from '../components/dataCell';
import { View as DataCellView, Model as DataCellModel } from '../components/dataCell';
import { JsonReq } from '../services/jsonReq';
import serverInfo from '../constants/serverInfo';
import { Cliente } from '../models/cliente';
import { View as DialogView } from '../components/dialog';
import { AccionesCliente } from '../models/accionesCliente';
import { Redirect } from '../services/redirect';

$(() => {
    let api = new JsonReq(serverInfo.host, window);
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

    component.register("dialog", DialogView, () => {
        return {}; //empty model
    });

    component.register("data-table", DataTableView, () => {
        let model: DataTableModel<Cliente>;
        let dialog = new Dialog(ko, $);
        let redirect = new Redirect(window);

        model = new DataTableModel<Cliente>(ko, api, serverInfo.api.clientes.search, [
            new SortableColumn(ko, "Folio", "id"),
            new DefaultColumn("Empresa"),
            new DefaultColumn("Contacto"),
            new DefaultColumn("Teléfono", "telefono"),
            new DefaultColumn("Email", "email"),
            new DefaultColumn("Cliente Desde", "fechaCreado").setGetCellData(r => new Date(r.fechaCreado).toLocaleDateString()),
            new ActionsColumn("Acciones").setGetCellData(r => new AccionesCliente(ko, api, dialog, redirect, r as Cliente))
        ]);

        model.load();

        return model;
    });

    ko.applyBindings();
});
