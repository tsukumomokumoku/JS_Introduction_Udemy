/* 
変数宣言について / let const等の変数宣言
*/
// オブジェクトについて
const val4 = {
  name: "AZ",
  age: 78,
};
console.log(val4);
// constで定義しても、オブジェクトのプロパティの変更ができる
console.log(val4);
val4.name = "tsukumo";
// 追加もできる
val4.address = 12345678;

// 配列について
const val5 = ['dog', 'cat'];
console.log(val5);
// constで定義しても、配列の場合も値の追加や変更が可能
val5[0] = 'bird';
// push関数で値の追加
val5.push('monkey')

// const / 上書きと再宣言が不可能 / 厳密な型宣言 / この変数宣言を基本的に使う
const val1 = "const変数";
console.log(val1);

// constの上書き・再宣言も不可
// const val1 = "...";
// val1 = "...";

// let / 上書きが可能・再宣言ができない
let val2 = "let変数";
console.log(val2);

// let変数の上書きは可能
val2 = "let変数の上書き";
console.log(val2);

// 再宣言は不可
// let val2 = "letの再宣言は不可 / エラーの発生";


// var変数は上書き可能 / 基本は使わない
// var val3 = "var3変数";
// console.log(val3);
// var変数の中身の変更
// val3 = "val3変数の変更";
// console.log(val3);
// var変数の再宣言 / ルールが良くないためエラーが出る
// var val3 = "var3変数の再宣言";
// console.log(var3);


/* 
テンプレート文字列について
*/
// バッククォート「``」を使う / ${変数名}を使用
const str = "AZ";
const age = 78;
const massege = `こんにちは、${str}さん。あなたの年齢は${age}です。`;
console.log(massege);

/* 
アロー関数について
*/
// 従来の関数
function func1(arg1, arg2) {
  const result = arg1 * arg2;
  console.log(result);
}
func1(5, 4);

const func2 = function(str) {
  return str;
};
console.log(func2("func2です。"))

// アロー関数の記述
const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(5, 4));