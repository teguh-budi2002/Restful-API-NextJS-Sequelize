import jwt from "jsonwebtoken";

export default function Authorization(req, res) {
  return new Promise((resolve, reject) => {
    const token = req.headers.authorization.split(" ");
    return jwt.verify(token[1], "iniPrivateKey", (err, decoded) => {
      if (err) return res.status(401).json({ message: "You're Not Logged In" });
      return resolve(decoded);
    });
  });
}
