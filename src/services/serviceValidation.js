class Validation {
  static existsOrError(value, msg) {
    if (!value) throw msg;
    if (Array.isArray(value) && value.length === 0) throw msg;
    if (typeof value === "string" && !value.trim()) throw msg;
  }

  static notExistsOrError(value, msg) {
    if (value) throw msg;
  }

  static isEmailOrError(value, msg) {
    if (!value) throw msg;
    if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
      throw msg;
  }
}
module.exports = Validation;
