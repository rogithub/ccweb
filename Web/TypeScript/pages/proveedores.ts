import { Component } from '../services/component';
import { View as DataTableView, Model as DataTableModel } from '../components/dataTable';
import { Model as Dialog } from '../components/dialog';
import { View as PaginationView } from '../components/pagination';
import { View as SearchFieldView } from '../components/searchField';
import { DefaultColumn, SortableColumn, ActionsColumn } from '../components/dataCell';
import { View as DataCellView, Model as DataCellModel } from '../components/dataCell';
import { JsonReq } from '../services/jsonReq';
import serverInfo from '../constants/serverInfo';
import { Proveedor } from '../models/proveedor';
import { View as DialogView } from '../components/dialog';
import { AccionesProveedor } from '../models/accionesProveedor';
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
        let model: DataTableModel<Proveedor>;
        let dialog = new Dialog(ko, $);
        let redirect = new Redirect(window);

        model = new DataTableModel<Proveedor>(ko, api, serverInfo.api.proveedores.search, [
            new SortableColumn(ko, "Folio", "id"),
            new DefaultColumn("Empresa"),
            new DefaultColumn("Contacto"),
            new DefaultColumn("Teléfono", "telefono"),
            new DefaultColumn("Email", "email"),
            new ActionsColumn("Acciones").setGetCellData(r => new AccionesProveedor(ko, api, dialog, redirect, r as Proveedor))
        ]);

        model.load();

        return model;
    });

    ko.applyBindings();
});
