require('./firebase');
const { getAuth } = require('firebase-admin/auth');
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.createUser = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  try {
    const body = JSON.parse(req.body);

    const { email, password } = body;

    const userId = await getAuth()
      .createUser({
        email,
        password,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully created new user:', userRecord.uid);
        return userRecord.uid;
      });

    res.json({ userId, email, password });
  } catch (error) {
    res.json({ error: 'Erro na criação de usuário:' + error.message });
  }
  //   functions.logger.info('Hello logs!', { structuredData: true });
  //   response.send('Hello from Firebase!');
});
