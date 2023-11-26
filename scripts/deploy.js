
const hre = require("hardhat");

async function main() {

 const coffee = await hre.ethers.deployContract("coffee");

  await coffee.waitForDeployment();

  console.log(
    ` deployed to ${coffee.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
