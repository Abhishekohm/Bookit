import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/Login.js"
import Register from "./components/Register";
import Layout from './components/Layout.js';
import RequireLogin from './components/RequireLogin.js';
import Home from './components/Home.js';
import Open from './components/Open.js';
import PersistLogin from './components/PersistantLogin.js';
import LoggedIn from './components/LoggedIn.js';
import Protected from './components/Protected.js'
import FacultyAddForm from './components/FacultyAddForm.js';
import CreateEventForm from './components/CreateEventForm.js';
import SideBar_Header_Community from './components/SideBar_Header_Community.js';

import SideBar_Header_Faculty from './components/SideBar_Header_Faculty.js';
import EventCard from './components/EventCard.js';
import EventCreateSuccess from './components/EventCreateSuccess.js';
import StudentRegSuccess from './components/StudentRegSuccess.js';
import Dashboard from './components/Dashboard.js';

function App() {

  return (
    <Routes>
      {/* <Route exact path='/' element={<SideBar_Header_Faculty />} /> */}
      {/* <Route element={<PersistLogin />}>
        <Route element={<LoggedIn />}>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
        </Route>
        <Route exact path={'/events/create'} element={<CreateEventForm />} />
        <Route exact path="/" element={<Home />} />
        <Route element={<RequireLogin />}>
          Keep protected route here
          <Route exact path="/protected" element={<Protected />} />
        </Route>
      </Route> */}
      <Route element={<Login />} path="/login" />
      <Route element={<RequireLogin />}>
        {/* Keep protected route here */}
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path={'/events/create'} element={<CreateEventForm />} />
      </Route>
    </Routes >
  );
}

export default App;