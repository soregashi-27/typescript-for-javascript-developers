export {};
//変数＝グローバル空間に定義
// グローバル空間に定義しているものを使おうとしてエラーが発生→module systemの導入（exportを使う）

let name = 'TypeScript';

// let name = 'TypeScript';

// let isFinished: boolean = true;
// isFinished = false;
// // isFinished = 1;
// console.log({ isFinished });

let isFinished: boolean = true;
isFinished = false;
//isFinished = 1;
console.log({ isFinished });

//ts-nodev8.6.2の不具合は2022.1.18現在解消されていた
