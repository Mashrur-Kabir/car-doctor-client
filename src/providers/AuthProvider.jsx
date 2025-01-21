import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from "prop-types";

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    //using useEffect to check if a user is there or not because it will call an api 
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                setUser(currentUser);
                console.log('User logged in: ', currentUser.email)
            } else {
                console.log('No user logged in')
            }
            setLoading(false);  // after checking user, set loading to false to hide the loading spinner
        });
        return () => {
            unsubscribe();  // unsubscribe when component unmounts to prevent memory leak
        }
    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        signIn,
        logOut,
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProvider;