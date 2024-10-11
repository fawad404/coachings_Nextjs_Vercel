import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
    providers: [
        // Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // Credentials Provider
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const { email, password } = credentials;

                // For demonstration purposes, this just logs the credentials
                console.log("Email:", email);
                console.log("Password:", password);

                // Here you could add custom logic to verify the email and password
                // Since there's no database, let's assume login is always successful for testing
                return { id: "1", email };  // Mock user object
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",  // Specify the sign-in page
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            // Log user info on successful sign-in
            console.log("User signed in:", user);
            return true;  // Allow the sign-in
        },
        async jwt({ token, user }) {
            // Log JWT token and user info
            if (user) {
                console.log("JWT token created:", token);
            }
            return token;  // Return token
        },
        async session({ session, token }) {
            // Log session info
            console.log("Session info:", session);
            return session;  // Return session
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
