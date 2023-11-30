import express from "express";
const app = express();
import authenticationRoutes from "./routes/authentication.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";

app.use(express.json());

app.use("/Backend/authentication", authenticationRoutes);
app.use("/Backend/users", userRoutes);
app.use("/Backend/posts", postRoutes);
app.use("/Backend/comments", commentRoutes);
app.use("/Backend/likes", likeRoutes);
app.listen(4000, () => {
  console.log("backend is running");
});
