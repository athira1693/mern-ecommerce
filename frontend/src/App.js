import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfilePage from './pages/user/UserProfilePage';
import UserOrdersPage from './pages/user/UserOrdersPage';
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminEditProductPage from './pages/admin/AdminEditUserPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage';
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage';
import AdminChatsPage from './pages/admin/AdminChatsPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent';
import AdminEditUserPage from './pages/admin/AdminEditUserPage';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import RoutesWithUserChatComponent from './components/user/RoutesWithUserChatComponent';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/product-list' element={<ProductListPage />} />
          <Route path='/product-details' element={<ProductDetailsPage />} />
          <Route path='/product-details/:id' element={<ProductDetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element='Page does not exist 404' />
        </Route>
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path='/user' element={<UserProfilePage />} />
          <Route path='/user/my-orders' element={<UserOrdersPage />} />
          <Route path='/user/cart-details' element={<UserCartDetailsPage />} />
          <Route
            path='/user/order-details'
            element={<UserOrderDetailsPage />}
          />
        </Route>
        //admin
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path='/admin/users' element={<AdminUsersPage />} />
          <Route path='/admin/edit-user' element={<AdminEditUserPage />} />
          <Route path='/admin/products' element={<AdminProductsPage />} />
          <Route
            path='/admin/create-new-product'
            element={<AdminCreateProductPage />}
          />
          <Route
            path='/admin/edit-product'
            element={<AdminEditProductPage />}
          />
          <Route path='/admin/orders' element={<AdminOrdersPage />} />
          <Route
            path='/admin/order-details'
            element={<AdminOrderDetailsPage />}
          />
          <Route path='/admin/chats' element={<AdminChatsPage />} />
          <Route path='/admin/analytics' element={<AdminAnalyticsPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
