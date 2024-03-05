import React , {useEffect} from 'react'
// import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/Home/header/Header'
import WhyChooseUs from '../../components/Home/WhyChooseUs/WhyChooseUs'
import WhyIndentaDSA from '../../components/Home/WhyIndentaDSA/WhyIndentaDSA'
import Careers from '../../components/Home/Careers/Careers'
import HomeVideo from '../../components/Home/HomeVideo/HomeVideo'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Indenta';
  }, []);
  return (
    <div>
      <Header />
      <WhyChooseUs />
      <WhyIndentaDSA />
      <Careers />
      <HomeVideo />
      <Footer />
    </div>
  )
}