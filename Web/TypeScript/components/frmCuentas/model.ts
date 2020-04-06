import { ObsExtension, ObsFrm } from 'valiko';
import { Cuenta } from '../../models/cuenta';
import { Api } from '../../shared/api';
import urls from '../../constants/serverInfo';
import { GuidService } from '../../services/guid';
import { Url } from '../../shared/url';
import { RequiredString } from '../../validators/requiredString';

export class Model extends ObsFrm {
    public nombre: ObsExtension<string>;
    public banco: ObsExtension<string>;
    public noCuenta: ObsExtension<string>;
    public clabe: ObsExtension<string>;
    public beneficiario: ObsExtension<string>;
    public email: ObsExtension<string>;    
    public activo: KnockoutObservable<boolean>;
    public efectivo: KnockoutObservable<boolean>;
    
    public guid: KnockoutObservable<string>;
    public id: KnockoutObservable<number>;
    private api: Api;
    private url: Url;
    public isNew: KnockoutComputed<boolean>;

    constructor(ko: KnockoutStatic, api: Api, url: Url) {
        super(ko);
        this.url = url;
        this.api = api;
        this.nombre = this.add<string>().with(new RequiredString());
        this.banco = this.add<string>().with(new RequiredString());
        this.noCuenta = this.add<string>().with(new RequiredString());
	this.clabe = this.add<string>().with(new RequiredString());
	this.beneficiario = this.add<string>().with(new RequiredString());
	this.email = this.add<string>();

	this.efectivo = ko.observable<boolean>();
	this.activo = ko.observable<boolean>();
	
        this.guid = ko.observable<string>('');
        this.id = ko.observable<number>(0);
        const self = this;
        this.isNew = ko.pureComputed(() => {
            return self.id() === 0;
        }, self);
    }

    public load(m: Cuenta): void {
        const self = this;
        self.banco.value(m.banco);
        self.clabe.value(m.clabe);
        self.noCuenta.value(m.noCuenta);
        self.email.value(m.email);
        self.beneficiario.value(m.beneficiario);
        self.nombre.value(m.nombre);        
	self.efectivo(m.efectivo);
	self.activo(m.activo);
	self.guid(m.guid);
        self.id(m.id);
    }

    public retrieve(): Cuenta {
        const self = this;
        return {
            nombre: self.nombre.value(),
	    banco: self.banco.value(),
            clabe: self.clabe.value(),
            noCuenta: self.noCuenta.value(),
            email: self.email.value(),
            beneficiario: self.beneficiario.value(),
            activo: self.activo(),
            efectivo: self.efectivo(),
            guid: self.guid(),
            id: self.id()
        }
    }

    public async onSave(): Promise<void> {
        const self = this;
        let isValid = await self.validate();
        if (isValid === false) return;

        let url = urls.api.cuentas.base;
        let model = self.retrieve();

        let method = self.isNew() ?
            self.api.post :
            self.api.put;

        await method<void>(url, model);
        self.indexRedirect();
    }

    public indexRedirect = () => {
        const self = this;
        self.url.navigate(urls.web.clientes.index);
    }

    public async init(guid: string): Promise<void> {
        const self = this;
        let url = `${urls.api.cuentas.get}/${guid}`;
        let cta = await self.api.get<Cuenta>(url);
        self.load(cta);
    }
}
