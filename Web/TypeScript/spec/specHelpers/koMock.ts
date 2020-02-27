
let ko: any = {

    observableArray<T>(val: T[]): (t?: T[]) => T[] {
        return (newVal: undefined) => {
            if (newVal === undefined) {
                return val;
            }
            val = newVal;
        };
    },

    observable<T>(val: T): (t?: T) => T {
        return (newVal: undefined) => {
            if (newVal === undefined) {
                return val;
            }
            val = newVal;
        };
    }
}

export default ko;