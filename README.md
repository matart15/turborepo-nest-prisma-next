### 準備

プロジェクトルートで

```
yarn
```

### 後述の DB の migration が終わっている場合

```
// 必要なnodeのサーバーが全て立ち上がる。
yarn run dev
docker-compose up db
```

### DB

- 起動

```
docker-compose up -d db
```

- マイグレーション実行(Prisma)

```
yarn api:db:migrate
```

- seed 実行

```
yarn api:db:seed
```

### NestJS / Web / Admin

- サーバー起動

```
yarn dev
```

- NestJS
  http://localhost:4000/
- Web
  http://localhost:3000/
- Admin
  http://localhost:3001/

### cypress

cypress の立ち上げ

(web に関するテストをしたい場合は apps/web 配下で以下を実行)

```
yarn run cypress open
```

テストに関して
https://www.notion.so/aisaac/fda105cd77a24203a55d2299cbf4be7b#e82239383d424d85a694b80bcb52a6a6
