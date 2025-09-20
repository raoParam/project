import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "../../public/videos/VideoPlayer";
import logo2 from "../assets/logo2.png";
import Faqs from "./Faq.jsx";

const Home = () => {
  return (
    <>
      <style>{`
        :root {
          --primary-dark: #051014;
          --primary-blue: #06b6d4;
          --primary-blue-light: #3b82f6;
          --accent-teal: #0ea5e9;
          --accent-purple: #8b5cf6;
          --text-light: #e2e8f0;
          --text-white: #ffffff;
          --card-bg: rgba(5, 16, 20, 0.85);
          --gradient-blue: linear-gradient(135deg, var(--primary-blue), var(--accent-purple));
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', 'Helvetica', sans-serif;
          overflow-x: hidden;
          background-color: var(--primary-dark);
        }

        .home-page {
          color: var(--text-light);
          width: 100%;
          overflow-x: hidden;
          position: relative;
        }

        /* Enhanced Water Animation Background */
        .water-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0.2;
          overflow: hidden;
        }

        .water-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 18em;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.35' fill='%2306b6d4'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%233b82f6'/%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%238b5cf6'/%3E%3C/svg%3E");
          background-size: 100% 100%;
          transform-origin: bottom center;
          animation: wave 15s linear infinite;
        }

        .water-wave:nth-child(2) {
          animation: wave 18s linear infinite 0.5s;
          opacity: 0.6;
          height: 15em;
        }

        .water-wave:nth-child(3) {
          animation: wave 20s linear infinite 0.7s;
          opacity: 0.4;
          height: 12em;
        }

        @keyframes wave {
          0% {
            transform: translateX(0) scaleY(1);
          }
          50% {
            transform: translateX(-25%) scaleY(0.95);
          }
          100% {
            transform: translateX(-50%) scaleY(1);
          }
        }

        /* Particle Animation */
        .particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          background: rgba(6, 182, 212, 0.3);
          border-radius: 50%;
          animation: float 15s infinite linear;
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100vw) rotate(360deg);
            opacity: 0;
          }
        }

        /* HERO SECTION */
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
          position: relative;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 30%),
                      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 30%);
          z-index: -1;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1200px;
          width: 100%;
          gap: 4rem;
          align-items: center;
        }

        .hero-text h1 {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 800;
          color: var(--text-white);
          line-height: 1.2;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--text-white) 0%, var(--primary-blue) 30%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.3));
        }

        .hero-text p {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          max-width: 500px;
          margin-bottom: 2.5rem;
          color: var(--text-light);
          line-height: 1.6;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .btn-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1.2rem;
        }

        .btn-primary {
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          background: var(--gradient-blue);
          color: var(--text-white);
          transition: all 0.3s ease;
          box-shadow: 0 6px 12px rgba(6, 182, 212, 0.3);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, var(--accent-purple), var(--primary-blue));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(6, 182, 212, 0.4);
        }

        .btn-primary:hover::before {
          opacity: 1;
        }

        .btn-outline {
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 600;
          border: 2px solid var(--primary-blue);
          cursor: pointer;
          background: transparent;
          color: var(--primary-blue);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .btn-outline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--primary-blue);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .btn-outline:hover {
          color: var(--text-white);
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(6, 182, 212, 0.3);
        }

        .btn-outline:hover::before {
          opacity: 1;
        }

        .hero-logo {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .hero-logo img {
          width: 100%;
          max-width: 380px;
          height: auto;
          filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.4));
          animation: float-logo 8s ease-in-out infinite;
        }

        @keyframes float-logo {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        /* QUICK START SECTION */
        .quick-start {
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }

        .quick-start h2 {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          margin-bottom: 2.5rem;
          color: var(--text-white);
          background: var(--gradient-blue);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .quick-start ul {
          list-style: none;
        }

        .quick-start li {
          margin-bottom: 20px;
          font-size: 1.15rem;
          line-height: 1.6;
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 15px 20px;
          background: var(--card-bg);
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(6, 182, 212, 0.1);
        }

        .quick-start li:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(6, 182, 212, 0.2);
        }

        .quick-start li:before {
          content: "➤";
          color: var(--primary-blue);
          font-weight: bold;
          font-size: 1.2rem;
          line-height: 1;
          flex-shrink: 0;
        }

        /* HOW IT WORKS SECTION */
        .how-it-works {
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 24px;
          position: relative;
        }

        .how-it-works::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100vw;
          height: 100%;
          background: linear-gradient(180deg, rgba(5, 16, 20, 0) 0%, rgba(6, 182, 212, 0.08) 100%);
          z-index: -1;
        }

        .how-it-works h2 {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          margin-bottom: 3.5rem;
          text-align: center;
          color: var(--text-white);
          background: var(--gradient-blue);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .how-it-works ul {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .how-it-works li {
          background: var(--card-bg);
          padding: 30px;
          border-radius: 20px;
          border-left: 5px solid var(--primary-blue);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
        }

        .how-it-works li:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(6, 182, 212, 0.25);
        }

        .how-it-works b {
          color: var(--primary-blue);
          display: block;
          margin-bottom: 15px;
          font-size: 1.25rem;
          font-weight: 600;
        }

        /* FAQ SECTION */
        .faq {
          padding: 120px 24px;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .faq h2 {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700;
          margin-bottom: 3.5rem;
          color: var(--text-white);
          background: var(--gradient-blue);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1024px) {
          .hero-grid,
          .quick-start {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }

          .hero-text {
            order: 2;
          }

          .hero-logo {
            order: 1;
          }

          .btn-group {
            justify-content: center;
          }
          
          .quick-start {
            padding: 100px 24px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 1.5rem;
          }

          .quick-start,
          .how-it-works,
          .faq {
            padding: 80px 16px;
          }

          .btn-primary,
          .btn-outline {
            width: 100%;
            text-align: center;
          }

          .how-it-works ul {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-text h1 {
            font-size: 2.5rem;
          }

          .quick-start h2,
          .how-it-works h2,
          .faq h2 {
            font-size: 2rem;
          }

          .quick-start li,
          .how-it-works li {
            font-size: 1rem;
          }
          
          .btn-group {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="home-page">
        {/* Enhanced Water Animation Background */}
        <div className="water-background">
          <div className="water-wave"></div>
          <div className="water-wave"></div>
          <div className="water-wave"></div>
        </div>

        {/* Particle Animation */}
        <div className="particles">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${Math.random() * 20 + 15}s`,
              }}
            ></div>
          ))}
        </div>

        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-text">
              <h1>
                Welcome to <span className="highlight">FlowChat</span>
              </h1>
              <p>
                FlowChat — Your ocean data intelligence platform. Unlock marine
                insights with AI-powered analysis and visualization of global ARGO float data.
              </p>
              <div className="btn-group">
                <Link to="/chat">
                  <button className="btn-primary">Get Started</button>
                </Link>
                <Link to="/docs">
                  <button className="btn-outline">Documentation</button>
                </Link>
              </div>
            </div>
            <div className="hero-logo">
              <img src={logo2} alt="FlowChat Logo" />
            </div>
          </div>
        </section>

        {/* QUICK START */}
        <section className="quick-start">
          <div className="quick-text">
            <h2>⚓ Your Quick Start Guide</h2>
            <ul>
              <li>Sign in and access FlowChat instantly with secure authentication</li>
              <li>Ask questions about ocean data in plain language</li>
              <li>Explore global ARGO float datasets with intuitive visualizations</li>
              <li>Get clear, AI-driven insights about marine environments</li>
            </ul>
          </div>
          <div className="quick-video">
            <VideoPlayer />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-it-works">
          <h2>📍 How FlowChat Works</h2>
          <ul>
            <li>
              <b>Global ARGO Data Access</b>
              FlowChat uses real-time ARGO floats data collected from oceans worldwide, updated daily with thousands of new measurements.
            </li>
            <li>
              <b>AI-Powered Understanding</b>
              Our advanced algorithms interpret user questions intelligently, understanding context, intent, and oceanography terminology.
            </li>
            <li>
              <b>Easy-to-Understand Answers</b>
              We convert complex oceanographic data into clear, actionable insights with visualizations anyone can understand.
            </li>
            <li>
              <b>Interactive Conversation</b>
              Maintains context throughout your session so you can ask follow-up questions naturally without repetition.
            </li>
            <li>
              <b>Instant Data Retrieval</b>
              Quickly fetches relevant data from thousands of ARGO float measurements across all ocean basins in seconds.
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="faq">
          <h2>❓ Frequently Asked Questions</h2>
          <Faqs />
        </section>
      </div>
    </>
  );
};

export default Home;
