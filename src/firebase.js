import { initializeApp } from 'firebase/app';
import { getToken, getMessaging, onMessage } from 'firebase/messaging';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { onBackgroundMessage } from 'firebase/messaging/sw';

const firebaseConfig = {
  apiKey: "AIzaSyCMtzeXk0PMBfD2dOavNfppRxTv-ZQ2j1s",
  authDomain: "the-trading-titans.firebaseapp.com",
  projectId: "the-trading-titans",
  storageBucket: "the-trading-titans.appspot.com",
  messagingSenderId: "531064025334",
  appId: "1:531064025334:web:e0aae382818d4252903cd7",
  measurementId: "G-2XLKSHRT89"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
const messaging = getMessaging(firebaseApp);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const getOrRegisterServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    return window.navigator.serviceWorker
      .getRegistration('/firebase-push-notification-scope')
      .then((serviceWorker) => {
        if (serviceWorker) return serviceWorker;
        return window.navigator.serviceWorker.register('/firebase-messaging-sw.js', {
          scope: '/firebase-push-notification-scope',
        });
      });
  }
  throw new Error('The browser doesn`t support service worker.');
};

export const getFirebaseToken = () =>
  getOrRegisterServiceWorker()
    .then((serviceWorkerRegistration) =>
      getToken(messaging, { vapidKey: "BCG3sp_O4HBLD-bdzzYeQa05cxF5bgk_6OTTCZegBU0Hhfqc-0amXXUGNasASCCUsZMsz8rUfnMxtL9K4efiF6U", serviceWorkerRegistration }));

export const onForegroundMessage = () =>
  new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));
