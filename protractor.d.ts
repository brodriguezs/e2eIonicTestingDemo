interface AsyncMatchers<T> extends Matchers<Promise<T>> {
        toBe(expected: Expected<T>, expectationFailOutput?: any): boolean;
        toEqual(expected: Expected<T>, expectationFailOutput?: any): boolean;
        toContain(expected: T, expectationFailOutput?: any): boolean;
        not: AsyncMatchers<T>;
    }
