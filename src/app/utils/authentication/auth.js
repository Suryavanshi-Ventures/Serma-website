import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Pasword", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(
            "http://34.235.48.203/api/v1/auth/login",
            {
              email: credentials.email,
              password: credentials.password,
            }
          );
      
          if (response.status === 200 && response.data.data) {
            const GetProfileDataResponse = response.data.data;
            const ReturnedUserObj = {
              userToken: GetProfileDataResponse.token,
              userFirstName: GetProfileDataResponse.first_name,
              userLastName: GetProfileDataResponse.last_name,
              userEmail: GetProfileDataResponse.email,
            };
            return ReturnedUserObj;
          } else {
            throw new Error("Invalid response from authentication API");
          }
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error("Authentication failed");
        }
      }
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 2 * 60 * 60, // 2 hours
  },
  pages: {
    signIn: "/login",
    // error: "/error",
  },

  callbacks: {
    async jwt(returnedObj) {
      const { token, user, account, trigger, session } = returnedObj;
      console.log(trigger);
      console.log(session);
      // UPDATING SESSION IMAGE
      // if (trigger === "update") {
      //   const propertiesToCopy = [
      //     "userFirstName",
      //     "userGender",
      //     "userInstituteId",
      //     "userRoleId",
      //     "userInstituteType",
      //     "userInstituteName",
      //     "userToken",
      //     "userProfileStatus",
      //     "userLastName",
      //     "userMiddleName",
      //     "userPhone",
      //     "userPrefix",
      //     "userSuffix",
      //     "userProfilePic",
      //     "userPlan",
      //   ];
      //   for (const property of propertiesToCopy) {
      //     if (session[property]) {
      //       console.log(session[property]);
      //       token[property] = session[property];
      //     }
      //   }
      // }

      return { ...token, ...user };
    },
    async session(returnedObj) {
      const { session, token } = returnedObj;
      session.user = token;
      return session;
    },
  },
};
