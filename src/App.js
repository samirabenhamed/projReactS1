import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from 'use-shopping-cart';

import Menu from './Menu';
import Home from './Home';
import Listceintures from './components/Listceintures';
import AddSac from './components/AddSac';
import AddCeinture from './components/AddCeinture';
import EditSac from './components/EditSac';
import EditCeinture from './components/EditCeinture';
import Listsacs from './components/Listsacs';
import ListSacCards from './components/clientSide/ListSacCards';
import ListCentureCards from './components/clientSide/ListCentureCards';
import Cart from './components/clientSide/Cart';
import LoginClient from './components/authentificationClient/LoginClient';
import PdfCart from './components/clientSide/PdfCart';


function App() {
  return (
    <CartProvider>
      <Router>
        <Menu />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/ceinture" element={<Listceintures />} />
          <Route path="/AddSac" element={<AddSac />} />
          <Route path="/AddCeinture" element={<AddCeinture />} />
          <Route path="/EditSac/:id" element={<EditSac />} />
          <Route path="/EditCeinture/:id" element={<EditCeinture />} />
          <Route path="/listsacs" element={<Listsacs />} />
          <Route path="/listesac" element={<ListSacCards />} />
          <Route path="/listeceinture" element={<ListCentureCards />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" exact element={<LoginClient />} />

          <Route path="/pdfCart" element={<PdfCart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
