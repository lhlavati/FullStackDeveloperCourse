import express from "express"
import noteRoutes from "./routes/notes.js"
import authRoutes from "./routes/auth.js"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use("/api/notes", noteRoutes)
app.use("/api/auth", authRoutes)

app.listen(8800, ()=> {
    console.log("Connected!");
})