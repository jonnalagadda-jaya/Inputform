//import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
 import JobApplication from './components/JobApplication';
//import MultipleInput from './components/MultipleInput';
// import ReactRouter from './components/ReactRouter';
// import About from './components/About';
// import Contact from './components/Contact';
// import Product from './components/Products';
// import UserList from './users/Userlist';
// import UserDetails from './users/DetailsComponent';
 //import InputForm from './components/InputForm';

function App() {
  return (
  //  <BrowserRouter>
  //  <div>
  //   <ReactRouter />
  //   {/* <UserList /> */}
  //    <Routes>
  //   <Route path="/about" element={<About />}/>
  //   <Route path="/contact" element={<Contact />}/>
  //   <Route path="/product" element={<Product />}/>
  //   <Route path="/userlist" element={<UserList />}/>
  //   <Route path="/userdetails/:id" element={<UserDetails />}/>
  //    </Routes>
  //    </div>
  //    </BrowserRouter>
  <div>
     {/* <InputForm />  */}
    {/* <MultipleInput /> */}
     <JobApplication /> 
  </div>
  );
}

export default App;
