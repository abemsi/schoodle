// Returns a string of 16 random alphanumeric characters for a unique shortURL
const generateRandomString = function() {
let random = Math.random().toString(36).substring(2);

return random += random;
}

generateRandomString();
module.exports = { generateRandomString };


