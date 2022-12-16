import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtJWe42Zb-2Z7Gd8n1r6ZSlTti4ImvZ8I",
  authDomain: "house-marketplace-app-e6612.firebaseapp.com",
  projectId: "house-marketplace-app-e6612",
  storageBucket: "house-marketplace-app-e6612.appspot.com",
  messagingSenderId: "573359766879",
  appId: "1:573359766879:web:fdd0e33895fdfe29414aea"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()
