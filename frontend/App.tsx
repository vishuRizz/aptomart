import { useWallet } from "@aptos-labs/wallet-adapter-react";
import Layout from "./Layout";
import VendorPage from "./pages/VendorPage";
import ProductListPage from "./pages/ProductListPage";
import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductDetailPage from "./pages/ProductDetailPage";

import FullPaymentPage from "./pages/FullPaymentPage";


function App() {
  const { connected } = useWallet();

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Route for Welcome Page */}
          <Route
            path="/"
            element={connected ? <Navigate to="/vendors" /> : <WelcomePage />}
          />

          {/* Conditionally render VendorPage if wallet is connected */}
          <Route
            path="/vendors"
            element={connected ? <VendorPage /> : <Navigate to="/" />}
          />

          {/* Route for ProductListPage with dynamic vendor name */}
          <Route path="/vendors/:vendorName" element={<ProductListPage />} />

          {/* Route for ProductDetailPage with dynamic product name */}
          <Route path="/vendors/:vendorName/:productName" element={<ProductDetailPage />} />

          {/* Route for Full Payment Page with dynamic vendor name and product name */}
          <Route path="/vendors/:vendorName/:productName/full-payment" element={<FullPaymentPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;