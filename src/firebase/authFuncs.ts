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
import { RootState, store } from "../redux-store/store";
import {
  setOverviewPageLoaded,
  setWelcomePageLoaded,
} from "../redux-store/slices/loadersSlice";
import { removeUser, setCurrentUser } from "../redux-store/slices/userSlice";
import { callModalWindow } from "../redux-store/slices/modalWindowSlice";
import { setDisabledButton } from "../redux-store/slices/disableButtonSlice";

export function checkUser() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Signed in. Docs for a list of available properties:
      // https://firebase.google.com/docs/reference/js/firebase.User

      console.log("user!", user);

      if (user.emailVerified) {
        console.log("emailVerified = true, set user");
        store.dispatch(
          setCurrentUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
          }),
        );
      } else {
        sendEmailVerification(user).then(() => {
          store.dispatch(
            callModalWindow({
              message: `You was signed up. Now check ${user.email} for email confirmation`,
              // handleOccurs: {
              //   handleText: "Resend email",
              //   handleFunc: () => sendEmailVerification(user),
              // },
            }),
          );
        });
      }
    } else {
      // User is signed out
      console.log("there's no user ");
      // store.dispatch(logout());
      store.dispatch(removeUser());
    }

    store.dispatch(setWelcomePageLoaded(true));
  });
}

export async function signUp(
  email: string,
  password: string,
  confirmation: string,
) {
  store.dispatch(setDisabledButton(true));
  try {
    if (password !== confirmation) {
      throw new Error("Passwords do not match, please try again");
    }
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = handleAuthError(error);
      store.dispatch(callModalWindow({ message: `${errorMessage}` }));
    } else {
      store.dispatch(
        callModalWindow({
          message: `Unexpected type of error! Task for developers is found`,
        }),
      );
    }
  } finally {
    store.dispatch(setDisabledButton(false));
  }
}

export const logIn = async (email: string, password: string) => {
  store.dispatch(setDisabledButton(true));
  try {
    await signInWithEmailAndPassword(auth, email, password).then(() => {
      console.log("signedIn");
    });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = handleAuthError(error);
      store.dispatch(callModalWindow({ message: `${errorMessage}` }));
    } else {
      store.dispatch(
        callModalWindow({
          message: `Unexpected type of error! Task for developers is found`,
        }),
      );
    }
  } finally {
    store.dispatch(setDisabledButton(false));
  }
};

export const logOut = async () => {
  try {
    await signOut(auth).then(() => console.log("logOut"));
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = handleAuthError(error);
      store.dispatch(callModalWindow({ message: `${errorMessage}` }));
    } else {
      store.dispatch(
        callModalWindow({
          message: `Unexpected type of error! Task for developers is found`,
        }),
      );
    }
  }
};

export const resetPassword = async (email: string) => {
  store.dispatch(setDisabledButton(true));
  try {
    await sendPasswordResetEmail(auth, email).then(() => {
      callModalWindow({ message: `Check ${email} for further instructions` });
    });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = handleAuthError(error);
      store.dispatch(callModalWindow({ message: `${errorMessage}` }));
    } else {
      store.dispatch(
        callModalWindow({
          message: `Unexpected type of error! Task for developers is found`,
        }),
      );
    }
  } finally {
    store.dispatch(setDisabledButton(true));
  }
};

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

export const changePassword = async (
  password: string,
  newPassword: string,
  confirmation: string,
) => {
  store.dispatch(setDisabledButton(true));
  try {
    if (newPassword !== confirmation)
      throw new Error(
        "Password was not confirmed correctly, check inputs for mistakes",
      );

    await reauthentication(password).then(() => {
      updatePassword(auth.currentUser!, newPassword).then(() => {
        store.dispatch(
          callModalWindow({
            message: "Your password was updated successfully!",
          }),
        );
      });
    });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = handleAuthError(error);
      store.dispatch(callModalWindow({ message: `${errorMessage}` }));
    } else {
      store.dispatch(
        callModalWindow({
          message: `Unexpected type of error! Task for developers is found`,
        }),
      );
    }
  } finally {
    store.dispatch(setDisabledButton(false));
  }
};
