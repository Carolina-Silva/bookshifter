import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtvCajndfLbhJvL335gElW3mTD_oKK2dY",
  authDomain: "noponto-d5aad.firebaseapp.com",
  projectId: "noponto-d5aad",
  storageBucket: "noponto-d5aad.appspot.com",
  messagingSenderId: "723323430105",
  appId: "1:723323430105:web:f1778260dcb919e6ef4ac8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)