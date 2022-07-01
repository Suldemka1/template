import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import MobileHeader from "../components/mobile-header";
import container from '../styles/container.module.css'

export default function Contacts() {
  return (
    <>
      <Header />
      <MobileHeader />
      <div className={container.container}>
        <h1>Контакты</h1>
        
      </div>
      <Footer />
    </>
  )
}