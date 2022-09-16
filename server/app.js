const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

const AppError = require("./utils/app.error");
const globalErrorHandler = require("./controllers/error.controller");
const carRouter = require("./routes/car.routes");
const favouriteRouter = require("./routes/favourite.routes");
const rentalRouter = require("./routes/rental.routes");
const userRouter = require("./routes/user.routes");
const reviewRouter = require("./routes/review.routes");


const app = express();

// 1) GLOBAL MIDDLEWARES

// Serving static files
app.use(express.static(`${__dirname}/public`));


// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use("/api", limiter);

// Body parser, reading data from the body into req.body
app.use(express.json({ limit: "10kb" }));

app.use(cors());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize()); //Looks at request body, request query string and also request param and filters out all the '$' and '.'

// Data sanitization against XSS
app.use(xss()); //Clean any user input from malicious html

// Prevents parameter pollution
app.use(
  hpp({
    // an array of properties for which we allow duplicates in query string
    whitelist: [
      "transmission",
      "ratingsQty",
      "ratingsAvg",
      "seats",
      "status",
      "location",
      "fuelType",
      "type",
      "price"

    ],
  })



);


// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

// 2) ROUTES

app.use("/api/v1/cars", carRouter);
app.use("/api/v1/favourites", favouriteRouter);
app.use("/api/v1/rentals", rentalRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/users", userRouter);


app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);


module.exports = app;
