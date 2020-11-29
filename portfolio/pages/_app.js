import App from 'next/app';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/index.scss';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/shared/Hero';

const apiCallRoot = async () =>{
  const data = await axios.get('https://reqres.in/api/users?page=2');
  return data;
}

const MyApp = ({ Component, pageProps }) => {

  return (
    <div className="portfolio-app">
      <Navbar />
      { Component.name === 'Home' && <Hero />}
      <div className="container">
        <div>{pageProps.appData}</div>
        <Component {...pageProps} />
      </div>
      { Component.name === 'Home' && <Footer/>}
      

    </div>
  )
}

MyApp.getInitialProps = async (context) => {
  
  //This block will call "getInitialProps" of rendering component
  const initialProps = App.getInitialProps && await App.getInitialProps(context);
  //console.log(initialProps)

  const response = await apiCallRoot();
  const dataFromAPi = response.data.support.url;


  return {
    pageProps: 
    {
      appData: dataFromAPi , 
      ...initialProps.pageProps  //uncomment console.log(initialProps) to see from where 'pageProps' came 
    }
  }
}

export default MyApp;
