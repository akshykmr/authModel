const AssertionError = require('assert');
// const createError = require("http-errors-lite");

function assert(condition, msg) {
  if (condition) return;
  if (typeof msg === 'string')
    throw new AssertionError({
      message: msg,
    });
  throw msg;
}

function assertEvery(conditionArray, msg) {
  conditionArray.forEach((condition) => assert(condition, msg));
}
function createError(statusCode, message, errorDetails = {}) {
    const err = new Error(message);
    err.statusCode = statusCode;
    err.details = errorDetails;
    return err;
  }

module.exports = {
  assert,
  assertEvery,
  createError
};