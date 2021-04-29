/**
 * const, letの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数は上書き可能"
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";
// // SyntaxError: /src/index.js: Identifier 'val2' has already been declared (23:4)

const val3 = "const変数";
console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";
// TypeError: "val3" is read-only

// constは再宣言できない
// const val3 = "const変数を再宣言";
// SyntaxError: /src/index.js: Identifier 'val3' has already been declared (34:6)

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "Taro",
//   age: "28"
// };
// console.log(val4);
// val4.name = "太郎";
// console.log(val4);
// val4.address = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
