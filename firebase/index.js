require('dotenv').config();
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID
apiKey:"AIzaSyBYY6GvUyMzyqZqF0QhJ-w6YHDH1wOgHSI",
authDomain:"todo-list-e3257.firebaseapp.com",
projectId:"todo-list-e3257",
storageBucket:"todo-list-e3257.appspot.com",
messagingSenderId: "985887909608",
appId: "1:985887909608:web:256e9d2808774fa35b4b5d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
