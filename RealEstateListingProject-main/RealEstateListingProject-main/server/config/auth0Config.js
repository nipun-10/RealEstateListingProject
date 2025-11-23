import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "http://localhost:8000",
  issuerBaseURL: "https://dev-ythypufsxiy5x0p1.us.auth0.com",
  tokenSigningAlg: "RS256", //RS256 is default method of token signing
});

export default jwtCheck;
