import React, { useState } from 'react';
import './App.css';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaRocket, FaHeartbeat, FaLock, FaEnvelope, FaUser } from 'react-icons/fa';
import Stethoscope3D from './components/Stethoscope3D';  // Assuming you have a 3D Stethoscope component

function App() {
  const [lang,setLang]=useState(false)
  return (
    <>
  {lang==false ? (

<div className="app">
<nav className="navbar">
  <div className="logo">TikaTracker</div>
  <ul className="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
<button onClick={()=>setLang(!lang)} className='sexy-button'>हिंदी</button>
<div className="hero-container" id="home">
  {/* 3D Stethoscope Interaction */}
  <div className="stethoscope-container">
    <Stethoscope3D />
  </div>

  {/* Floating SVGs */}
  <img src="r3d.png" alt="stethoscope" className="floating-svg top-left mt-52 " />
  <img src="inj.png" alt="data" className="floating-svg-1 bottom-right" />

  {/* Title Section with Animation */}
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="title"
  >
    Ready to take control of your healthcare data?
  </motion.h1>

  <motion.p 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="quote"
  >
    Empowering lives through smart, secure, and synced healthcare.
  </motion.p>

  {/* Call-to-Action Button */}
  <motion.a 
    href="#features"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="cta-button"
  >
    Get Started
  </motion.a>

  {/* Tilt Effect for the card */}
  <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} className="tilt-card">
    <motion.div
      className="glass-card"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
    >
      <h2>Smart Health Record System</h2>
      <p>Secure | Lightweight | Sync-Ready</p>
    </motion.div>
  </Tilt>
</div>

{/* Features Section */}
<section id="features" className="features">
  <div className="feature-box">
    <FaRocket size={32} />
    <h3>Fast Access</h3>
    <p>Instant retrieval and syncing of medical records.</p>
  </div>
  <div className="feature-box">
    <FaLock size={32} />
    <h3>Encrypted</h3>
    <p>Privacy-focused architecture with full encryption.</p>
  </div>
  <div className="feature-box">
    <FaHeartbeat size={32} />
    <h3>Patient-Centric</h3>
    <p>Empowering patients through real-time data control.</p>
  </div>
</section>

{/* About Section */}
<section id="about" className="about-section">
  <h2>About Us</h2>
  <p>
    TikaTracker is a futuristic health records system designed to simplify how patients and doctors manage, share, and interact with medical information securely and in real-time.
  </p>
  <p>
    Our mission is to decentralize access while keeping privacy and speed at the core.
  </p>
</section>

{/* Contact Section */}
<section id="contact" className="contact-section">
  <h2>Contact Us</h2>
  <form className="contact-form">
    <div className="input-group">
      <FaUser />
      <input type="text" placeholder="Your Name" required />
    </div>
    <div className="input-group">
      <FaEnvelope />
      <input type="email" placeholder="Your Email" required />
    </div>
    <textarea placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>

<footer className="footer">
  <p>&copy; 2025 TikaTracker. All rights reserved.</p>
</footer>
</div>



  ) : (

<div className="app">
      <nav className="navbar">
        <div className="logo">TikaTracker</div>
        <ul className="nav-links">
          <li><a href="#home">होम </a></li>
          <li><a href="#features">खास बातें</a></li>
          <li><a href="#about">हमारे बारे में</a></li>
          <li><a href="#contact">संपर्क करें</a></li>
        </ul>
      </nav>
      <button onClick={()=>setLang(!lang)} className='sexy-button'>English</button>
      <div className="hero-container" id="home">
        {/* 3D Stethoscope Interaction */}
        <div className="stethoscope-container">
          <Stethoscope3D />
        </div>

        {/* Floating SVGs */}
        <img src="r3d.png" alt="stethoscope" className="floating-svg top-left mt-52 " />
        <img src="inj.png" alt="data" className="floating-svg-1 bottom-right" />

        {/* Title Section with Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="title"
        >
          क्या आप अपने स्वास्थ्य डेटा पर नियंत्रण के लिए तैयार हैं?
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="quote"
        >
          स्मार्ट, सुरक्षित और जुड़ी हुई स्वास्थ्य सेवा से ज़िंदगियों को बेहतर बनाना।
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a 
          href="#features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="cta-button"
        >
           शुरू करें
        </motion.a>

        {/* Tilt Effect for the card */}
        <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} className="tilt-card">
          <motion.div
            className="glass-card"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <h2>स्मार्ट हेल्थ रिकॉर्ड सिस्टम</h2>
            <p>सुरक्षित | हल्का | तैयार सिंक के लिए</p>
          </motion.div>
        </Tilt>
      </div>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="feature-box">
          <FaRocket size={32} />
          <h3>तेज़ एक्सेस</h3>
          <p>आपके मेडिकल रिकॉर्ड्स को तुरंत एक्सेस और सिंक करने की सुविधा।</p>
        </div>
        <div className="feature-box">
          <FaLock size={32} />
          <h3>सुरक्षित </h3>
          <p>आपकी जानकारी पूरी तरह से प्राइवेट और एन्क्रिप्टेड रहती है।</p>
        </div>
        <div className="feature-box">
          <FaHeartbeat size={32} />
          <h3>रोगी-केंद्रित</h3>
          <p>मरीजों को उनके डेटा पर पूरा कंट्रोल देना – तुरंत और आसान तरीके से।</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>हमारे बारे में</h2>
        <p>
        TikaTracker एक आधुनिक हेल्थ रिकॉर्ड सिस्टम है, जो मरीजों और डॉक्टरों के लिए मेडिकल जानकारी को आसानी से संभालने, शेयर करने और सुरक्षित तरीके से रियल-टाइम में एक्सेस करने के लिए बनाया गया है।


        </p>
        <p>
          हमारा उद्देश्य है कि हर किसी को तेज़ और प्राइवेट एक्सेस मिले – बिना किसी रुकावट के।
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>संपर्क करें</h2>
        <form className="contact-form">
          <div className="input-group">
            <FaUser />
            <input type="text" placeholder="आपका नाम " required />
          </div>
          <div className="input-group">
            <FaEnvelope />
            <input type="email" placeholder="आपका ईमेल" required />
          </div>
          <textarea placeholder="संदेश भेजें" rows="5" required></textarea>
          <button type="submit">संदेश भेजें</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2025 TikaTracker. All rights reserved.</p>
      </footer>
    </div>

  )}

    </>
  );
}

export default App;
