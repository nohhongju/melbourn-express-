import { Strategy, ExtractJwt } from "passport-jwt";
import db from '../models/index.js'
const applyPassport = (passport, _secretOrKey)  => {
    const jwtOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // header에 bearer스키마에 담겨온 토큰 해석할 것
        secretOrKey: _secretOrKey
      };
    const verifyUser = async (jwt_payload, done) =>{
        const User = db.User
        User.findOne({
            userid: jwt_payload.id
        }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }
    passport.use(new Strategy(jwtOptions,verifyUser));
    return passport
}
export default applyPassport