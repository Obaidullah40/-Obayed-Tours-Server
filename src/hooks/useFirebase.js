import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";



initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google sign in method
    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // github sign in method
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    // observe user state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unSubscribe;
    }, []);

    // create Email And Password
    const emailAndPasswordSignUp = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log("ps-log--", result.user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // logOut
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                console.log("logOut-->", error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // email and password login system
    const emailAndPasswordLogIn = (email, password) => {
        setIsLoading(false);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("userCredential", userCredential.user);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // update user name
    const updateUserName = (name) => {
        setIsLoading(true);
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {})
            .catch((error) => {
                console.log("usr-up-name-->", error.message);
            })
            .finally(() => setIsLoading(false));
    };

    return {
        user,
        handleGoogleLogin,
        isLoading,
        logOut,
        handleGithubLogin,
        error,
        emailAndPasswordSignUp,
        emailAndPasswordLogIn,
        updateUserName,
    };
};

export default useFirebase;
