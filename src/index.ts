import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
//import * as serviceAccount from "../hackathon-93422-firebase-adminsdk-m67l3-1e5b4b0d67.json";
admin.initializeApp();
const database = admin.firestore();
//const auth = admin.auth();

exports.onWriteTrigger = functions.firestore
  .document("{collection}/{docId}")
  .onWrite(async (change, context) => {
    const docId = context.params.docId;
    const beforeData = change.before.data();
    const afterData = change.after.data();

    await database.collection("logs").add({
      doc_id: docId,
      before_data: beforeData,
      after_data: afterData,
      created_at: admin.firestore.FieldValue.serverTimestamp(),
    });
  });
