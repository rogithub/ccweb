import { Model } from '../../../components/dataTable/model';
import { DefaultColumn } from '../../../components/dataCell/defaultColumn';
import ko from '../../specHelpers/koMock';
import { ApiMock } from '../../specHelpers/apiMock';

interface Persona {
    nombre: string,
    edad: number
}

describe('Model', () => {

    let api: ApiMock;
    let response = {
        json: () => [{
            nombre: "Rodrigo",
            edad: 37
        }]
    }

    beforeEach(() => {
        api = new ApiMock();
        api.post = jasmine.createSpy("post").and.resolveTo(response);
    });

    describe('constructor', () => {

        it("should init table", (done) => {

            let searchUrl = "/search"
            let m = new Model<Persona>(ko, api, searchUrl, [
                new DefaultColumn("Nombre"),
                new DefaultColumn("Edad")
            ]);

            expect(m.searchUrl).toBe(searchUrl);
            expect(m.searchModel.searchText()).toBe("");

            done();
        });
    });
});
