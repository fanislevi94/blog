import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { verifyPassword } from '../../lib/auth';

export default NextAuth({
    session: {
      jwt: true,
    },
    providers: [
      Providers.Credentials({
        async authorize(credentials) {
         var user = await prisma.user.findUnique(
            {
              where:{
                email:String(credentials.email)
              }
            }
          )
          console.log("----------->"+user.email)
          if(user){
            console.log("space")
          }else{
            console.log("not space")
            throw new Error('No user found!');
          }

          const isValid = await verifyPassword(
            credentials.password,
            user.password
          );
          console.log("validity --->"+isValid)
          if (!isValid) {
            throw new Error('Could not log you in!');
          }
          return { email: user.email }
        },
      }),
    ],
  });
  
