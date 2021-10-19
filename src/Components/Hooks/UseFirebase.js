import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/Firebase.init";
FirebaseInitialize();
const useFirebase = () => {

    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);

    }
    const handleRegistration = e => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
            })
        e.preventDefault();
    }

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubcribe;
    }, [auth]);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(error => {
                setError(error.message);
            })
    }
    return {
        signInWithGoogle,
        handleSignOut,
        handlePasswordChange,
        handleEmailChange,
        handleRegistration,
        error,
        user,
    }
}
export default useFirebase;