// const admin = require('firebase-admin');
// const { getAuth } = require('firebase-admin/auth');
// export const db = admin.firestore();
// export const auth = admin.auth();
const { initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

const app = initializeApp();

module.exports = {
  getAuth,
};
