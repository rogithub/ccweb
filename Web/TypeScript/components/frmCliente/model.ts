import { ObsExtension, ObsFrm } from '@rogithub/valiko';
import { Cliente } from '../../models/cliente';
import { Api } from '../../shared/api';

export class Model extends ObsFrm {
    public contacto: ObsExtension<string>;
    public empresa: ObsExtension<string>;
    public telefono: ObsExtension<string>;
    public email: ObsExtension<string>;
    public domicilio: ObsExtension<string>;
    public facturacionGuid: KnockoutObservable<string>;
    public fechaCreado: KnockoutObservable<Date>;
    public guid: KnockoutObservable<string>;
    public id: KnockoutObservable<number>;
    public activo: KnockoutObservable<boolean>;
    public api: Api;

    constructor(ko: KnockoutStatic, api: Api) {
        super(ko);
        this.api = api;
        this.contacto = this.add<string>();
        this.empresa = this.add<string>();
        this.telefono = this.add<string>();
        this.email = this.add<string>();
        this.domicilio = this.add<string>();
        this.activo = ko.observable<boolean>(true);
        this.facturacionGuid = ko.observable<string>('');
        this.fechaCreado = ko.observable<Date>(new Date(Date.now()));
        this.guid = ko.observable<string>('');
        this.id = ko.observable<number>(0);
    }

    public load(m: Cliente): void {
        const self = this;
        self.contacto.value(m.contacto);
        self.empresa.value(m.empresa);
        self.telefono.value(m.telefono);
        self.email.value(m.email);
        self.domicilio.value(m.domicilio);
        self.activo(m.activo);
        self.facturacionGuid(m.facturacionGuid);
        self.fechaCreado(m.fechaCreado);
        self.guid(m.guid);
        self.id(m.id);
    }

    public retrieve(): Cliente {
        const self = this;
        return {
            contacto: self.contacto.value(),
            empresa: self.empresa.value(),
            telefono: self.telefono.value(),
            email: self.email.value(),
            domicilio: self.domicilio.value(),
            activo: self.activo(),
            facturacionGuid: self.facturacionGuid(),
            fechaCreado: self.fechaCreado(),
            guid: self.guid(),
            id: self.id()
        }
    }

    public async onSave(): Promise<void> {
        const self = this;
        let isValid = await self.validate();
        if (isValid === false) return;

        alert(JSON.stringify(self.retrieve()));
    }
}