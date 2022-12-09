import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { IGoogleProvider } from '../../../interfaces/auth/GoogleProvider';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ]
})