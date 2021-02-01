import React from 'react'
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import About from '../components/About';
import GallerySmall from '../components/GallerySmall';
import Programs from '../components/Programs';
import Foods from '../components/Foods';
import CTA from '../components/CTA';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <div>
            <section>
                <Navigation />
                <Header />
                <About />
                <GallerySmall />
                <Programs />
                <Foods />
                <CTA />
                <Gallery />
                <Footer />
            </section>
            
        </div>
    )
}

export default Home
