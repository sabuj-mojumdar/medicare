import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/Firebase.init";
FirebaseInitialize();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            }).catch(error => {
                setError(error.message);
            });
    }
    const signInWithFacebook = () => {
        const facebookProvider = new GoogleAuthProvider();
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
            }).catch(error => {
                setError(error.message);
            });
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
        signInWithFacebook,
        handleSignOut,
        error,
        user,
    }
}
export default useFirebase;