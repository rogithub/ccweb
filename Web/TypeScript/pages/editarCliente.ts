import { View as TextArea, InputModel } from '../components/textArea';
import { View as TextEmail } from '../components/textEmail';
import { View as TextInput } from '../components/textInput';
import { View as FrmCliente, Model as FormClienteModel } from '../components/frmCliente';
import { Component } from '../services/component';
import serverInfo from '../constants/serverInfo';
import { JsonReq } from '../services/jsonReq';
import { Redirect } from '../services/redirect';

$(() => {

    let url = new Redirect(window);
    let api = new JsonReq(serverInfo.host, window);

    let component = new Component(ko);

    component.register("text-area", TextArea, (params) => {
        return new InputModel(params.options);
    });
    component.register("text-email", TextEmail, (params) => {
        return new InputModel(params.options);
    });
    component.register("text-input", TextInput, (params) => {
        return new InputModel(params.options);
    });
    component.register("frm-cliente", FrmCliente, (params) => {
        let model = new FormClienteModel(ko, api, url);
        model.init(params.id);
        return model;
    });

    ko.applyBindings();
});