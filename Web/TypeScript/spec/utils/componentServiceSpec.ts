import { ComponentService } from '../../utils/componentService';
import ko from '../specHelpers/koMock';

describe('ComponentService', () => {
    let model = {};
    let service: ComponentService;

    beforeEach(() => {
        ko["components"] = jasmine.createSpyObj('components', ['register']);

        service = new ComponentService(ko);
    });

    describe('register', () => {

        it("should register new component", function (done) {
            let componentName = "test-component";
            let factory = () => { model };
            let template = `<!-- ko template: { name: 'TestTemplate' } --><!-- /ko -->`;

            let secondParam = {
                viewModel: { createViewModel: factory },
                template: template
            };

            expect(service.register(componentName, template, factory));
            expect(ko.components.register).toHaveBeenCalledTimes(1);
            expect(ko.components.register).toHaveBeenCalledWith(componentName, secondParam);
            done();
        });
    });
});
