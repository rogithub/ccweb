
import * as $ from 'jquery';
import * as ko from 'knockout';
import * as hw from '../components/hello-world.html';

$(() => {
    class Model {
        text: KnockoutObservable<string>;
        constructor() {
            this.text = ko.observable("Hola Mundo");
        }
    }
    ko.components.register("hello-world", {
        template: hw.default,
        viewModel: { createViewModel: () => new Model() }
    });

    ko.applyBindings();

    console.log(hw.default);

});
