import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC1J_R3Wsvd6QaDfyUFqsaU9Lg6HOKh3cE",
  authDomain: "movie-database-30803.firebaseapp.com",
  projectId: "movie-database-30803",
  storageBucket: "movie-database-30803.appspot.com",
  messagingSenderId: "874938336979",
  appId: "1:874938336979:web:94a721ab0682a6f5ea3626",
  measurementId: "G-TWKN549XF0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
