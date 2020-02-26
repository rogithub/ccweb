
import { ComponentService } from '../utils/componentService';
import { View as DataTableView } from '../components/dataTable';
import { View as DataCellView, Model as DataCellModel } from '../components/dataCell';
import { DataTableBuilder } from '../models/dataTableBuilder';

$(() => {
    let component = new ComponentService(ko);

    component.register("data-cell", DataCellView.default, (params) => {
        return new DataCellModel(ko, params.template, params.data);
    });

    component.register("data-table", DataTableView.default, () => {
        let builder = new DataTableBuilder(ko);
        builder.addTextCol("Nombre", "nombre");
        builder.addSortableCol("Edad", "edad");

        builder.load([{
            nombre: "Rodrigo",
            edad: 33
        },
        {
            nombre: "Juan",
            edad: 22
        }]);

        return builder.get();
    });

    ko.applyBindings();
});
