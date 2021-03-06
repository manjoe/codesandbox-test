import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // li作成
  const li = document.createElement("li");
  li.innerText = text;
  // button(完了)タグを作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //未完了リストから削除する
    deleteFromIncompleteList(completeButton.parentNode);
    // 完了リストに追加する
    const addTarget = completeButton.parentNode;
    // ToDo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;
    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
    // console.log(completeTarget);
  });
  // button(削除)タグを作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });
  // button(戻す)タグを作成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    // 押された戻すボタンの親タグ(div)を完了リストから削除
    const deleteTarget = backButton.parentNode;
    document.getElementById("complete-list").removeChild(deleteTarget);
    // テキストを取得
    const text = backButton.parentNode.firstChild.innerText;
    createIncompleteList(text);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// /**
//  * const, letの変数宣言
//  */
// // var val1 = "var変数";
// // console.log(val1);

// // // var変数は上書き可能
// // val1 = "var変数を上書き";
// // console.log(val1);

// // // var変数は再宣言可能
// // var val1 = "var変数を再宣言";
// // console.log(val1);

// // let val2 = "let変数";
// // console.log(val2);

// // // letは上書き可能
// // val2 = "let変数は上書き可能"
// // console.log(val2);

// // // letは再宣言不可能
// // let val2 = "let変数を再宣言";
// // // SyntaxError: /src/index.js: Identifier 'val2' has already been declared (23:4)

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// // val3 = "const変数を上書き";
// // TypeError: "val3" is read-only

// // constは再宣言できない
// // const val3 = "const変数を再宣言";
// // SyntaxError: /src/index.js: Identifier 'val3' has already been declared (34:6)

// // constで定義したオブジェクトはプロパティの変更が可能
// // const val4 = {
// //   name: "Taro",
// //   age: "28"
// // };
// // console.log(val4);
// // val4.name = "太郎";
// // console.log(val4);
// // val4.address = "Hiroshima";
// // console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// // const val5 = ["dog", "cat"];
// // val5[0] = "bird";
// // val5.push("monkey");
// // console.log(val5);

// /**
//  * テンプレート文字列
//  */
// // const name = "Taro";
// // const age = 28;

// // // 私の名前はTaroです。年齢は28歳です
// // // 従来の方法
// // const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// // console.log(message1);
// // // テンプレート文字列を用いた方法
// // const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// // console.log(message2);

// /**
//  * アロー関数
//  */
// // 従来の関数
// // function func1(str) {
// //   return str;
// // }
// // const func1 = function (str) {
// //   return str;
// // };
// // console.log(func1("func1です"));

// // アロー関数
// // const func2 = (str) => {
// //   return str;
// // };
// // 処理1行でかける場合などはブラケットを省略できる
// // const func2 = (str) => str;
// // console.log(func2("func2です"));

// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // };
// // console.log(func3(10, 20));

// /**
//  * 分割代入　ES2015から　知らないと読めないコード
//  */
// // const myProfile = {
// //   name: "じゃけ",
// //   age: 28
// // };

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// // console.log(message1);
// // // 変数名が長いと冗長

// // const { name, age } = myProfile;
// // const message2 = `名前は${name}です。年齢は${age}です。`;

// // const myProfile = ["じゃけ", 28];
// // const message3 = `名前は${myProfile[0]}です。年連は${myProfile[1]}です。`;
// // console.log(message3);
// // // 順番に取り出す
// // const [name, age] = myProfile;
// // const message4 = `名前は${name}です。年齢は${age}です。`;
// // console.log(message4);

// /**
//  * デフォルト値、引数など
//  */

// // const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// // sayHello("じゃけ"); //こんにちは!じゃけさん!
// // sayHello(); //こんにちは!undefinedさん!
// // // name = "ゲスト"と初期値を代入することもできる。未指定の場合undefindになり、バグの温床となりやすい

// /**
//  * スプレッド構文 ...
//  */
// // 配列の展開
// // const arr1 = [1, 2];
// // // console.log(arr1);
// // // console.log(...arr1);
// // const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// // sumFunc(...arr1);

// // // まとめる
// // const arr2 = [1,2,3,4,5];
// // const [num1, num2, ...arr3] = arr2;
// // console.log(num1);// 1
// // console.log(num2);// 2
// // console.log(arr3);// [3, 4, 5]

// // 配列のコピー、結合
// // const arr4 = [10, 20];
// // const arr5 = [30, 40];
// // const arr6 = [...arr4];
// // arr6[0] = 100;
// // console.log(arr6);
// // console.log(arr4);
// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7); // [10, 20, 30, 40]

// // // =でコピーすると参照渡しになる
// // const arr8 = arr4;
// // arr8[0] = 100;
// // console.log(arr8); // [100, 20]
// // console.log(arr4); // [100, 20]

// /**
//  * mapやfilterを使った配列の処理
//  */

// const nameArr = ["田中", "山田", "じゃけ"];
// // for (let index = 0; index < nameArr.length; index++){
// //   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// // }

// // const nameArr2 = nameArr.map((name)=>{
// //   return name;
// // })
// // console.log(nameArr2);

// // 配列の場合、2個目の引数はindexになるので必要に応じて利用する
// // nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// // const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num)=>{
// //   return num % 2 === 1;
// // })
// // console.log(newNumArr);

// // const newNameArr = nameArr.map((name) => {
// //   if (name === "じゃけ") {
// //     return name;
// //   } else {
// //     return `${name}さん`;
// //   }
// // });
// // console.log(newNameArr);

// /**
//  * 三項演算子
//  */
// // ある条件 ? 条件がTrueのとき : 条件がFalseのとき
// // const val1 = 1 < 0 ? "trueです" : "falseです";
// // console.log(val1);
// // const num = "1300";
// // console.log(num.toLocaleString());

// // const formattedNum =
// //   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// // console.log(formattedNum);

// // const checkSum = (num1, num2) => {
// //   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です。";
// // };
// // console.log(checkSum(50, 6));

// /**
//  * 論理演算子の本当の意味を知ろう && ||
//  */
// // const flag1 = true;
// // const flag2 = false;

// // if (flag1 || flag2) {
// //   console.log("1か2はTrueになります");
// // }
// // if (flag1 && flag2) {
// //   console.log("1も2もTrueになります");
// // }

// // // || は左側がfalseとなるとき右側を返す
// // const num = null;
// // const fee = num || "金額未設定です";
// // console.log(fee);

// // // && は左側がtrueなら右側を返す
// // const num2 = 100;
// // const fee2 = num2 && "何か設定されました";
// // console.log(fee2);
