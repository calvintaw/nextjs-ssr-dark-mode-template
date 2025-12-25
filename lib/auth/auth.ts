import { betterAuth } from "better-auth";
// import Database from "better-sqlite3";

export const auth = betterAuth({
	// database: new Database("./sqlite.db"),
	baseURL: process.env.BETTER_AUTH_URL,
	socialProviders: {
		google: {
			prompt: "select_account",
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
	},
	session: {
		expiresIn: 60 * 60 * 24 * 7, // 7 days
		updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
	},
});
