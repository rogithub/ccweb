import { ColumnBase } from '../../../components/dataCell/columnBase';
import Constants from '../../../constants/dataTableConstants';

describe('ColumnBase', () => {
    describe('constructor', () => {

        it("should build a cell", (done) => {
            let title = "Nombre";
            let m = new ColumnBase(title);

            expect(m.celTemplate).toBe(Constants.DATA_CELL_DEFAULT_TEMPLATE);
            expect(m.headTemplate).toBe(Constants.DATA_CELL_DEFAULT_TEMPLATE);

            expect(m.header.title).toBe(title);
            expect(m.header.rowKey).toBe(title.toLowerCase());

            expect(m.getCellData({ nombre: "rodrigo" })).toBe("rodrigo");
            expect(m.getHeadData(m.header)).toBe(title);
            done();
        });
    });
});
