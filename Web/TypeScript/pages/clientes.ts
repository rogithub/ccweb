
import { ComponentService } from '../utils/componentService';
import { View as TableView, Model as TableModel } from '../components/table';
import { ObjectLiteral } from '../interfaces/objectLiteral';
import { TableColumn } from '../interfaces/tableColumn';

$(() => {
    let component = new ComponentService(ko);
    component.register("table-component", TableView.default, () => {
        let cols = new Array<TableColumn>();
        let rows = new Array<ObjectLiteral>();

        cols.push({
            colTemplate: "nombre-template",
            headTemplate: "title-template",
            header: {
                title: "Nombre"
            }
        });

        cols.push({
            colTemplate: "edad-template",
            headTemplate: "title-template",
            header: {
                title: "Edad"
            }
        });

        rows.push({
            nombre: "Rodrigo",
            edad: 33
        });

        rows.push({
            nombre: "Juan",
            edad: 23
        })

        let model = new TableModel();

        model.load(cols, rows);


        return model;
    });

    ko.applyBindings();
});
