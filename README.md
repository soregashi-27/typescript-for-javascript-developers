# typescript-for-javascript-developers
ソース \
https://github.com/DiveIntoHacking/typescript-for-javascript-developers

今回はv3.7.5を使用

## TypeScriptのバージョン確認
```
npm info typescript
```

## TypeScriptのinstall
```
npm install --save-dev typescript@3.7.5
```

## コンパイルを実行するコマンド例

    $ npm run dev src/default-parameters.ts

npxでもできる

例
```
npx tsc src/install-typescript.ts
```

npxコマンドはnode modules配下のソースを自動で探してくれる
（laravel, vueの個人開発でよく使ってる）
