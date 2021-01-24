import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyCKR7YBafGi1YTi0CPMGKEpqRwH0Ysimyc",
  authDomain: "fir-ceb07.firebaseapp.com",
  projectId: "fir-ceb07",
  storageBucket: "fir-ceb07.appspot.com",
  messagingSenderId: "444339094743",
  appId: "1:444339094743:web:e36a03255044c05b419c92"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;