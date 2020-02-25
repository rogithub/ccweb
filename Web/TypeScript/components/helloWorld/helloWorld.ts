import * as ko from 'knockout';

export class HelloWorld {
    text: KnockoutObservable<string>;
    constructor() {
        this.text = ko.observable("Hola Mundo");
    }
}