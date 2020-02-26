import { Model } from '../../../components/table/model';
import { ObjectLiteral } from '../../../interfaces/objectLiteral';
import { TableColumn } from '../../../interfaces/tableColumn';

describe('Model', () => {
    describe('load', () => {

        let ko: any = {
            observableArray: function <T>(val: T[]) {
                return () => val;
            }
        };

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
