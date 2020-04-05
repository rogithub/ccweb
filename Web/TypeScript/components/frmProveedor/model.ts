import { ObsExtension, ObsFrm } from 'valiko';
import { Proveedor } from '../../models/proveedor';
import { Api } from '../../shared/api';
import urls from '../../constants/serverInfo';
import { Url } from '../../shared/url';
import { RequiredString } from '../../validators/requiredString';

export class Model extends ObsFrm {
    public contacto: ObsExtension<string>;
    public empresa: ObsExtension<string>;
    public telefono: ObsExtension<string>;
    public email: ObsExtension<string>;
    public domicilio: ObsExtension<string>;
    public comentarios: ObsExtension<string>;
    public guid: KnockoutObservable<string>;
    public id: KnockoutObservable<number>;
    public activo: KnockoutObservable<boolean>;
    private api: Api;
    private url: Url;
    public isNew: KnockoutComputed<boolean>;

    constructor(ko: KnockoutStatic, api: Api, url: Url) {
        super(ko);
        this.url = url;
        this.api = api;
        this.contacto = this.add<string>().with(new RequiredString());
        this.empresa = this.add<string>().with(new RequiredString());
        this.telefono = this.add<string>().with(new RequiredString());
        this.email = this.add<string>();
        this.domicilio = this.add<string>();
        this.comentarios = this.add<string>();
        this.guid = ko.observable<string>('');
        this.id = ko.observable<number>(0);
        this.activo = ko.observable<boolean>(true);

        const self = this;
        this.isNew = ko.pureComputed(() => {
            return self.id() === 0;
        }, self);
    }

    public load(m: Proveedor): void {
        const self = this;
        self.contacto.value(m.contacto);
        self.empresa.value(m.empresa);
        self.telefono.value(m.telefono);
        self.email.value(m.email);
        self.domicilio.value(m.domicilio);
        self.comentarios.value(m.comentarios);
        self.guid(m.guid);
        self.id(m.id);
        self.activo(m.activo);
    }

    public retrieve(): Proveedor {
        const self = this;
        return {
            contacto: self.contacto.value(),
            empresa: self.empresa.value(),
            telefono: self.telefono.value(),
            email: self.email.value(),
            domicilio: self.domicilio.value(),
            comentarios: self.comentarios.value(),
            activo: self.activo(),
            guid: self.guid(),
            id: self.id()
        }
    }

    public async onSave(): Promise<void> {
        const self = this;
        let isValid = await self.validate();
        if (isValid === false) return;

        let url = urls.api.proveedores.base;
        let model = self.retrieve();

        let method = self.isNew() ?
            self.api.post :
            self.api.put;

        await method<void>(url, model);
        self.indexRedirect();
    }

    public indexRedirect = () => {
        const self = this;
        self.url.navigate(urls.web.proveedores.index);
    }

    public async init(id: string): Promise<void> {
        const self = this;
        let url = `${urls.api.proveedores.get}/${id}`;
        let model = await self.api.get<Proveedor>(url);
        self.load(model);
    }
}