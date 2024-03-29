import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavCr from './components/Nav'
import Home from './screens/Home/Home'
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import WorkSpace from './screens/WorkSpace/WorkSpace';

function App() {
  const [tab, setTab] = useState({tab: "HOME"})
  const changeTab = tab => {
    setTab({tab: tab})
  }
  return (
    <div className="App">
    <NavCr  tab={tab.tab} changeTab={changeTab}/>
    {tab.tab === "HOME" &&<Home tab={tab.tab}/>}
    {tab.tab === "LOGIN" &&<Login changeTab={changeTab}/>}
    {tab.tab === "SIGNUP" &&<SignUp changeTab={changeTab}/>}
    {tab.tab === "WORKSPACE" &&<WorkSpace  tab={tab.tab} changeTab={changeTab}/>}
    </div>
  );
}

export default App;
