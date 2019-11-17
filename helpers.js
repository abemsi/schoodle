// Returns a string of 16 random alphanumeric characters for a unique shortURL
const generateRandomString = function() {
  let randomString = Math.random().toString(36).substring(16); 
  return randomString
};

module.exports = { generateRandomString };