import { auth } from "../firebase";

import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  NextOrObserver,
  User,
  reauthenticateWithCredential,
  EmailAuthProvider,
  EmailAuthCredential,
} from "firebase/auth";
import { handleAuthError } from "../helpers/handleAuthError";
import { store } from "../redux-store/store";
import { setCurrentUser } from "../redux-store/slices/userSlice";

export async function signUp(
  email: string,
  password: string,
  confirmation: string,
) {
  try {
    if (password !== confirmation) {
      throw new Error("Passwords do not match, please try again");
    }

    await createUserWithEmailAndPassword(auth, email, password).then(
      ({ user }) => {
        checkUser();
        // sendEmailVerification(user).then(() => {
        //   checkUser();
        // });
      },
    );
  } catch (error) {
    if (error instanceof Error) {
      handleAuthError(error);
    } else handleAuthError(new Error("Unexpected type of error!!!"));
  }
}
export const logIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const logOut = () => {
  return signOut(auth);
};

export const resetPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

export async function checkUser() {
  // callback: NextOrObserver<User>
  // return onAuthStateChanged(auth, callback);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      console.log("user!", user);

      if (user.emailVerified) {
        console.log("emailVerified = true ");

        store.dispatch(setCurrentUser(user));
        // store.dispatch(setUserName(user.displayName));
      } else {
        console.log("emailVerified = false ");

        // store.dispatch(successOccured("Сheck your email for confirmation"));
      }
      // store.dispatch(setMainPageLoad(true));
    } else {
      // User is signed out
      // store.dispatch(logout());
      // store.dispatch(setMainPageLoad(true));
    }
  });
}

export const reauthentication = (userProvidedPassword: string) => {
  const user: User | null = auth.currentUser;
  let credential: EmailAuthCredential | null = null;

  if (auth.currentUser?.email !== null) {
    credential = EmailAuthProvider.credential(
      auth.currentUser!.email,
      userProvidedPassword,
    );
  }

  return reauthenticateWithCredential(user!, credential!);
};

export const changeEmail = (email: string) => {
  if (auth.currentUser !== null) return updateEmail(auth.currentUser, email);
};

export const changePassword = (newPassword: string) => {
  if (auth.currentUser !== null)
    return updatePassword(auth.currentUser, newPassword);
};
