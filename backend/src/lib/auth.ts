    import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/src/db/client";
import * as schema from "@/db/schema";

type ParsedVjtiEmail = {
  isAllowed: boolean;
  emailType: string | null;
  metadata?: Record<string, unknown>;
};

function parseVjtiEmail(_email: string): ParsedVjtiEmail {
  throw new Error("TODO: implement parseVjtiEmail");
}

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema,
  }),
  user: {
    additionalFields: {
      emailType: {
        type: "string",
        required: false,
        fieldName: "email_type",
      },
      emailMeta: {
        type: "string",
        required: false,
        fieldName: "email_meta",
      },
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          const parsed = parseVjtiEmail(user.email);
          if (!parsed.isAllowed) {
            return false;
          }

          return {
            data: {
              ...user,
              emailType: parsed.emailType,
              emailMeta: parsed.metadata
                ? JSON.stringify(parsed.metadata)
                : undefined,
            },
          };
        },
      },
    },
    session: {
      create: {
        before: async (session, context) => {
          if (!context) {
            return false;
          }

          const existingUser = await context.context.internalAdapter.findUserById(
            session.userId,
          );

          if (!existingUser) {
            return false;
          }

          const parsed = parseVjtiEmail(existingUser.email);
          if (!parsed.isAllowed) {
            return false;
          }
        },
      },
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
