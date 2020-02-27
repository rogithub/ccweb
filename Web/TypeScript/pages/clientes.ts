
import { Component } from '../services/component';
import { View as DataTableView } from '../components/dataTable';
import { View as DataCellView, Model as DataCellModel } from '../components/dataCell';
import { JsonDataTable } from '../models/jsonDataTable';

$(() => {
    let component = new Component(ko);

    component.register("data-cell", DataCellView, (params) => {
        return new DataCellModel(ko, params.template, params.data);
    });

    component.register("data-table", DataTableView, () => {

        let model = new JsonDataTable(ko, [{
            title: "Nombre", rowKey: "nombre", sortable: false
        }, {
            title: "Edad", rowKey: "edad", sortable: true
        }]);

        model.rows([{
            nombre: "Rodrigo",
            edad: 100
        }, {
            nombre: "Juan",
            edad: 200
        }]);

        return model;
    });

    ko.applyBindings();
});
