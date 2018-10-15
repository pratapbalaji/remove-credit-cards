const removeCreditCards = module.exports = function (message) {
  return message.toString().replace(/(?:\d{4}[ -]?){4}/g, '- ')
}


