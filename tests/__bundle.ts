
/*start of functions*/
function oneArg(params: string) {
    return true;
}

function multiArgs(arg0: string, arg1: number) {
    return true;
}

function returnType(): boolean {
    return true;
}

function multiArgsAndReturn(arg: string, d: number): boolean {
    return true;
}

function genericTest(arg: string[], d: number): Array<boolean> {
    return [];
}

function unionTest(arg: string[]|number, d: number): Array<boolean|string> {
    return [];
}

function rawTypedArgsTest(arg: { a: string }) {
    return { a: '' };
}

function rawTypedReturnTest(arg: { a: string }): { a: string } {
    return { a: '' };
}

function intersectArgTest(arg: { a: string } & { b: string }) {
    return {a: '', b: ''};
}
/*end*/




/*start of signtures*/
function jsFunc(params, dg) {
    
}
/*end*/




jsFunc(1, 2)

oneArg('');
multiArgs('', 1);
returnType()
multiArgsAndReturn('', 2)
genericTest([], 1)
unionTest(1, 2)
rawTypedArgsTest({ a: '' })
rawTypedReturnTest({ a: '' })
intersectArgTest({ a: '', b: '' })


