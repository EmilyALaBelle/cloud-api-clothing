import { initalizeApp, cert, getApps } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

import serviceAccount from "../secrets.js"

export function dbConnect() {
    if (!getApps().length) {
        initalizeApp({
            credential: cert(serviceAccount)
        })
    }
    return getFirestore()
}