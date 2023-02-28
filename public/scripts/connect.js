const connectToMetamask = async () => {
    if(window.ethereum !== "undefined"){
        const accounts = await ethereum.request({method:"eth_requestAccounts"});
        let account = accounts[0];
        document.getElementById("connectMetamask").innerHTML = "Connected to Metamask";
        document.getElementById("displayAccounts").innerHTML = "Welcome, "+account;
    }
}