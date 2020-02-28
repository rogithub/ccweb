import { Component } from '../services/component';
import { View as DataTableView } from '../components/dataTable';
import { View as DataCellView, Model as DataCellModel } from '../components/dataCell';
import { JsonDataTable } from '../models/jsonDataTable';
import { JsonReq } from '../services/jsonReq';

$(() => {
    let component = new Component(ko);

    component.register("data-cell", DataCellView, (params) => {
        return new DataCellModel(ko, params.template, params.data);
    });

    component.register("data-table", DataTableView, () => {
        let api = new JsonReq("https://localhost:5001", fetch);

        let model = new JsonDataTable(ko, api, [{
            title: "Folio", rowKey: "id", sortable: false
        },{
            title: "Empresa", rowKey: "empresa", sortable: false
        },{
            title: "Contacto", rowKey: "contacto", sortable: false
        },{
            title: "Teléfono", rowKey: "telefono", sortable: false
        },{
            title: "Email", rowKey: "email", sortable: false
        }, {
            title: "Cliente desde", rowKey: "fechaCreado", sortable: true
        }]);

        model.fetch("/clientes/search")

        return model;
    });

    ko.applyBindings();
});
