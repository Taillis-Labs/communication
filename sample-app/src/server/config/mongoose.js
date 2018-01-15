import mongoose from "mongoose"
import config from "config/server.json"

// set mongoose Promise to Bluebird
mongoose.Promise = Promise

// Exit application on error
mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`)
  process.exit(-1)
})

// print mongoose logs in dev env
if (config.env === "development") {
  mongoose.set("debug", true)
}

/**
* Connect to mongo db
*
* @returns {object} Mongoose connection
* @public
*/
const connect = () => {
  mongoose.connect(`mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.db}`, {
    keepAlive: 1,
    useMongoClient: true,
  })
  return mongoose.connection
}

export default { connect }
