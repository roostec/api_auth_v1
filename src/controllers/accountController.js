// const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const {
  existsOrError,
  isEmailOrError,
  notExistsOrError,
} = require("../services/serviceValidation");

const userModel = require("../model/userModel");
const accountModel = require("../model/accountModel");

class AccountController {
  static async create(req, res, next) {
    try {
      const { first_name, last_name, email, password } = req.body;
      existsOrError(first_name, "First name is required");
      existsOrError(last_name, "Last name is required");
      existsOrError(email, "Email is required");
      isEmailOrError(email, "Email is invalid");
      const user = await userModel.findOne({ email });
      console.log(user);
      if (user) throw "User already exists";
      existsOrError(password, "Password is required");
      if (password.length < 6) throw "Password must be at least 6 characters";
      req.body.password_hash = bcryptjs.hashSync(password, 8);
      delete req.body.password;
      const account = await accountModel.create(req.body);
      notExistsOrError(account instanceof Error, {
        msg: account,
        status: 500,
      });
      res.status(201).end();
    } catch (error) {
      next(error);
    }
    //   constructor(accountModel) {
    //     this.accountModel = accountModel;
    //   }

    //   async create(req, res) {
    //     const { email, password } = req.body;
    //     const account = await this.accountModel.findOne({ email });
    //     if (account) {
    //       return res.status(400).json({
    //         message: 'Account already exists',
    //       });
    //     }
    //     const salt = await bcrypt.genSalt(10);
    //     const hashedPassword = await bcrypt.hash(password, salt);
    //     const newAccount = new this.accountModel({
    //       email,
    //       password: hashedPassword,
    //     });
    //     await newAccount.save();
    //     return res.status(201).json({
    //       message: 'Account created successfully',
    //     });
    //   }
    //   async login(req, res) {
    //     const { email, password } = req.body;
    //     const account = await this.accountModel.findOne({ email });
    //     if (!account) {
    //       return res.status(400).json({
    //         message: 'Account does not exist',
    //       });
    //     }
    //     const isMatch = await bcrypt.compare(password, account.password);
    //     if (!isMatch) {
    //       return res.status(400).json({
    //         message: 'Incorrect password',
    //       });
    //     }
    //     const token = jwt.sign({ id: account._id }, process.env.JWT_SECRET, {
    //       expiresIn: '1h',
    //     });
    //     return res.status(200).json({
    //       message: 'Login successful',
    //       token,
    //     });
  }
}

module.exports = AccountController;
