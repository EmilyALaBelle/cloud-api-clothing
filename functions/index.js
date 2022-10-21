import functions from "firebase-functions"
import express from "express"
//import {} from './src/clothing.js'

const app = express()
app.use(express.json())


export const api = functions.https.onRequest(app)


