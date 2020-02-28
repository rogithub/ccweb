import { Model } from '../../../components/dataTable/model';
import { ObjectLiteral } from '../../../shared/objectLiteral';
import { TableColumn } from '../../../shared/tableColumn';
import ko from '../../specHelpers/koMock';

describe('Model', () => {
    describe('load', () => {

        it("should load table", function (done) {
            let m = new Model(ko);
            let cols: TableColumn[] = [];
            let rows: ObjectLiteral[] = [];


            expect(m.cols()).toEqual(cols);
            expect(m.rows()).toEqual(rows);

            done();
        });
    });
});
