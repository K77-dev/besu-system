// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TableContractModule = buildModule("TableContractModule", (m) => {
  const tableContract = m.contract("TableContract");

  return { tableContract };
});

export default TableContractModule;
