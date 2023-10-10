/* 
変数宣言について / let const等の変数宣言
*/
// オブジェクトについて
// const val4 = {
//   name: "AZ",
//   age: 78,
// };
// console.log(val4);
// constで定義しても、オブジェクトのプロパティの変更ができる
// console.log(val4);
// val4.name = "tsukumo";
// 追加もできる
// val4.address = 12345678;

// 配列について
// const val5 = ['dog', 'cat'];
// console.log(val5);
// constで定義しても、配列の場合も値の追加や変更が可能
// val5[0] = 'bird';
// push関数で値の追加
// val5.push('monkey')

// const / 上書きと再宣言が不可能 / 厳密な型宣言 / この変数宣言を基本的に使う
// const val1 = "const変数";
// console.log(val1);

// constの上書き・再宣言も不可
// const val1 = "...";
// val1 = "...";

// let / 上書きが可能・再宣言ができない
// let val2 = "let変数";
// console.log(val2);

// let変数の上書きは可能
// val2 = "let変数の上書き";
// console.log(val2);

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
// const str = "AZ";
// const age = 78;
// const massege = `こんにちは、${str}さん。あなたの年齢は${age}です。`;
// console.log(massege);

/* 
アロー関数について
*/
// 従来の関数
// function func1(arg1, arg2) {
//   const result = arg1 * arg2;
//   console.log(result);
// }
// func1(5, 4);

// const func2 = function(str) {
//   return str;
// };
// console.log(func2("func2です。"))

// アロー関数の記述
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(5, 4));
/* 
分割代入
*/
// const myProfile = {
//   name: "You",
//   age: 28,
// };

// const message2 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message2);

// 分割代入で綺麗なコードを書く
// const {name, age} = myProfile;
// const message3 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message3);

// 配列にも分割代入が使える
// const myProfile = ['You', 29];
// const message4 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message4);

// 配列の分割代入後
// const [name, age] = myProfile;
// const message5 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message5);

/*
デフォルト値,引数など
*/
// const sayHello = (name = "ゲスト") => {
//   console.log(`こんにちは、${name}さん。`);
// }
// sayHello();
// sayHello("AZ");

/*
スプレット構文 ...
*/
// 配列の展開
// const array1 = [1, 2, 3, 4, 5];
// console.log(array1);
// 配列の中身を順番に処理して展開してくれる
// console.log(...array1);

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// }
// sumFunc(array1[0], array1[1]);
// sumFunc(...array1);

// １つにまとめる
// const array2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...array3] = array2;
// console.log(num1);
// console.log(num2);
// 残りを1つにまとめている / 残りを配列にまとめる
// console.log(array3);

// 配列のコピー / 結合
// const array4 = [10, 20];
// const array5 = [30, 40];
// 配列をコピーするときにスプレット構文を使う / 元の配列に影響を受けさせない（参照の関係）
// const array6 = [...array4];
// array6[0] = 100;
// console.log(array6);
// console.log(array4);
// 応用 / 2つ以上の配列の結合
// const array7 = [...array4, ...array5];
// console.log(array7);

/*
mapやfilterを使った配列の処理
*/
// 従来のfor文
// const nameArr = ["井口", "山田", "AZ"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}は、${nameArr[i]}です。`);
// }

// map構文 / mapは配列をループして処理をする
// const nameArr2 = nameArr.map((name) => {
//     return name;
// });
// console.log(nameArr2); //新しい配列の作成
// 上記のfor文と同じ処理を簡単に行える。
// nameArr.map((name, index) => console.log(`${index + 1}番目は、${name}です。`));

// const newNameArr = nameArr.map((name) => {
//     if(name === "AZ"){
//         return name;
//     } else {
//         return `${name}さん`;
//     }
// });
// console.log(newNameArr);

/* 
filter
*/
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1; //奇数のみ取り出す
// });
// console.log(newNumArr);

/*
三項演算子
*/
// ある条件  ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// const val2 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);
// console.log(val2);

// const num = 1300;
// toLocaleStringは金額表示などの3桁区切り表示をしてくれる関数
// console.log(num.toLocaleString());
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? '100を超えています' : '100以下の合計数値です' 
// }
// console.log(checkSum(40, 68));
// console.log(checkSum(40, 50));


/*
論理演算子の本当の意味
*/
// const flag1 = true;
// const flag2 = false;
// if(flag1 || flag2){
//     console.log("1か2はtrue");
// }
// if(flag1 && flag2){
//     console.log("1も2はtrue");
// }

// ||(or)は左側がfalseのとき右側を返す処理をするもの / nullはfalse判定
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&(and)は左側がtrueなら右側を返す。
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);




