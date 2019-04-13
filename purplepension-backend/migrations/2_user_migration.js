const User = artifacts.require("User");

module.exports = function(deployer) {
  deployer.deploy(User, "Arnoud", 21, 75, 180);
};
