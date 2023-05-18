import express from "express"
import noteRoutes from "./routes/notes.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json())
app.use(cors())

app.use("/api/notes", noteRoutes)
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

app.listen(8800, ()=> {
    console.log("Connected!");
})