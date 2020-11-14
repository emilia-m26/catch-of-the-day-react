//allow us to mirror state to firebase
import Rebase from 're-base';
//official firebase package
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBI_q8qfIMenC6Wh4ONW3zql3PTNPp1NMs",
        authDomain: "catch-of-the-day-fresh-market.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-fresh-market.firebaseio.com"        
});


//rebase bindings
const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//default export
export default base;