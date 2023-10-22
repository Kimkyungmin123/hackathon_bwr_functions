import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.onWriteTrigger = functions.firestore
  .document("restaurant_list/{docId}")
  .onWrite(async (change, context) => {
    const docId = context.params.docId;
    const userUid = context.auth ? context.auth.uid : null;
    const beforeData = change.before.data();
    const afterData = change.after.data();

    await admin.firestore().collection("logs").add({
      doc_id: docId,
      uid: userUid,
      before_data: beforeData,
      after_data: afterData,
      created_at: admin.firestore.FieldValue.serverTimestamp(),
    });
  });
