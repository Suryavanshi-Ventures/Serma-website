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
        console.log(credentials, "credentials");

        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_APP_NEXTAUTH_URL}/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          if (response.status === 200) {
            const GetProfileDataResponse = response.data.data;
            const ReturnedUserObj = {
              //   userToken: AccessToken,
              userToken: GetProfileDataResponse?.token,
              userFirstName: GetProfileDataResponse?.first_name,
              userLastName: GetProfileDataResponse?.last_name,
              userEmail: GetProfileDataResponse?.email,
              userLoginId: GetProfileDataResponse?.id,
              userAccessLevel: GetProfileDataResponse?.access_level,
              userAccessRole: GetProfileDataResponse?.access_role,
              userMembershipPlan: GetProfileDataResponse?.membership_plan_id,
              userProfileUrl: GetProfileDataResponse?.profile_url,
              userMembershipLevel: GetProfileDataResponse?.membership_level,
              userOrganization: GetProfileDataResponse?.organization,
              userTitle: GetProfileDataResponse?.title,
              state: GetProfileDataResponse?.state,
              city: GetProfileDataResponse?.city,
              zipCode: GetProfileDataResponse?.zip_code,
              mobile: GetProfileDataResponse?.mobile_number,
            };

            return Promise.resolve(ReturnedUserObj);
          }
        } catch (error) {
          console.log(error.response.status, "fail");
          const ErrorObject = {
            responseMessage: error.response.data.message,
            responseStatus: error.response.status,
          };
          throw new Error(JSON.stringify(ErrorObject));
        }
      },
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
