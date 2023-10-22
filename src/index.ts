import * as functions from "firebase-functions";

exports.myFunction = functions.firestore
  .document("restaurant_list/{docId}")
  .onCreate((change, context) => {
    const newValue = change.data();
    const name = newValue.name;
    console.log(name);
    /* ... */
  });
