const knex = require("../database");
class Account {
  static async create(data) {
    try {
      return await knex.transaction(async (trx) => {
        const [user] = await trx("users").insert(data).returning("*");
        await trx("preferences").insert({ user_id: user.id });
        return user;
      });
    } catch (error) {
      return new Error(error);
    }
  }
}
module.exports = Account;
