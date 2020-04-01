import { Cliente } from './cliente';
import { Model as Dialog, PopupSize } from '../components/dialog';
import { Url } from '../shared/url';


export class AccionesCliente {
    private cliente: Cliente;
    private dialog: Dialog;
    private nav: Url;
    constructor(dialog: Dialog, nav: Url, cliente: Cliente) {
        this.cliente = cliente;
        this.dialog = dialog;
        this.nav = nav;
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

        dlg.modal("show");
    }

    public onEdit = () => {
        const self = this;
        self.nav.navigate(`/Clientes/Editar/${self.cliente.guid}`);
    }
}