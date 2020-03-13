import { Cliente } from './cliente';
import { Model as DataTableModel } from '../components/dataTable';
import { Model as Dialog, PopupSize } from '../components/dialog';

export class AccionesCliente {
    private cliente: Cliente;
    private table: DataTableModel<Cliente>;
    private dialog: Dialog;
    constructor(ko: KnockoutStatic, $: JQueryStatic, cliente: Cliente, table: DataTableModel<Cliente>) {
        this.cliente = cliente;
        this.table = table;
        this.dialog = new Dialog(ko, $);
    }

    public onDelete = () => {
        const self = this;
        let dlg = self.dialog.build({
            contentTemplate: "delete-cliente-dialog-content",
            footerTemplate: "delete-cliente-dialog-footer",
            model: self.cliente,
            title: "Borrar Cliente",
            size: PopupSize.medium
        });

        dlg.show();
    }

    public onEdit = () => {
        const self = this;
        alert("navegar a editar cliente page");
    }
}