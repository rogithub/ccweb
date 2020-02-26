
import { ComponentService } from '../utils/componentService';
import { View as DataTableView } from '../components/dataTable';
import { View as DataColumnView, Model as DataColumnModel } from '../components/dataColumn';
import { DataTableBuilder } from '../dataTable/dataTableBuilder';

$(() => {
    let component = new ComponentService(ko);
    component.register("data-column", DataColumnView.default, (params) => {
        return new DataColumnModel(ko, params.title);
    });

    component.register("data-table", DataTableView.default, () => {
        let builder = new DataTableBuilder(ko);
        builder.addCol("Nombre", "nombre");
        builder.addCol("Edad", "edad");

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
