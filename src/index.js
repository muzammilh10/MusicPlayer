import React from 'react';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from "react-router-dom";

import { render } from "react-dom";

const root = document.getElementById("root");
render(<BrowserRouter>
    <App />
</BrowserRouter>, root);

