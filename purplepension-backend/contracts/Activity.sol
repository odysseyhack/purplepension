pragma solidity >=0.4.21 <0.6.0;

contract Activity {
  
  address public owner;
  address public signedBy;
  address public allowed_to_view;


  event DataViewed(address accessor, bytes32 name, uint timestamp); // When data is read
  event ActivitySigned(address signedBy, string name, uint timestamp); //When an activity is signed

  modifier onlyAllowed() {
      require(msg.sender == allowed_to_view, 
      "You are not allowed to view this data.");
      _;
  }

  modifier onlyOwner() {
      require(msg.sender == owner, 
      "Only owner is allowed to view this data.");
      _;
  }

  constructor() public {
    owner = msg.sender;
    allowed_to_view = msg.sender;
    emit ActivitySigned(msg.sender, "BasicFit", now);
  }
   
  function viewData() public onlyAllowed returns(address,string memory) {
    emit DataViewed(msg.sender, "BasicFit", now);
    return (owner, " went to the gym from 2 to 4 on Wednesday!");
  }
  
  function signActivity() public {
    signedBy = msg.sender;
    emit ActivitySigned(msg.sender, "BasicFit", now);
  }

}