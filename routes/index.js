module.exports = app => {

  const authRoutes = require('./auth.routes')
  app.use("/api/auth", authRoutes)

  const profileRoutes = require('./profile.routes')
  app.use("/api/profile", profileRoutes)

  const storiesRoutes = require("./stories.routes")
  app.use("/api/stories", storiesRoutes)

  const commentsRoutes = require("./comment.routes")
  app.use("/api/comments", commentsRoutes)

  const uploadRoutes = require("./upload.routes")
  app.use("/api/upload", uploadRoutes)

}