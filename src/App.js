import "./App.css";
import React from "react";

import UsersList from "./components/UsersList/UsersList";
import UserProfiles from "./components/UserProfile/UserProfile";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Notfound from "./components/NotFound/NotFound";
import { UserPanel } from "./components/UserPanel/UserPanel";

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<UsersList />}/>
          <Route path='users' element={<UsersList />}/>
          <Route path='profile-card' element={<UserProfiles />}/>
          <Route path='users/info' element={<UserPanel />}/>
          <Route path="*" element={<Notfound /> }/>
        </Route>

      </Routes>
    </>
  
  );
}

export default App;