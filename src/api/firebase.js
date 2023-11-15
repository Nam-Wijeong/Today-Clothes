import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}
export function logout() {
  signOut(auth);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    callback(user);
  });
}

export async function getClothes(temp) {
  return get(ref(database, 'data')).then(snapshot => {
    if (snapshot.exists()) {
      if (temp <= 4) {
        return Object.values(snapshot.val())[0];
      } else if (temp > 5 && temp <= 8) {
        return Object.values(snapshot.val())[1];
      } else if (temp > 8 && temp <= 11) {
        return Object.values(snapshot.val())[2];
      } else if (temp > 11 && temp <= 16) {
        return Object.values(snapshot.val())[3];
      } else if (temp > 16 && temp <= 19) {
        return Object.values(snapshot.val())[4];
      } else if (temp > 19 && temp <= 22) {
        return Object.values(snapshot.val())[5];
      } else if (temp > 22 && temp <= 27) {
        return Object.values(snapshot.val())[6];
      } else if (temp > 27) {
        return Object.values(snapshot.val())[7];
      }
    }
    return [];
  })
}