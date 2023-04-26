function test() {
    return 20;
}

let result = void test();
console.log(result);

console.log(void 2 === undefined);