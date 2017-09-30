web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var EnergyBazarABI = [{"constant":false,"inputs":[{"name":"target","type":"address"}],"name":"mintToken","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_from","type":"address"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function","stateMutability":"view"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"donate","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function","stateMutability":"nonpayable"},{"inputs":[],"payable":false,"type":"constructor","stateMutability":"nonpayable"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Donate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_target","type":"address"}],"name":"CreatedEnergy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"}],"name":"UsedEnergy","type":"event"}];
var EnergyBazarData = '0x60606040526040805190810160405280600c81526020017f456e657267792042617a617200000000000000000000000000000000000000008152506000908051906020019061004f929190610158565b506040805190810160405280600381526020017f45425a00000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b929190610158565b506064600260006101000a81548160ff021916908360ff160217905550620f424060035534156100ca57600080fd5b5b33600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600354600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b6101fd565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061019957805160ff19168380011785556101c7565b828001600101855582156101c7579182015b828111156101c65782518255916020019190600101906101ab565b5b5090506101d491906101d8565b5090565b6101fa91905b808211156101f65760008160009055506001016101de565b5090565b90565b610d178061020c6000396000f300606060405236156100ad576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301173a74146100b257806306fdde03146100eb578063095ea7b31461017a57806318160ddd146101d4578063313ce567146101fd5780633506ac741461022c57806370a082311461027d57806395d89b41146102ca578063a9059cbb14610359578063dd62ed3e1461039b578063f14faf6f14610407575b600080fd5b34156100bd57600080fd5b6100e9600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610442565b005b34156100f657600080fd5b6100fe610566565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013f5780820151818401525b602081019050610123565b50505050905090810190601f16801561016c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561018557600080fd5b6101ba600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610604565b604051808215151515815260200191505060405180910390f35b34156101df57600080fd5b6101e7610692565b6040518082815260200191505060405180910390f35b341561020857600080fd5b610210610698565b604051808260ff1660ff16815260200191505060405180910390f35b341561023757600080fd5b610263600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506106ab565b604051808215151515815260200191505060405180910390f35b341561028857600080fd5b6102b4600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506108bf565b6040518082815260200191505060405180910390f35b34156102d557600080fd5b6102dd6108d7565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561031e5780820151818401525b602081019050610302565b50505050905090810190601f16801561034b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561036457600080fd5b610399600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610975565b005b34156103a657600080fd5b6103f1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506109ea565b6040518082815260200191505060405180910390f35b341561041257600080fd5b6104286004808035906020019091905050610a0f565b604051808215151515815260200191505060405180910390f35b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415151561049f57600080fd5b6001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555060016003600082825401925050819055507fc2c38b879a0f25bffe7d0b19fe6e6417ad37f2f6681c133558546e0958c700c881604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5b50565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105fc5780601f106105d1576101008083540402835291602001916105fc565b820191906000526020600020905b8154815290600101906020018083116105df57829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600190505b92915050565b60035481565b600260009054906101000a900460ff1681565b60006001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156106fc57600080fd5b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460011115151561078857600080fd5b6001600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555060016003600082825403925050819055508173ffffffffffffffffffffffffffffffffffffffff167fd83a6058f87d66afaa861d86648261ac395e53762c81f4a8304e9bcacb0d484460405160405180910390a2600190505b919050565b60056020528060005260406000206000915090505481565b60018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561096d5780601f106109425761010080835404028352916020019161096d565b820191906000526020600020905b81548152906001019060200180831161095057829003601f168201915b505050505081565b610980338383610ae4565b8173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35b5050565b6006602052816000526040600020602052806000526040600020600091509150505481565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610a5f57600080fd5b610a8c33600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684610ae4565b3373ffffffffffffffffffffffffffffffffffffffff167f0553260a2e46b0577270d8992db02d30856ca880144c72d6e9503760946aef13836040518082815260200191505060405180910390a2600190505b919050565b60008273ffffffffffffffffffffffffffffffffffffffff1614151515610b0a57600080fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610b5857600080fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401111515610be657600080fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35b5050505600a165627a7a72305820c024b27afe89d176264f155c996c8c45f0f8f14895e9d15b600403af7e3154e90029';
var EnergyBazarContract = web3.eth.contract(EnergyBazarABI);

EnergyBazarAddress = "";
contractInstance = EnergyBazarContract.new(
   {
     from: web3.eth.accounts[0], 
     data: EnergyBazarData, 
     gas: '4700000'
   }, 
   function (e, contract){
    if (typeof contract.address !== 'undefined') {
         EnergyBazarAddress = contract.address
    }
});

// Instantiate SmartContract Functions
function checkUserBalance(userAddress) {
	return EnergyBazarContract.at(EnergyBazarAddress).balanceOf(userAddress).toString();
}

function transferTokens(fromAddress,toAddress) {
	return EnergyBazarContract.at(EnergyBazarAddress).transfer(toAddress, {from: fromAddress, data: EnergyBazarData, gas: '4700000'}).toString();
}

function mintTokens(mintTokenToAddress,userAccountAddress){
	return EnergyBazarContract.at(EnergyBazarAddress).mintToken(mintTokenToAddress, {from: userAccountAddress, data: EnergyBazarData, gas: '4700000'}).toString();
}

function smartMeterApproval(SmartMeterAddress,SmartMeterOwnerAddress) {
	return EnergyBazarContract.at(EnergyBazarAddress).approve(SmartMeterAddress, {from: SmartMeterOwnerAddress, data: EnergyBazarData, gas: '4700000'}).toString();
}

function smartMeterExpense(SmartMeterAddress,SmartMeterOwnerAddress) {
	return EnergyBazarContract.at(EnergyBazarAddress).burnFrom(SmartMeterOwnerAddress, {from: SmartMeterAddress, data: EnergyBazarData, gas: '4700000'}).toString();
}

function donateTokens(fromAddress,tokensToDonate=1) {
	return EnergyBazarContract.at(EnergyBazarAddress).donate(tokensToDonate, {from: fromAddress, data: EnergyBazarData, gas: '4700000'}).toString();
}

// Initiate users {A = 1, B = 2}
function ActivateBlockchain() {
	B_initial_tokens = 10;
	for (var i = 0; i < B_initial_tokens; i++ ){
		mintTokens(web3.eth.accounts[2],web3.eth.accounts[1]);
	};
	$('#block').html("Deploying address: "+ web3.eth.accounts[0]);
	$('#A_address').html(web3.eth.accounts[1]);
	$('#A_tokens').html(checkUserBalance(web3.eth.accounts[1]));
	$('#B_address').html(web3.eth.accounts[2]);
	$('#B_tokens').html(checkUserBalance(web3.eth.accounts[2]));
}


