export {};

//let profile: [string, number] = ['Ham', 43];
// profile = [43, 'Ham'];

//tuple型は制約のレベルを高く出来る
let profile: [string, number] = ['Ham', 43];
// profile = [43, 'Ham'];
// ↑このケースにするとエラーが出る（tuple型でannotationを定義しているため）
