import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAAWMndtGH7ulDrlJXou1adzvA8pHHYavk",
  authDomain: "habibi-indenta.firebaseapp.com",
  projectId: "habibi-indenta",
  storageBucket: "habibi-indenta.appspot.com",
  messagingSenderId: "679108183088",
  appId: "1:679108183088:web:b48eda81f92530482c99f5"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };