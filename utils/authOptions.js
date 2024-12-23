import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
    callbacks: {
        // Invoked on successfull singin
        async signIn({profile}) {
            // 1. connect to database
            // 2. check if user exists
            // 3. if not, create user
            // 4. Return true to allow sing in
        },
        // Session callback function that modifies the session object
        async session({session}) {
            // 1. Get use from database
            // 2. Assign user id from the session
            // 3. Return session
        }
    }
}