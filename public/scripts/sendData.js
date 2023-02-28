 //Connect Smart Contract
 const sendData = async () => {
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
    let name = document.getElementById("name").value;
    let grno = document.getElementById("grno").value;
    let rollno = document.getElementById("rollno").value;
    let classes = document.getElementById("class").value;
    let div = document.getElementById("div").value;
    let dob = document.getElementById("dob").value;
    let faculty = document.getElementById("faculty").value;
    let mno = document.getElementById("mno").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    if(name=="" || grno=="" || rollno=="" || classes=="" || div=="" || dob=="" || faculty=="" || mno=="" || email=="" || city==""){
        alert("Please fill all the fields")
        return false;
    }
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!res.test(email)){
        alert("Please enter valid email address.");
        return false;
    }

    
    const records = await window.contract.methods.setDetails(grno,name,rollno,classes,div,dob,faculty,mno,email,city).send({from:account});
    document.getElementById("displaySuccess").innerText = "Data Successfully Stored On Blockchain"
}