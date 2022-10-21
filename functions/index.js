import functions from "firebase-functions"
import express from "express"
import {createClothing, getAllClothing, updateClothing} from './src/clothing.js'

const app = express()
app.use(express.json())

app.post('/clothing', createClothing)
app.get('/clothing', getAllClothing)
app.patch('/clothing/:uid', updateClothing)

app.get('/test', (req, res) => res.send('Our first cloud api works!'))

export const api = functions.https.onRequest(app)

