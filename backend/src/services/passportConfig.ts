import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import UserModel from "../models/users.js";

export default function configurePassport() {
  passport.use(
    new LocalStrategy(async function (username, password, done) {
      try {
        //find username on the databse
        const user = await UserModel.findOne({ username: username }).exec();

        //return false user not found
        if (!user) {
          return done(null, false);
        }

        // compare & verify password with user model
        const passwordIsValid = await user.verifyPassword(password);

        // return false if password is wrong
        if (!passwordIsValid) {
          console.log("password error");
          return done(null, false);
        }

        // send data if all success
        return done(null, user);
      } catch (err) {
        // unexpected error
        return done(err);
      }
    })
  );

  // Serialize and Deserialize User
  passport.serializeUser((user: any, done) => {
    if (user && user.username) {
      done(null, user.username);
    } else {
      done(new Error("Invalid user object"), null);
    }
  });

  passport.deserializeUser(async (username: string, done) => {
    try {
      const foundUser = await UserModel.findOne({
        username: username,
      }).exec();
      done(null, foundUser);
    } catch (err) {
      done(err, null);
    }
  });
}
