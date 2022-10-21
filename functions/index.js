import functions from "firebase-functions"
import express from "express"
import {createClothing, getAllClothing, updateClothing, deleteClothing, getOneClothing} from './src/clothing.js'

const app = express()
app.use(express.json())

app.post('/clothing', createClothing)
app.get('/clothing', getAllClothing)
app.patch('/clothing/:uid', updateClothing)
app.delete('/clothing/:uid', deleteClothing)
app.get('/clothing/:uid', getOneClothing)

app.get('/test', (req, res) => res.send('Our first cloud api works!'))

export const api = functions.https.onRequest(app)

