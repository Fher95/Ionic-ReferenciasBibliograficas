import { Injectable } from "@angular/core";
import { User } from "../shared/user.interface";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase/app";
import { switchMap, tap } from "rxjs/operators";

import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private usuarioActual: User;
  public userIdActual;
  public user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          this.userIdActual = user.uid;
          console.log("Usuario iniciado en auth: ", user.uid);
          return this.afs.doc(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  async login(email, password): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      this.userIdActual = user.uid;
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log("Login Error: ", error);
    }
  }

  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      this.userIdActual = user.uid;
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log("Login Google Error: ", error);
    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log("Reset Password Error: ", error);
    }
  }

  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      // await this.sendVerificationEmail(); //ToDO: Descomentar
      return user;
    } catch (error) {
      console.log("Register Error: ", error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async sendVerificationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log("Send Mail Error: ", error);
    }
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
    };
    this.userIdActual = user.uid;
    this.usuarioActual = data;
    return userRef.set(data, { merge: true });
  }

  isEmailVerified(user: User): boolean {
    if (user.emailVerified === true) {
      return true;
    }
    return false;
  }

  getActualUser(): User {
    if (this.usuarioActual) {
      return this.usuarioActual;
    }
  }
}
