// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract Contract {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function pay() public payable {
        payable(owner).transfer(msg.value);
    }
}
