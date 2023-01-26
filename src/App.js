/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// import {
//   Route, Routes, useHistory,
// } from 'react-router-dom';
// import AllFiles from './components/pages/allFiles/AllFiles';
// import DeletedFiles from './components/pages/deletedFiles/DeletedFiles';
// import FileRequests from './components/pages/fileRequests/FileRequest';
// import Home from './components/pages/home/Home';
// import Photos from './components/pages/photos/Photos';
// import Recents from './components/pages/recents/Recents';
// import Shared from './components/pages/shared/Shared';
// import Signatures from './components/pages/signatures/Signatures';
// import Starred from './components/pages/starred/Starred';
import Navigation from './components/partials/navigation/Navigation';
import Header from './components/partials/header/Header';

import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <Navigation />
    </main>

  );
}

export default App;
