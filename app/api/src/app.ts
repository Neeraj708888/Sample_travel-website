import express from "express"
import pageRoutes from "./routes/page.routes"

const app = express()

app.use(express.json())

app.use("/api", pageRoutes)

export default app
