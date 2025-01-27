
import { logger } from "firebase-functions";
import { auth } from "../init";

export function getCredentialsMiddleware(req: any, res: any, next: any) {

    logger.debug('Extracting credentials from request.');
    logger.debug(req.headers.authorization);

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