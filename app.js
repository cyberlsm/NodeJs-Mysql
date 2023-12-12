const express = require('express')
const dotenv = require('dotenv')
const router = require("./routers")
const logger = require("./config/logger")
/*
    NodeJs 무중단 관리도구 forever
    설치 : npm i forever -g
    실행 : forever start 시작파일
    종료 : forever stop 시작파일
    forever 목록 : forever list

    pm2
    설치 : npm i pm2 -g
    실행 : pm2 start 시작파일
    재시작 : pm2 restart 시작파일
    종료 : pm2 stop 시작파일
    목록 : pm2 list
    pm2 monit
*/

process.on('uncaughtException',(err) => {
    logger.error("처리하지 못한 에러 : "+ err.message);
});

// setInterval(() => {
//     throw new Error("강제 오류발생");
// }, 1000);


const morganMiddleware = require("./config/morganMiddleware.js");

const app = express();
//logger.info("express start");

app.use(morganMiddleware)

//=== 환경변수 .env 설정
dotenv.config();

//=== Express 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장 body-parser 연결
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//=== Routing 설정
app.get('/', (req, res) => {
    res.send('<h1>🤖 Pooling with NodeJS and SQL Server</h1>');
});
app.use("/api", router)

// //=== Swagger 설정
const { swaggerUi, specs } = require("./swagger/swagger.js");
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs))



app.listen(process.env.PORT, () => {
    console.log(`Server started running on ${process.env.PORT} for ${process.env.NODE_ENV}`);
});
