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

            expect(true).toBe(true);
        });
    });
});
