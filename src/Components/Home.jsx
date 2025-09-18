// import React from 'react'
// import ChatInterface from './chatInterface';
// import { Routes, Route, Link } from 'react-router-dom';
// import DocsPage from '../Docs/DocsPage';
// import VideoPlayer from '../public/videos/VideoPlayer';
// import Logo from '../src/assets/Logo.png'
// import Faqs from './faq';
// import './footer.css';
// import './Home.css'

// const Home = () => {
//     return (
//         <>
//             <div className="home-page" style={{ fontFamily: 'Helvetica', backgroundColor: '#121c22', color: '#d1d5db' }}>
//                 {/* <div style={logo}>
//                     <img src={Logo} alt="" srcset="" />
//                 </div>

//                 <div style={welcome}>
//                     <h1 style={{ padding: '20px',fontWeight:'700', fontSize: '3rem'}}>Welcome to FlowChat</h1>
//                     <p style={{ padding: '5px', fontSize: '1.1rem' }}>Your AI-powered ocean intelligence assistant 🌊</p>

//                     <div style={cta} className="cta-container">
//                         <Link to="/chat" className="cta-button">
//                             <button style={btn}>Get Start</button>
//                         </Link>
//                         <Link to="/docs"  >
//                             <button style={doc_btn} className="btn">Docs</button>
//                         </Link>
//                     </div>
//                 </div> */}

//             <section
//                 style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     minHeight: "100vh",
//                     backgroundColor: "#0B0F14",
//                     padding: "0 24px",
//                 }}
//             >
//                 <div
//                     style={{
//                         maxWidth: "1200px",
//                         width: "100%",
//                         display: "grid",
//                         gridTemplateColumns: "1fr 1fr",
//                         gap: "48px",
//                         alignItems: "center",
//                     }}
//                 >
//                     {/* Left Column */}
//                     <div>
//                         <h1
//                             style={{
//                                 fontSize: "56px",
//                                 fontWeight: "800",
//                                 color: "white",
//                                 lineHeight: "1.2",
//                                 marginBottom: "24px",
//                             }}
//                         >
//                             Welcome to <span style={{ color: "#60A5FA" }}>FlowChat</span>
//                         </h1>
//                         <p
//                             style={{
//                                 fontSize: "18px",
//                                 color: "#D1D5DB",
//                                 maxWidth: "480px",
//                                 marginBottom: "32px",
//                             }}
//                         >
//                             FlowChat — Your ocean data intelligence platform. Unlock marine
//                             insights with AI-powered analysis.
//                         </p>

//                         {/* Buttons */}
//                         <div style={{ display: "flex", gap: "16px" }}>
//                             <button
//                                 style={{
//                                     padding: "14px 28px",
//                                     fontSize: "16px",
//                                     borderRadius: "12px",
//                                     backgroundColor: "#3B82F6",
//                                     color: "white",
//                                     border: "none",
//                                     cursor: "pointer",
//                                 }}
//                             >
//                                 Get Started
//                             </button>
//                             <button
//                                 style={{
//                                     padding: "14px 28px",
//                                     fontSize: "16px",
//                                     borderRadius: "12px",
//                                     backgroundColor: "transparent",
//                                     border: "2px solid #60A5FA",
//                                     color: "#60A5FA",
//                                     cursor: "pointer",
//                                 }}
//                             >
//                                 Docs
//                             </button>
//                         </div>
//                     </div>

//                     {/* Right Column */}
//                     <div style={{ display: "flex", justifyContent: "center" }}>
//                         <img
//                             src={Logo} // replace with your logo/illustration path
//                             alt="FlowChat Logo"
//                             style={{
//                                 width: "280px",
//                                 filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.4))",
//                             }}
//                         />
//                     </div>
//                 </div>
//             </section>


//             <div id='first'>
//                 <div style={how}>
//                     <div className='c'>
//                         <div style={how2}> <h1>⚓Your Quick Start Path.</h1>
//                             <ul style={ul}>
//                                 <li style={li}>Lorem ipsum dolor sit amet.</li>
//                                 <li style={li}>Lorem ipsum dolor sit amet </li>
//                                 <li style={li}>Lorem ipsum dolor sit amet.</li>
//                                 <li style={li}>Lorem ipsum dolor sit amet.</li>
//                             </ul>

//                         </div>
//                     </div>
//                     <div className='demo'>
//                         <VideoPlayer />
//                     </div>
//                 </div>
//                 <div className='c'>
//                     <div style={work}> <h1>📍 How Our Chatbot Works</h1>
//                         <ul style={ul}>
//                             <li style={li}><b>Global ARGO Data Access  </b>– FlowChat uses real-time ARGO floats data collected from oceans worldwide.</li>
//                             <li style={li}><b>AI-Powered Understanding  </b>– The chatbot interprets user questions intelligently, understanding context and intent.</li>
//                             <li style={li}><b>Easy-to-Understand Answers  </b>– Converts complex oceanographic data into simple, clear, and actionable responses.</li>
//                             <li style={li}><b>Interactive Conversation  </b>– Users can ask follow-up questions, and FlowChat maintains context for continuous dialogue.</li>
//                             <li style={li}><b>Instant Data Retrieval </b> – Quickly fetches relevant data from thousands of ARGO float measurements.</li>
//                         </ul>

//                     </div>
//                 </div>

//             </div>
//             <div className="faq">
//                 <Faqs />
//             </div>
//         </div >
//         </>
//     )
// }
// const welcome = {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column',
//     justifyContent: 'center',


// };


// const btn = {
//     marginTop: '15px',
//     // padding: '12px 18px',
//     // boxShadow: "inset 0 -2px 6px rgba(0,0,0,0.4)", // inside shadow
//     // cursor: "pointer",
//     // border: 'none',
//     // outline: 'none',
//     // backgroundColor: 'lightblue',
//     // borderRadius: '18px',
//     // cursor: 'pointer',
//     // fontFamily: 'sans-serif',
//     // fontWeight: '600',
//     // fontSize: '18px',

//     padding: '12px 24px',
//     borderRadius: ' 30px',
//     fontWeight: '600',
//     border: 'none',
//     cursor: 'pointer',
//     background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
//     color: 'white',
//     transition: 'transform 0.2s, box-shadow 0.2s'
// };

// const doc_btn = {
//     marginTop: '15px',
//     marginLeft: '10px',
//     // padding: '12px 18px',
//     // boxShadow: "inset 0 -2px 6px rgba(0,0,0,0.4)", // inside shadow
//     // cursor: "pointer",
//     // border: 'none',
//     // outline: 'none',
//     // backgroundColor: 'lightblue',
//     // borderRadius: '18px',
//     // cursor: 'pointer',
//     // fontFamily: 'sans-serif',
//     // fontWeight: '600',
//     // fontSize: '18px',

//     padding: '12px 24px',
//     borderRadius: ' 30px',
//     fontWeight: '600',
//     border: 'none',
//     cursor: 'pointer',
//     background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
//     color: 'white',
//     transition: 'transform 0.2s, box-shadow 0.2s'
// }


// const logo = {
//     display: 'flex',
//     justifyContent: 'center'
// }

// const cta = {
//     display: 'flex',
//     gap: '2rem'
// }

// const how = {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '5rem',
//     margin: '0.5rem'
// }

// const how2 = {
//     padding: '0.3rem',
//     marginLeft: '2rem',
// }
// const work = {
//     padding: '0.3rem',
//     marginLeft: '2rem',

// }
// const ul = {
//     // justifyContent: 'center',
//     margin: '20px',
//     padding: '0',
//     listStyleType: 'disc', // or 'none' if you want no bullets
// };

// const li = {
//     marginBottom: '10px', // 10px gap between items
// };

// export default Home


import React from 'react'
import { Link } from 'react-router-dom';
import DocsPage from '../../Docs/DocsPage';
import VideoPlayer from '../../public/videos/VideoPlayer';
import logo2 from '../assets/logo2.png';
import Faqs from './faq';
import './footer.css';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="home-page" style={{ fontFamily: 'Helvetica, sans-serif', backgroundColor: '#060c06', color: '#d1d5db', boxSizing : 'border-box' , width : '100vw' }}>

                {/* HERO SECTION */}
                <section
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: "100vh",
                        backgroundColor: "#060c06",
                        padding: "0 24px",
                        // boxShadow: '0 2px 30px rgba(255, 255, 255, 0.1)',

                    }}
                >
                    <div
                        style={{
                            maxWidth: "1200px",
                            width: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "48px",
                            alignItems: "center",
                        }}
                    >
                        {/* Left Column */}
                        <div>
                            <h1
                                style={{
                                    fontSize: "56px",
                                    fontWeight: "800",
                                    color: "white",
                                    lineHeight: "1.2",
                                    marginBottom: "24px",
                                }}
                            >
                                Welcome to <span style={{ color: "#60A5FA" }}>FlowChat</span>
                            </h1>
                            <p
                                style={{
                                    fontSize: "18px",
                                    color: "#D1D5DB",
                                    maxWidth: "480px",
                                    marginBottom: "32px",
                                }}
                            >
                                FlowChat — Your ocean data intelligence platform. Unlock marine
                                insights with AI-powered analysis.
                            </p>

                            {/* Buttons */}
                            <div style={{ display: "flex", gap: "16px" }}>
                                <Link to="/chat">
                                    <button style={btn}>Get Started</button>
                                </Link>
                                <Link to="/docs">
                                    <button style={doc_btn}>Docs</button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img
                                src={logo2}
                                alt="FlowChat Logo"
                                style={{
                                    width: "280px",
                                    filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.4))",
                                }}
                            />
                        </div>
                    </div>
                </section>

                {/* QUICK START SECTION */}
                <section
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "80px 24px",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "48px",
                        alignItems: "center",
                    }}
                >
                    {/* Text */}
                    <div>
                        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "24px" }}>
                            ⚓ Your Quick Start Path
                        </h2>
                        <ul style={ul}>
                            <li style={li}>Sign in and access FlowChat instantly.</li>
                            <li style={li}>Ask questions in plain language.</li>
                            <li style={li}>Explore global ARGO float datasets.</li>
                            <li style={li}>Get clear, AI-driven insights.</li>
                        </ul>
                    </div>

                    {/* Demo Video */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <VideoPlayer />
                    </div>
                </section>

                {/* HOW IT WORKS SECTION */}
                <section
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "80px 24px",
                    }}
                >
                    <div>
                        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "32px" }}>
                            📍 How Our Chatbot Works
                        </h2>
                        <ul style={ul}>
                            <li style={li}><b>Global ARGO Data Access</b> – FlowChat uses real-time ARGO floats data collected from oceans worldwide.</li>
                            <li style={li}><b>AI-Powered Understanding</b> – Interprets user questions intelligently, understanding context and intent.</li>
                            <li style={li}><b>Easy-to-Understand Answers</b> – Converts complex oceanographic data into clear, actionable insights.</li>
                            <li style={li}><b>Interactive Conversation</b> – Maintains context so you can ask follow-up questions naturally.</li>
                            <li style={li}><b>Instant Data Retrieval</b> – Quickly fetches relevant data from thousands of ARGO float measurements.</li>
                        </ul>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section style={{ backgroundColor: "#060c06", padding: "80px 24px" }}>
                    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "32px", textAlign: "center" }}>
                            ❓ Frequently Asked Questions
                        </h2>
                        <Faqs />
                    </div>
                </section>
            </div>
        </>
    )
}

// BUTTONS
const btn = {
    padding: '12px 24px',
    borderRadius: '30px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
    color: 'white',
    transition: 'transform 0.2s, box-shadow 0.2s',
};

const doc_btn = {
    padding: '12px 24px',
    borderRadius: '30px',
    fontWeight: '600',
    border: '2px solid #60A5FA',
    cursor: 'pointer',
    background: 'transparent',
    color: '#60A5FA',
    transition: 'transform 0.2s, box-shadow 0.2s',
};

// LIST STYLES
const ul = {
    margin: '20px',
    padding: '0',
    listStyleType: 'disc',
};

const li = {
    marginBottom: '12px',
    fontSize: '16px',
    lineHeight: '1.6',
};

export default Home;
