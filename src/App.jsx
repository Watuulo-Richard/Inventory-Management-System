import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/products/NotFoundPage";
import UserLogin from "./components/UserLogin";
import UserRegistration from "./components/UserRegistration";
import ContactPage from "./pages/ContactPage";
import ProductList from "./pages/products/ProductList";
import AdminDashboard from "./components/AdminDashboard";
import StockReport from "./components/StockReport";
import OrdersList from "./components/OrdersList";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/stockstatus" element={<StockReport />} />
        <Route path="/register" element={<UserRegistration/>} />
        <Route index element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/orders" element={<OrdersList />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
