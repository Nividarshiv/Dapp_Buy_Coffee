// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract coffee{
    address payable  owner;
    event Buyerdetail(string name,address ad,uint amount);
    struct Buyer{
        string name;
        string message;
        string varieties;
        address ad;
        uint value;
        uint timestamp;
    }
    Buyer[] public buyer;

    constructor(){
        owner=payable(msg.sender);
    }

    function BuyChai(string calldata _name,string calldata _message,string calldata _varieties) public payable{
        require(msg.value>15);
        buyer.push(Buyer(_name,_message,_varieties,msg.sender,msg.value,block.timestamp));
        owner.transfer(msg.value);
        emit Buyerdetail(_name, msg.sender, msg.value);
    }

    function listofbuyer() public view returns(Buyer[] memory){
        return buyer;
    }    
}
