import web3 from './web3';
const Contracts = require('./build/contracts.json');
const Contract = Contracts['Contract.sol'].Contract;

const instance = new web3.eth.Contract(
    Contract.abi,
    '0xD1712Cfc5574D593Caf58a3D2b207665D5676A2E' // TODO: autofill when building
);

export default instance;