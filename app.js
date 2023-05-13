import express, { json } from "express";
import connectDB from "./db/connection.js";
import web from "./routes/web.js";
import { join } from "path";
const app = express();
const port = process.env.PORT || "3000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

/* connection to a MongoDB database */
connectDB(DATABASE_URL);
//add middlewire for data showing in controllers
app.use(express.urlencoded({ extended: false }));

//setup static files likes css,js,images etc...
app.use(express.static(join(process.cwd(), "public")));

//use ejs
app.set("view engine", "ejs");

//load routes
app.use("/student", web);

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
