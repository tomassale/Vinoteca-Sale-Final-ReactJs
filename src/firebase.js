import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDk-ZVC10EwqZZd_Ij9n6aLee_A1iGKrgQ",
    authDomain: "vinoteca-sale.firebaseapp.com",
    projectId: "vinoteca-sale",
    storageBucket: "vinoteca-sale.appspot.com",
    messagingSenderId: "157015885353",
    appId: "1:157015885353:web:8f7b97d72bbe42794b7e38",
    measurementId: "G-5EDCG0QXVN"
};

const app = initializeApp (firebaseConfig)
export const db = getFirestore (app)