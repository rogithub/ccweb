
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
    },

    pureComputed<T>(fn: () => T): () => T {
        return fn;
    }
}

export default ko;