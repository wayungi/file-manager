import React from 'react';
import {
  Route, Routes, NavLink, BrowserRouter,
} from 'react-router-dom';
import AllFiles from '../../pages/allFiles/AllFiles';
import DeletedFiles from '../../pages/deletedFiles/DeletedFiles';
import FileRequests from '../../pages/fileRequests/FileRequest';
import Home from '../../pages/home/Home';
import Photos from '../../pages/photos/Photos';
import Recents from '../../pages/recents/Recents';
import Shared from '../../pages/shared/Shared';
import Signatures from '../../pages/signatures/Signatures';
import Starred from '../../pages/starred/Starred';
import Missing from '../../pages/Missing/Missing';

const Navigation = () => (
  <section>
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allfiles">All files</NavLink>
        <NavLink to="/recents">Recents</NavLink>
        <NavLink to="/starred">Starred</NavLink>
        <NavLink to="/photos">Photos</NavLink>
        <NavLink to="/signatures">Signatures</NavLink>
        <NavLink to="/shared">Shared</NavLink>
        <NavLink to="/filerequests">File requests</NavLink>
        <NavLink to="/deletedfiles">Deleted files</NavLink>
      </nav>
      <Routes>
        <Route path="/allfiles" element={<AllFiles />} />
        <Route path="/deletedfiles" element={<DeletedFiles />} />
        <Route path="/filerequests" element={<FileRequests />} />
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/recents" element={<Recents />} />
        <Route path="/shared" element={<Shared />} />
        <Route path="/signatures" element={<Signatures />} />
        <Route path="/starred" element={<Starred />} />
        {/* <Routes path="*" element={<Missing />} /> */}
      </Routes>
    </BrowserRouter>
  </section>
);

export default Navigation;
