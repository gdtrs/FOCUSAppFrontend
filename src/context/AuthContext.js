import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createContext, useContext } from "react";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
    } from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {

    const context = useContext(authContext);

    if(!context){
        console.log('error creating auth context');
    }
    return context;
};

export function AuthProvider({ children }){

    const [user, setUser] = useState("");
    
    useEffect(() => {
        const subscribed = onAuthStateChanged( auth, (currentUser) => {
            if(!currentUser){
                console.log("There's no subscribed user");
                setUser("");
            }else{
                setUser(currentUser);
            }
        });
        return () => subscribed();
    },[]);

    const register = async ( email, password ) => {
        const response = await createUserWithEmailAndPassword( auth, email, password );
        console.log(response);
    };

    const login = async ( email, password ) => {
        const response = await signInWithEmailAndPassword( auth, email, password );
        console.log(response);
    };

    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider();
        return signInWithPopup(auth, responseGoogle);
    };

    const logout = async () => {
        try {
            await signOut(auth);
            return { message: 'Log out Succesfully!', code: '00'}
        } catch (error) {
            return { message: error.message, code: '01'}
        }
    };

    return (
        <authContext.Provider value={{ register, login, loginWithGoogle, logout, user }}>
            {children}
        </authContext.Provider>
    );
};