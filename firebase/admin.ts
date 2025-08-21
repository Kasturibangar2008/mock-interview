// admin.ts
import { initializeApp, getApps } from 'firebase-admin/app';
import { cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

let authInstance: ReturnType<typeof getAuth> | null = null;
let dbInstance: ReturnType<typeof getFirestore> | null = null;

const initFirebaseAdmin = () => {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID!,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')!,
      }),
    });
  }

  if (!authInstance) authInstance = getAuth();
  if (!dbInstance) dbInstance = getFirestore();

  return { auth: authInstance, db: dbInstance };
};

// Export **getter functions** for auth and db
export const getAuthInstance = () => initFirebaseAdmin().auth;
export const getDbInstance = () => initFirebaseAdmin().db;

;