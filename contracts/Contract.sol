pragma solidity ^0.4.4;

contract CrowdFunding {
  address[16] public contributors;

  function contribute(uint projectId) public returns (uint) {
    require(projectId >= 0 && projectId <= 15);

    contributors[projectId] = msg.sender;

    return projectId;
  }

  function getContributors() public returns (address[16]) {
    return contributors;
  }

}
