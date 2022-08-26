import jwt from "jsonwebtoken";

const verifyJwtToken = (req, res, next) => {
  const token = req.headers.cookie; 
  if (!token) {
    res.status(401).send("Unauthorized!");
    return;
  }
  jwt.verify(token, process.env.JWTSECRETKEY, (err) => {
    if (!err) next();
    else {
      res.status(401).send("Invalid Token");
    }
  });
};

export default verifyJwtToken;