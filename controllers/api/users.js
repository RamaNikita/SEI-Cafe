const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
module.exports = {
  create,
  login,
  checkToken,
};
// This function fires when a request
async function create(req, res) {
  try {
    // Add the user to the database

    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

//async/await new syntax for .then() aka thennables
async function login(req, res) {
  try {
    //Query our database to find a user with the email provided
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user));
  } catch {
    res.status(400).json("Bad Credentials");
  }
}
// controllers/api/users.js

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log("req.user", req.user);
  res.json(req.exp);
}
/*-- Helper Functions --*/
function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
