import express from "express";
const app = express();
import path from "path";

const __dirname = path.resolve();
const PORT = process.env.PORT || 6000;

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res, next) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`server successfully running on ${PORT}`);
});
