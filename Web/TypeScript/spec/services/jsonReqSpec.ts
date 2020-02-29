import { JsonReq } from '../../services/jsonReq';

describe('Component', () => {

    let service: JsonReq;
    let fetch;

    beforeEach(() => {
        fetch = jasmine.createSpy("fetch").and.resolveTo({
            json: () => 1
        });

        service = new JsonReq("localhost:80", fetch);
    });

    describe('get', () => {
        it("should get data", async (done) => {
            let n = await service.get<number>("/get");
            expect(n).toBe(1);

            done();
        });
    });

});
