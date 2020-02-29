import { Model } from '../../../components/dataTable/model';
import { DefaultColumn } from '../../../components/dataCell/defaultColumn';
import { ObjectLiteral } from '../../../shared/objectLiteral';
import ko from '../../specHelpers/koMock';
import { ApiMock } from '../../specHelpers/apiMock';

interface Persona {
    nombre: string,
    edad: number
}

describe('Model', () => {
    describe('constructor', () => {

        it("should init table", (done) => {

            let searchUrl = "/search"
            let m = new Model<Persona>(ko, new ApiMock(), searchUrl, [
                new DefaultColumn("Nombre"),
                new DefaultColumn("Edad")
            ]);

            expect(m.searchUrl).toBe(searchUrl);
            expect(m.searchModel.searchText()).toBe("");

            done();
        });
    });
});
