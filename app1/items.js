const items = ['item1','item2']
const age  = 38
module.exports.fname = "Bob" //one way to export

module.exports = {age} // another way
module.exports.expitems = items // Third way

console.log(module)