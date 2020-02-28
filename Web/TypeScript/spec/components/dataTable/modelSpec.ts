import { Model, ColumnModel } from '../../../components/dataTable/model';
import { ObjectLiteral } from '../../../shared/objectLiteral';
import ko from '../../specHelpers/koMock';

describe('Model', () => {
    describe('load', () => {

        it("should load table", function (done) {
            let m = new Model(ko);
            let cols: ColumnModel[] = [];
            let rows: ObjectLiteral[] = [];


            expect(m.cols()).toEqual(cols);
            expect(m.rows()).toEqual(rows);

            done();
        });
    });
});
