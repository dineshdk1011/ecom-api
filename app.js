var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productRouter = require("./routes/products");
var galleryRouter = require("./routes/gallery");
var variationRouter = require("./routes/variation");
var wishlistRouter = require("./routes/wishlist");
var cartRouter = require("./routes/cart");
var orderRouter = require("./routes/order");
var categoryRouter = require("./routes/category");
var razorpayRouter = require("./routes/razorpay");
var storeRouter = require("./routes/store");
var pageRouter = require("./routes/page");
var elementRouter = require("./routes/element");
var userelementsRouter = require("./routes/userelements");
var categorytypeRouter = require("./routes/categorytype");
var journalRouter = require("./routes/journal");
var themeController = require("./routes/theme");
var reviewRouter = require("./routes/review");
var navRouter = require("./routes/Navbar");
var coverimgRouter = require("./routes/coverimg");
var aboutRouter = require("./routes/about");
var CouponRouter = require("./routes/Coupon");

var app = express();
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/product", productRouter);
app.use("/gallery", galleryRouter);
app.use("/variation", variationRouter);
app.use("/wishlist", wishlistRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/category", categoryRouter);
app.use("/razorpay", razorpayRouter);
app.use("/store", storeRouter);
app.use("/navbar", navRouter);
app.use("/page", pageRouter);
app.use("/element", elementRouter);
app.use("/userelements", userelementsRouter);
app.use("/categorytype", categorytypeRouter);
app.use("/journal", journalRouter);
app.use("/theme", themeController);
app.use("/review", reviewRouter);
app.use("/coverimg", coverimgRouter);
app.use("/about", aboutRouter);
app.use("/coupon", CouponRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
const dns = require("dns");

var hostname = "codepurple.in";
dns.lookup(hostname, (err, value, family) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("value:", value);
  console.log("family", family);
});
dns.resolveTxt("codepurple.in", (err, addresses) =>
  console.log("TXT records: %j", addresses)
);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
