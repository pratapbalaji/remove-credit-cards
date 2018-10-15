const replaceCreditCards = module.exports = function (message) {
  // function that replaces credit card numbers from a given message with '- ' and returns the updated message
  // using a regular expression to check for all instances of 4 sets of 4 digit blocks
  // for simplicity, assuming that all credit cards have 4 sets of 4 digit blocks, i.e. 1111 1111 1111 1111
  return message.toString().replace(/(?:\d{4}[ -]?){4}/g, '- ')
}