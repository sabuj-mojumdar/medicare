import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/Firebase.init";
FirebaseInitialize();
const useFirebase = () => {


    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleNameChange = e => {
        setUserName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);

    }

    const updateProfileName = () => {
        updateProfile(auth.currentUser, { displayName: userName })
            .then(result => {
            })
    }
    const handleRegistration = () => {
        if (password.length < 5) {
            setPasswordError('Password must be greater than 5 charecter');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const info = { ...result.user, displayName: userName }
                setUser(info)
                updateProfileName();
            })

    }

    const handleLogin = e => {
        e.preventDefault();
        return signInWithEmailAndPassword(auth, email, password)
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
        handleLogin,
        handleNameChange,
        updateProfileName,
        passwordError,
        error,
        user,
        userName
    }
}
export default useFirebase;