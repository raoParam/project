// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import DocsPage from '../Docs/DocsPage';
import ChatInterface from './Components/chatInterface';
import Layout from './Components/Layout';

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/chat" element={<ChatInterface />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
