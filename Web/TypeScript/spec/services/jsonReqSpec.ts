import { JsonReq } from '../../services/jsonReq';

describe('Component', () => {

    let fetch;
    let service: JsonReq;
    let response = {
        json: () => 1
    }

    beforeEach(() => {
        fetch = jasmine.createSpy("fetch").and.resolveTo(response);
        service = new JsonReq("localhost:80", fetch);
    });

    describe('response', () => {
        it("should get data", async (done) => {
            let n = await service.get<number>("/get");
            expect(n).toBe(1);

            done();
        });
        it("should post data", async (done) => {
            let n = await service.post<number>("/post", { data: "test" });
            expect(n).toBe(1);

            done();
        });
    });

});
