import { ObsExtension, ObsFrm } from 'valiko';
import { Facturacion } from '../../models/facturacion';
import { Cliente } from '../../models/cliente';
import { Api } from '../../shared/api';
import urls from '../../constants/serverInfo';
import { Url } from '../../shared/url';
import { GuidService } from '../../services/guid';
import { RequiredString } from '../../validators/requiredString';

export class Model extends ObsFrm {
    public rfc: ObsExtension<string>;
    public nombre: ObsExtension<string>;
    public calle: ObsExtension<string>;
    public noExterior: ObsExtension<string>;
    public noInterior: ObsExtension<string>;
    public colonia: ObsExtension<string>;
    public ciudad: ObsExtension<string>;
    public estado: ObsExtension<string>;
    public cp: ObsExtension<string>;
    public email: ObsExtension<string>;

    public clienteGuid: KnockoutObservable<string>;
    public guid: KnockoutObservable<string>;
    public id: KnockoutObservable<number>;
    private api: Api;
    private url: Url;
    public isNew: KnockoutComputed<boolean>;

    constructor(ko: KnockoutStatic, api: Api, url: Url) {
        super(ko);
        this.url = url;
        this.api = api;

        this.rfc = this.add<string>().with(new RequiredString());
        this.nombre = this.add<string>().with(new RequiredString());
        this.calle = this.add<string>().with(new RequiredString());
        this.noExterior = this.add<string>().with(new RequiredString());
        this.noInterior = this.add<string>();
        this.colonia = this.add<string>().with(new RequiredString());
        this.ciudad = this.add<string>().with(new RequiredString());
        this.estado = this.add<string>().with(new RequiredString());
        this.cp = this.add<string>().with(new RequiredString());
        this.email = this.add<string>().with(new RequiredString());

        this.guid = ko.observable<string>('');
        this.clienteGuid = ko.observable<string>('');
        this.id = ko.observable<number>(0);
        const self = this;
        this.isNew = ko.pureComputed(() => {
            return self.id() === 0;
        }, self);
    }

    public load(m: Facturacion): void {
        const self = this;
        self.rfc.value(m.rfc);
        self.nombre.value(m.nombre);
        self.calle.value(m.calle);
        self.noExterior.value(m.noExterior);
        self.noInterior.value(m.noInterior);
        self.colonia.value(m.colonia);
        self.ciudad.value(m.ciudad);
        self.estado.value(m.estado);
        self.cp.value(m.cp);
        self.email.value(m.email);

        self.guid(m.guid);
        self.id(m.id);
    }

    public retrieve(): Facturacion {
        const self = this;
        return {
            rfc: self.rfc.value(),
            nombre: self.nombre.value(),
            calle: self.calle.value(),
            noExterior: self.noExterior.value(),
            noInterior: self.noInterior.value(),
            colonia: self.colonia.value(),
            ciudad: self.ciudad.value(),
            estado: self.estado.value(),
            cp: self.cp.value(),
            email: self.email.value(),
            guid: self.guid(),
            id: self.id()
        }
    }

    public async onSave(): Promise<void> {
        const self = this;
        let isValid = await self.validate();
        if (isValid === false) return;

        let url = urls.api.facturacion.base;
        let model = self.retrieve();

        let method = self.isNew() ?
            self.api.post :
            self.api.put;

        await method<void>(url, model);
        self.indexRedirect();
    }

    public indexRedirect = () => {
        const self = this;
        let url = `${urls.web.clientes.editar}/${self.clienteGuid()}`;
        self.url.navigate(url);
    }

    public async init(clienteGuid: string, newGuid: string): Promise<void> {
        const self = this;
        self.clienteGuid(clienteGuid);
        let url = `${urls.api.clientes.get}/${clienteGuid}`;
        let cte = await self.api.get<Cliente>(url);

        if (GuidService.hasValue(cte.facturacionGuid)) {
            url = `${urls.api.facturacion.get}/${cte.facturacionGuid}`;
            let model = await self.api.get<Facturacion>(url);
            self.load(model);
            return;
        }

        self.guid(newGuid);
    }
}