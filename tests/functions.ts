export function oneArg(params: string) {
    return true;
}

export function multiArgs(arg0: string, arg1: number) {
    return true;
}

export function returnType(): boolean {
    return true;
}

export function multiArgsAndReturn(arg: string, d: number): boolean {
    return true;
}

export function genericTest(arg: string[], d: number): Array<boolean> {
    return [];
}

export function unionTest(arg: string[]|number, d: number): Array<boolean|string> {
    return [];
}

export function rawTypedArgsTest(arg: { a: string }) {
    return { a: '' };
}

export function rawTypedReturnTest(arg: { a: string }): { a: string } {
    return { a: '' };
}

export function intersectArgTest(arg: { a: string } & { b: string }) {
    return {a: '', b: ''};
}