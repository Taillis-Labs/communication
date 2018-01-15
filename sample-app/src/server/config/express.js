import express from "express"
import bodyParser from "body-parser"
import compress from "compression"
import methodOverride from "method-override"
import cors from "cors"
import helmet from "helmet"
import routes from "server/api/routes"
// import error from "server/api/middlewares/error"

/**
* Express instance
* @public
*/
const app = express()

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// gzip compression
app.use(compress())

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn"t support it
app.use(methodOverride())

// secure apps by setting various HTTP headers
app.use(helmet())

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// mount api routes
app.use("/api", routes)

export default app
