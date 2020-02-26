import { ComponentService } from '../../utils/componentService';

describe('ComponentService', () => {
    let model = {};
    let ko: any;
    let el = {} as HTMLElement;
    let service: ComponentService;
    beforeEach(() => {

        ko = jasmine.createSpyObj('ko', ['cleanNode', 'applyBindings', 'register']);
        ko["components"] = jasmine.createSpyObj('components', ['register']);

        service = new ComponentService(ko);
    });

    describe('register', () => {

        it("should register new component", function () {
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
        });
    });
});
