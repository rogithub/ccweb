import { SortableHeaderCell } from '../../models/sortableHeaderCell';
import { SortOrder } from '../../enums/sortOrder';

describe('SortableHeaderCell', () => {
    
    let ko: any = {
        observableArray: function <T>(val: T[]) {
	    return (newVal: undefined) => {
		if (newVal === undefined) {
		    return val;
		}
		val = newVal;
	    };
        },
	observable: function <T>(val: T) {
	   return (newVal: undefined) => {
		if (newVal === undefined) {
		    return val;
		}
		val = newVal;
	    };
        }
    };

    let title = "Title";
    
    describe('constructor', () => {

        it("should initialize object", function (done) {
	    let cell = new SortableHeaderCell(ko, title);
	    
	    expect(cell.order()).toBe(SortOrder.None);
	    expect(cell.title()).toBe(title);

	    cell = new SortableHeaderCell(ko);

	    expect(cell.title()).toBe("");
	    expect(cell.order()).toBe(SortOrder.None);
            	    	    
            done();
        });
    });

    describe('changeOrder', () => {

        it("should change order incrementally", function (done) {
	    let cell = new SortableHeaderCell(ko, title);
	    
            expect(cell.order()).toBe(SortOrder.None);
	    cell.changeOrder();
	    expect(cell.order()).toBe(SortOrder.Asc);
	    cell.changeOrder();
	    expect(cell.order()).toBe(SortOrder.Desc);
	    cell.changeOrder();
	    expect(cell.order()).toBe(SortOrder.None);
	    	    
            done();
        });
    });
});
