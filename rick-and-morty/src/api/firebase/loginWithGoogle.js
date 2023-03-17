import { auth } from ".";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setUser } from "redux/slices/app";


const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (dispatch) => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      dispatch(setUser({
        name: user.displayName,
        token,
        email: user.email,
        photo: user.photoURL,
      }));
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

