const User = artifacts.require("User");

contract("User", accounts => {
  let user_instance;
  it("should deploy User contract correctly", () => {
    User.deployed().then(instance => {
      user_instance = instance;
      return user_instance.getName.call();
    })
    .then(name => {
      assert.equal(name, "Harry", "Name should be equal to initial value");
    });
  });
});
