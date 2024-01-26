import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtrOOOKndKlkCx-2dEDIFxjCjt4Dc7Fjs",
  authDomain: "myblogs-backend.firebaseapp.com",
  projectId: "myblogs-backend",
  storageBucket: "myblogs-backend.appspot.com",
  messagingSenderId: "852175555340",
  appId: "1:852175555340:web:4d0e17e52dd314306e5729",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
