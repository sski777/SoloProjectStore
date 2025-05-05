import { expressjwt as jwt } from 'express-jwt';
import jwksRsa from 'jwks-rsa';

export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-z6tatywvih7xm0cl.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://phoenix-store-api', // must match exactly
  issuer: 'https://dev-z6tatywvih7xm0cl.us.auth0.com/',
  algorithms: ['RS256']
});

