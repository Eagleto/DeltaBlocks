 //Connect Smart Contract
 const retrieveData = async () => {
    const ABI =[
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_grNo",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_rollNo",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_class",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_div",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_dob",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_faculty",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_email",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_mobNo",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_city",
                    "type": "string"
                }
            ],
            "name": "setDetails",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "studentsRecords",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "rollNo",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "class",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "div",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "dob",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "faculty",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "email",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "mobNo",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "city",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_grNo",
                    "type": "uint256"
                }
            ],
            "name": "viewDetails",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_grNo",
                    "type": "uint256"
                }
            ],
            "name": "viewDetailsContacts",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const Address ="0x1f23810Ee9ba88128cB884A0077E2a568c5488e9";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI,Address);
    let account;
    
    if(window.ethereum !== "undefined"){
        const accounts = await ethereum.request({method:"eth_requestAccounts"});
        account = accounts[0];
    }
    let GRNo = document.getElementById("GRNo").value;
    const details = await window.contract.methods.viewDetails(GRNo).call({from:account});
    const contacts = await window.contract.methods.viewDetailsContacts(GRNo).call({from:account});
    document.getElementById("nameLabel").innerText = details[0];
    document.getElementById("rollLabel").innerText = details[1];
    document.getElementById("classLabel").innerText = details[2];
    document.getElementById("divLabel").innerText = details[3];
    document.getElementById("dobLabel").innerText = details[4];
    document.getElementById("facultyLabel").innerText = contacts[0];
    document.getElementById("mobLabel").innerText = contacts[2];
    document.getElementById("emailLabel").innerText = contacts[1];
    document.getElementById("cityLabel").innerText = contacts[3];

}