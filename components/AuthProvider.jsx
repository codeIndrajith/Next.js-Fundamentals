'use client';

import { SessionProvider } from "next-auth/react";

const AuthProvider = ({Children}) => {
    return <SessionProvider>{Children}</SessionProvider>
}

export default AuthProvider;