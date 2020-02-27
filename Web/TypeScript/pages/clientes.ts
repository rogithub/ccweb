
import { Component } from '../services/component';
import { View as DataTableView, Model as DataTableModel } from '../components/dataTable';
import { View as DataCellView, Model as DataCellModel } from '../components/dataCell';
import Constants from '../constants/dataTableConstants';
import { SortableHeaderCell } from '../models/sortableHeaderCell';

$(() => {
    let component = new Component(ko);

    component.register("data-cell", DataCellView, (params) => {
        return new DataCellModel(ko, params.template, params.data);
    });

    component.register("data-table", DataTableView, () => {
        let model = new DataTableModel(ko);

        model.cols.push({
            celTemplate: Constants.DATA_CELL_DEFAULT_TEMPLATE,
            headTemplate: Constants.DATA_CELL_DEFAULT_TEMPLATE,
            getCellData: r => r["nombre"],
            getHeadData: h => h.title,
            header: { title: "Nombre" }
        });

        model.cols.push({
            celTemplate: Constants.DATA_CELL_DEFAULT_TEMPLATE,
            headTemplate: Constants.DATA_CELL_SORTABLE_HEADER,
            getCellData: r => r["edad"],
            getHeadData: h => new SortableHeaderCell(ko, h.title),
            header: { title: "Edad" }
        });

        model.rows([{
            nombre: "Rodrigo",
            edad: 33
        },
        {
            nombre: "Juan",
            edad: 22
        }]);

        return model;
    });

    ko.applyBindings();
});
