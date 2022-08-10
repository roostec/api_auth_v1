const knex = require("../database");
class User {
  static async findOne(params) {
    try {
      return await knex("users").where(params).first();
    } catch (error) {
      return new Error(error);
    }
  }
}
module.exports = User;
