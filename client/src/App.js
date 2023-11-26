import React,{useState,useEffect} from "react"
import './App.css';
import abi from "./contractjson/coffee.json"
import Buycoffee from "./components/Buycoffee";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from "./components/Navbar";
import AppCarosel from "./components/Appcarosel";
import Appvarient from "./components/Appvarient";
import AppMenu from "./components/Appmenu";
const { ethers } = require("ethers");

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not connected');

  useEffect(()=>{
    const template=async()=>{
   
      const contractAddres="contractaddress";
      const contractABI=abi.abi;
      console.log(contractAddres)
      try{

        const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })
 
        window.ethereum.on("accountsChanged",()=>{
         window.location.reload()
        })

        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);
        console.log(provider)
        const signer =  provider.getSigner(); 
        
        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        console.log(contract)
      setState({provider,signer,contract});
       
      }catch(error){
        console.log(error)
      }
    }
    template();
  },[])
  return (
    <div className="App">
      <AppNavBar></AppNavBar>
      <AppCarosel></AppCarosel>
      <AppMenu></AppMenu>
      <Appvarient></Appvarient>
       <h5>Connected Account : {account}</h5>
      <Buycoffee state={state}></Buycoffee>
      
    </div>
  );
}

export default App;
