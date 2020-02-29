import { JsonReq } from '../../services/jsonReq';

describe('Component', () => {
    let service: JsonReq;

    beforeEach(() => {
        let fetch = jasmine.createSpy("fetch");

        service = new JsonReq("localhost", fetch);
    });

    describe('get', () => {

        it("should fetch data", (done) => {
            done();
        });
    });
});
