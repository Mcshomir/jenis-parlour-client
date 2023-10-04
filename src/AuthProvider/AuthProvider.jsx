import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null)

    const handleCreateUsers = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOutclick = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser)
            console.log("AuthChangedCurrentUser", currentUser)
        })
        return () => { unsubscribe() }
    }, [])

    const userInfo = {
        users,
        handleCreateUsers,
        loginUser,
        LogOutclick

    }
    return (
        <div>
            <AuthContext.Provider
                value={userInfo}
            >{children}</AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;