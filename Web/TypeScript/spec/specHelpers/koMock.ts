
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
    },

    utils: {
        arrayMap<I, O>(source: I[], fn: (it: I) => O): O[] {
            let result: Array<O> = new Array<O>();
            for (let x of source) {
                result.push(fn(x));
            }
            return result;
        }
    }
}

export default ko;