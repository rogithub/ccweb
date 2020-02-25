
import * as $ from 'jquery';
import * as ko from 'knockout';
import { ComponentService } from '../utils/componentService';
import { View, HelloWorld } from '../components/helloWorld';

$(() => {

    let component = new ComponentService(ko);
    component.register("hello-world", View.default, () => new HelloWorld());

    ko.applyBindings();
});
