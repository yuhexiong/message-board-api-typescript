# Message Board Api


### Backend Server - [Message Board Web TypeScript](https://github.com/yuhexiong/message-board-web-react-typescript)
A backend server for saving message in database.  


## Overview

- Language: TypeScript v5.5.3
- Web FrameWork: Express v4.17.21
- ORM: TypeORM v0.3.20
- Database: Postgres v15.1


## ENV
copy .env.example as .env
```
DB_HOST=
DB_PORT=
DB_USER=
DB_PASS=
DB_NAME=
PORT=8080
```


## Run

### install dependencies

```bash
npm install
```

### run migration file

```bash
npm run migration:run
```

### run

```bash
npm run start
```

## API

### message
- GET /message: 取得所有留言（時間從早排到晚）
- POST /messages: 新增留言
- DELETE /message/{id}: 刪除留言

