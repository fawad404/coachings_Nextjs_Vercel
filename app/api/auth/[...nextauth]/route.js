import User from '@/app/utilis/model/user';
import { connectToDB } from '@/app/utilis/mongodb';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
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
                if (!credentials.email || !credentials.password) {
                  throw new Error('Email and Password are required');
                }
        
                try {
                  await connectToDB();
        
                  // Check if user exists in the database
                  const user = await User.findOne({ email: credentials.email });
                  
                  if (user && await bcrypt.compare(credentials.password, user.password)) {
                    return {
                      email: user.email,
                      username: user.username || 'User',
                    };
                  }
        
                  // Create new user if not exists
                  if (!user) {
                    const hashedPassword = await bcrypt.hash(credentials.password, 10);
        
                    const newUser = new User({
                      email: credentials.email,
                      username: credentials.email.split('@')[0], // Default username
                      password: hashedPassword,
                    });
        
                    await newUser.save();
        
                    return {
                      email: newUser.email,
                      username: newUser.username,
                    };
                  }
        
                  return null;
                } catch (error) {
                  console.error('Authentication Error:', error);
                  throw new Error('Authentication failed');
                }
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
            if (account.provider === 'google') {
              await connectToDB();
              
              // Check if the user already exists
              const existingUser = await User.findOne({ email: user.email });
        
              if (!existingUser) {
                const newUser = new User({
                  email: user.email,
                  username: user.name || 'User',
                  // No password needed for Google users
                });
        
                await newUser.save();
              }
        
              return true;  // Let the sign-in continue
            }
        
            return true;
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
