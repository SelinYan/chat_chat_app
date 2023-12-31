import express from "express";
import authenticationRoutes from "./routes/authentication.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(cookieParser());

app.use("/Backend/authentication", authenticationRoutes);
app.use("/Backend/users", userRoutes);
app.use("/Backend/posts", postRoutes);
app.use("/Backend/comments", commentRoutes);
app.use("/Backend/likes", likeRoutes);

app.listen(4000, () => {
  console.log("backend is running");
});
