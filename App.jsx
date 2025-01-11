import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import ProtectedRoute from './components/Shared/ProtectedRoute';
import LoginPage from './components/Auth/LoginPage';
import SignupPage from './components/Auth/SignupPage';
import SellerDashboard from './components/Seller/SellerDashboard';
import ProductUploadForm from './components/Seller/ProductUploadForm';
import ProductEditForm from './components/Seller/ProductEditForm';
import ProductListForSeller from './components/Seller/ProductListForSeller';
import Inbox from './components/Seller/Inbox';
import BuyerDashboard from './components/Buyer/BuyerDashboard';
import ProductList from './components/Buyer/ProductList';
import AuthContextProvider from './context/AuthContext';
import './styles/global.css';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />

              {/* Buyer Routes */}
              <Route
                path="/buyer/dashboard"
                element={
                  <ProtectedRoute role="buyer">
                    <BuyerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/buyer/products"
                element={
                  <ProtectedRoute role="buyer">
                    <ProductList />
                  </ProtectedRoute>
                }
              />

              {/* Seller Routes */}
              <Route
                path="/seller/dashboard"
                element={
                  <ProtectedRoute role="seller">
                    <SellerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/seller/products"
                element={
                  <ProtectedRoute role="seller">
                    <ProductListForSeller />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/seller/products/create"
                element={
                  <ProtectedRoute role="seller">
                    <ProductUploadForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/seller/products/edit/:id"
                element={
                  <ProtectedRoute role="seller">
                    <ProductEditForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/seller/inbox"
                element={
                  <ProtectedRoute role="seller">
                    <Inbox />
                  </ProtectedRoute>
                }
              />

              {/* Catch-All Route */}
              <Route path="*" element={<div>404: Page Not Found</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
