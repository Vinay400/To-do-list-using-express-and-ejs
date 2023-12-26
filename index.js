import express from "express";
import bodyParser from "body-parser";

const app = express();
const items = [];
const workitems = [];
const port = 3000;
const today = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};
const day = today.toLocaleDateString("en-US", options);
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index.ejs", {
    listitems: items,
    listtitle: day,
  });
});
app.get("/work", (req, res) => {
  const titlename = "Work List";
  res.render("work.ejs", {
    listtitle: titlename,
    listitems: workitems,
  });
});
app.post("/", (req, res) => {
  const newValue = req.body["newitem"];
  const listtitle = req.body.listtitle;
  if (listtitle === "Work List") {
    workitems.push(newValue);
    res.redirect("/work");
  } else {
    items.push(newValue);
    res.redirect("/");
  }
});
app.get("/work", (req, res) => {
  res.render("work.ejs");
});
app.post("/work", (req, res)=>{
const listtitle = req.body.listtitle;
const newvalue = req.body["newitem"];
if(listtitle===day)
res.redirect("/");
else{
  workitems.push(newvalue);
  res.redirect("/work");
}

});
app.listen(port, () => {
  console.log("listening on " + port);
});
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
