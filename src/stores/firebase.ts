import { defineStore } from 'pinia'
import { initializeApp } from 'firebase/app';

export const useFirebaseStore = defineStore('firebase', () => {

    const firebaseConfig = {
        apiKey: "AIzaSyCXwaDcMJoqTPcqGkurfRdx73jMIvu7kWk",
        authDomain: "test-builder-api.firebaseapp.com",
        projectId: "test-builder-api",
        storageBucket: "test-builder-api.firebasestorage.app",
        messagingSenderId: "846755975876",
        appId: "1:846755975876:web:c0dbc71f03867028f96f91",
        measurementId: "G-K08F9M7C57"
    };

    const firebaseApp = initializeApp(firebaseConfig);

  return { firebaseApp };
})
