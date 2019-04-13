pragma solidity >=0.4.21 <0.6.0;

contract Activity {
  
  address public owner;
  address public allowed_to_view;
  string public frequency; //Weekly/monthly

  uint public kilometres_walked;

  modifier onlyAllowed() {
      require(msg.sender == allowed_to_view, 
      "Only the accepted third party can view this data.");
      _;
  }

  constructor(string memory _frequency) public {
    frequency = _frequency;
  }
  
  function getFrequency() public view returns (string memory) {
    return frequency;
  }
}