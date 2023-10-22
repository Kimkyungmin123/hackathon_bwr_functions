import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.onWriteTrigger = functions.firestore
  .document("restaurant_list/{docId}")
  .onWrite(async (change, context) => {
    const docId = context.params.docId;
    const userUid = context.auth ? context.auth.uid : null;
    const params = context.params;
    const beforeData = change.before.data();
    const afterData = change.after.data();

    await admin.firestore().collection("logs").add({
      docId,
      userUid,
      beforeData,
      afterData,
      created_at: admin.firestore.FieldValue.serverTimestamp(),
    });
  });
