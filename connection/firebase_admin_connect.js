var admin = require("firebase-admin");

var serviceAccount = require("../nodeclass-129-firebase-adminsdk-gkdxo-080c3ab1cf.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodeclass-129.firebaseio.com"
});

var db = admin.database();
module.exports = db;