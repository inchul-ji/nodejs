const express = require("express");
const path = require("path");

const app = express();

// 전역 변수 선언 : node 어디에서든 사용 가능, app.get('port)
app.set("port", process.env.PORT || 3000);

// middleware 설정 : app.use() 안에 선언된 내용이 middleware 이다.
app.use((req, res, next) => {
  console.log("미들웨어 기능입니다.");
  next(); // 필수
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// request param 설정 (와일드카드 라우터)
app.get("/category/:name", (req, res) => {
  res.send(`Hello world ${req.params.name}`);
});

// 모든 get 요청에 다 처리하겠다는 설정
app.get("*", (req, res) => {
  res.send("Hello world");
});

// 404 error middleware
app.use((req, res, next) => {
  console.log(err);
  res.status(404).send("404 에러가 발생했습니다.");
});

// error middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.send("에러가 발생했습니다.");
});

app.listen(3000, () => {
  console.log("express start!");
});
