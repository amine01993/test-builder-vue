
import { logger } from "firebase-functions";
import { auth } from "../init";

export function getCredentialsMiddleware(req: any, res: any, next: any) {

    const jwt = req.headers.authorization;

    if (jwt) {
        auth.verifyIdToken(jwt)
        .then(jwtPayload => {

            req["uid"] = jwtPayload.uid;

            next();
        })
        .catch(err => {
            logger.error("Error ocurred while validating JWT", err);
            next();
        });
    }
    else {
        next();
    }
}