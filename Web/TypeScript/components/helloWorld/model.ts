import * as ko from 'knockout';

export class Model {
    text: KnockoutObservable<string>;
    constructor() {
        this.text = ko.observable("Hola Mundo");
    }
}