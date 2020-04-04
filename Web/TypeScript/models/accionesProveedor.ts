import { Proveedor } from './proveedor';
import { Model as Dialog, PopupSize } from '../components/dialog';
import { Url } from '../shared/url';
import { Api } from '../shared/api';
import urls from '../constants/serverInfo';

export class AccionesProveedor {
    private proveedor: Proveedor;
    private dialog: Dialog;
    private url: Url;
    private ko: KnockoutStatic;
    private api: Api;
    constructor(ko: KnockoutStatic, api: Api, dialog: Dialog, url: Url, proveedor: Proveedor) {
        this.ko = ko;
        this.api = api;
        this.proveedor = proveedor;
        this.dialog = dialog;
        this.url = url;
    }

    public confirm = async (): Promise<void> => {
        const self = this;
        let url = `${urls.api.proveedores.base}/${self.proveedor.guid}`;
        await self.api.del<void>(url);
        self.url.navigate(urls.web.proveedores.index);
    }

    public onDelete = () => {
        const self = this;
        let dlg = self.dialog.build({
            contentTemplate: "delete-proveedor-dialog-content",
            footerTemplate: "delete-proveedor-dialog-footer",
            model: self,
            title: "Borrar Proveedor",
            size: PopupSize.medium
        });

        dlg.modal("show");
    }

    public onEdit = () => {
        const self = this;
        let url = `${urls.web.proveedores.editar}/${self.proveedor.guid}`;
        self.url.navigate(url);
    }
}