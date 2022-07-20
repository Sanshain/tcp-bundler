import { oneArg, multiArgs, returnType, multiArgsAndReturn, genericTest, unionTest, rawTypedArgsTest, rawTypedReturnTest, intersectArgTest } from "./functions";

import { jsFunc } from "./signtures";


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


