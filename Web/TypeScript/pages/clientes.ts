
import { ComponentService } from '../utils/componentService';
import { View as TableView, Model as TableModel } from '../components/table';
import { DataTableBuilder } from '../dataTable/dataTableBuilder';

$(() => {
    let component = new ComponentService(ko);
    component.register("table-component", TableView.default, () => {
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
