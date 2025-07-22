import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import FindPasswordPage from './pages/FindPasswordPage'
import FindUsernamePage from './pages/FindUsernamePage'
import HomePage from './pages/HomePage'
import MyPage from './pages/MyPage'
import OrderCompletePage from './pages/OrderCompletePage'
import OrderHistoryPage from './pages/OrderHistoryPage'
import OrderPage from './pages/OrderPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import SignUpCompletePage from './pages/SignUpCompletePage'
import SignUpPage from './pages/SignUpPage'
import TermsPage from './pages/TermsPage'



function App() {

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'manifest'
    link.href = '/manifest.json'
    document.head.appendChild(link)
  }, [])


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/find-id" element={<FindUsernamePage />} />
        <Route path="/find-password" element={<FindPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup/complete" element={<SignUpCompletePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order/complete" element={<OrderCompletePage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/terms" element={<	TermsPage />} />
      </Routes>
    </>
  )
}

export default App
