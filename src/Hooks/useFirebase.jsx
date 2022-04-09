import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase.init";

const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
  const [user, setUser] = useState({});

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
          const user = result.user;
          setUser(user);
          console.log(user);
      })
        .catch((error) => {
            console.error(error);
      });
    };
    
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setUser({});
            });
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    },[])

  return {
    user,
    signInWithGoogle,
    handleSignOut
  };
};

export default useFirebase;
