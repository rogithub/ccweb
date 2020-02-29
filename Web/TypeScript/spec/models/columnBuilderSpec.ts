import { ColumnBuilder } from '../../models/columnBuilder';
import { TableColumn } from '../../shared/tableColumn';
import ko from '../specHelpers/koMock';
import constants from '../../constants/dataTableConstants';
import { ObjectLiteral } from '../../shared/objectLiteral';
import { SortableHeaderCell } from '../../models/sortableHeaderCell';
import { SortOrder } from '../../constants/sortOrder';

describe('ColumnBuilder', () => {

    describe("build sortable header", () => {
        it("should build sortable header", (done) => {

            let header = {
                title: "Title",
                rowKey: "myKey",
                sortable: true
            };

            let cb = new ColumnBuilder(header.title, header.rowKey, true);
            let actual = cb.sortHeader(ko);

            let expected: TableColumn = {
                celTemplate: constants.DATA_CELL_DEFAULT_TEMPLATE,
                headTemplate: constants.DATA_CELL_SORTABLE_HEADER,
                getCellData: r => r[header.rowKey],
                getHeadData: h => new SortableHeaderCell(ko, h.title),
                header: header
            };

            let test = actual.getCellData({ myKey: { "test": "test" } });
            let head = actual.getHeadData(header) as SortableHeaderCell;

            expect(actual.celTemplate).toBe(expected.celTemplate);
            expect(actual.celTemplate).toBe(expected.celTemplate);
            expect(actual.header).toEqual(expected.header);
            expect(test).toEqual({ "test": "test" });
            expect(head.order()).toBe(SortOrder.None);
            expect(head.title()).toBe(header.title);

            done();
        });

    });

    describe('build cell', () => {

        it("should build cell", (done) => {
            let header = {
                title: "Title",
                rowKey: "title",
                sortable: false
            };

            let cb = new ColumnBuilder(header.title);
            let actual = cb.build();


            let expected: TableColumn = {
                celTemplate: constants.DATA_CELL_DEFAULT_TEMPLATE,
                headTemplate: constants.DATA_CELL_DEFAULT_TEMPLATE,
                getCellData: r => r[header.rowKey],
                getHeadData: h => h.title,
                header: header
            };

            let test = actual.getCellData({ title: { "test": "test" } });
            let head = actual.getHeadData({ title: { "test": "test" } });

            expect(actual.celTemplate).toBe(expected.celTemplate);
            expect(actual.celTemplate).toBe(expected.celTemplate);
            expect(actual.header).toEqual(expected.header);
            expect(test).toEqual({ "test": "test" });
            expect(head).toEqual({ "test": "test" });

            done();
        });
    });
});
