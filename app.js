var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const connectDB = require("./config/db");

// Load env vars
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

var indexRouter = require("./routes/index"); /*page from route*/
var usersRouter = require("./routes/users");
var aboutRouter = require("./routes/about");
var contactRouter = require("./routes/contact");
var eventRouter = require("./routes/event");
var eventAboutRouter = require("./routes/event_about");
var eventThemeRouter = require("./routes/event_theme");
var eventGuestRouter = require("./routes/event_guest");
var eventFAQsRouter = require("./routes/event_FAQs");
var event_listRouter = require("./routes/event-list");
var event_singleRouter = require("./routes/event-single");
var scheduleRouter = require("./routes/schedule");
var Gallery = require("./routes/gallery");
var register = require("./routes/register");
var Faq = require("./routes/faq");
var login = require("./routes/login");
var Blog = require("./routes/blog");
var Blog_News = require("./routes/blog-news");
var Blog_Details = require("./routes/blog-details");
var Attende = require("./routes/attende");
var Delegate = require("./routes/delegate");
var Student = require("./routes/student");
var Speaker = require("./routes/speaker");
var Volunter = require("./routes/volunter");
var Programe = require("./routes/programe");
var News = require("./routes/news");
var Article = require("./routes/Article");
var Deconquista = require("./routes/deconquista");
var Calender = require("./routes/calender");

// ADDED NEWS ROUTES-------
var Privacy = require("./routes/privacy");
var Refund = require("./routes/refund");
var Conditions = require("./routes/conditions");
var AboutMlf = require("./routes/aboutMlf");
var AboutBookPlus = require("./routes/aboutBookPlus"); // ADDED NEWS ROUTES-------
const Testimonial = require("./routes/testimonial");

var app = express();

// Connect to MongoDB database
connectDB();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads")); // Serve uploaded images

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/about", aboutRouter);
app.use("/event", eventRouter); /*layout names*/
app.use("/event_about", eventAboutRouter);
app.use("/event_theme", eventThemeRouter);
app.use("/event_guest", eventGuestRouter);
app.use("/event_FAQs", eventFAQsRouter);
app.use("/contact", contactRouter);
app.use("/event-list", event_listRouter);
app.use("/event-single", event_singleRouter);
app.use("/schedule", scheduleRouter);
app.use("/gallery", Gallery);
app.use("/register", register);
app.use("/faq", Faq);
app.use("/login-register", login);
app.use("/blog-gird", Blog);
app.use("/blog-news", Blog_News);
app.use("/blog-details", Blog_Details);
app.use("/attende", Attende);
app.use("/delegate", Delegate);
app.use("/student", Student);
app.use("/speaker", Speaker);
app.use("/volunter", Volunter);
app.use("/programe", Programe);
app.use("/news", News);
app.use("/Article", Article);
app.use("/testimonial", Testimonial);
app.use("/deconquista", Deconquista);
app.use("/calender", Calender);

// LATESTS-----
app.use("/privacy", Privacy);
app.use("/refund", Refund);
app.use("/terms-conditions", Conditions);
app.use("/about-Mlf", AboutMlf);
app.use("/about-book-Plus", AboutBookPlus);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

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
