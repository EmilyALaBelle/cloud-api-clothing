import dbConnect from "./dbConnect.js"

export async function createClothing(req, res) {
    const db = dbConnect()
    const doc = await db.collection('clothing').add(req.body)
        .catch(err => res.status(500).send({ success: false, message: err }))
    res.status(201).send({ success: true, message: 'Clothing Created: ' + doc.id })
}

export async function getAllClothing(req, res) {
const db = dbConnect()
const collection = await db.collection('clothing').get()
.catch(err => res.status(500).send({success: false, message: err }))
const clothing = collection.docs.map(doc => {
    let user = doc.data()
    user.uid = doc.id
    return user
})
res.send(clothing)
}

export async function updateClothing(req, res) {
    const { uid } = req.params
    const db = dbConnect()
    const doc = await db.collection('clothing').doc(uid).update(req.body)
    .catch(err => res.status(500).send({success: false, message: err}))
    res.status(202).send({success: true, message: 'Clothing Updated ' + doc.id})
}

export async function deleteClothing(req, res){
    
}