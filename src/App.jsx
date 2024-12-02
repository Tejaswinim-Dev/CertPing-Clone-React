import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import WhySsl from './components/whySsl/WhySsl';
import SignUp from './components/login/SignUp';
import Login from './components/login/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/whySsl' Component={WhySsl}/>
        <Route path='/signup' Component={SignUp} />
        <Route path='/login' Component={Login} />
      </Routes>
    </Router>
  )
}

export default App

