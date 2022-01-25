// import axios from 'axios';

// export {};

// let url: string =
//   'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// axios.get(url).then(function(response) {
//   interface Article {
//     id: number;
//     title: string;
//     description: string;
//   }
//   let data: Article[];
//   data = response.data;
//   console.log(data);
// });

import axios from 'axios';
export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// axios.get(url).then(function (response) {
//   console.log(response.data);
// });

// axios.get(url).then(function (response) {
//   let data: object[];
//   data = response.data;
//   console.log(data);
// });
//↑こう書いてもいいが、objectの中身がなんなのかがわからないし、わかりづらい
//そこで、interfaceを使うともっときれいになる

/*
Interface
クラス同士をつなぐ役割をもってる（"継承"って概念）
※Interfaceのみでは何の処理も行えない
*/

//Interfaceを使った書き方
axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  // let data: object[];
  //↓こう書くとわかりやすいし、Articleの中身も明確になる。
  let data: Article[];
  // let data: any;
  //any型を使ってしまうと、エラーに気づきづらくなる。TypeScriptの強みを活かすならanyは極力使わないこと。（使ったから必ずリファクタリング）
  data = response.data;

  //dataを上書きして挙動を検証してみる
  data = [
    {
      id: 1,
      title: 'titleUpdate',
      description: 'description',
    },
  ];
  console.log(data);
});
