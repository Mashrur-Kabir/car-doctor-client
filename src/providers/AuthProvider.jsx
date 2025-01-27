import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import axios from "axios";

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
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // User is logged in
                const loggedUser = { email: currentUser.email };
                setUser(currentUser);
                console.log('User logged in: ', currentUser.email);
    
                // Issue a token
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                .then((res) => {
                    if (res.data.success) {
                        console.log('Token response: ', res.data);
                    } else {
                        console.log('Error: ', res.data.message);
                    }
                });
                } else {
                    // User is logged out
                    console.log('No user logged in');
                    setUser(null); // Explicitly set user to null
        
                    // Cleanup token
                    axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
                    .then((res) => {
                        console.log('Token deleted: ', res.data);
                    });
                }
                setLoading(false); // Always set loading to false
            });
    
            return () => unsubscribe(); // Cleanup subscription
        }, []);
    
    // Client-side {withCredentials: true}
    // This tells the browser to include credentials (like cookies or authorization headers) in the request sent to the server.
    // Server-Side (credentials: true in CORS options):
    // This tells the server to allow credentials (cookies, authorization headers) to be sent from the client in cross-origin requests.
    // If credentials: true is not set on the server, the browser will block the request even if withCredentials: true is used on the client side. Both need to be enabled to allow secure handling of cookies or tokens for cross-origin requests.

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