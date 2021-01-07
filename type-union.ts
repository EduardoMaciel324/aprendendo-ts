//Union
type MyBoolType = true;
type MyStringType = string | string[];

function showMyBool(args : MyBoolType) : void {
    console.log(args);
}
// then i learned that when define type in args of function only type can submit on call function

// in other words if my Type var were this : type MyTypedVar = "Edu" | "Felipe" only these two words would be possible submit

//showBoolType(false); that is not possible because args is typed of MyBoolType that is true
showMyBool(true);

function showMyString(args : MyStringType) {
    if(typeof args === "string") {
        return [args];
    } else {
        return args;
    }
}
console.log(showMyString('Eduardo'));
