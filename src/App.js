import React from 'react';
import './App.css';

import RatingComponent from 'reactjs-rating-component'

// Top Navigation
import {TopNav, TopNavItem} from 'reactjs-topnav-component'

// Tabbed Pane
import TabbedPaneComponent from 'reactjs-tabbedpane-component'

const portfolioData = {
  "contents": [
    {
      "subject": "PCCW Solutions",
      "text": "<ul><li>Provide production support for a HKSAR government system named <a href=\"https://www.rocars.gov.hk\" target=\"_blank\">ROCARS</a>.</li><li>As team lead of the application team, I collaborate with client to finalize User Requirements. Analyze and design to enhance system applications accordingly. Provide technical design specifications and documentations.</li><li>Lead the programmers to maintain the system software</li></ul>"
    },
    {
      "subject": "C2 Square",
      "text": "<ul><li>Involved in the software development of an online consolidation trading platform and a messaging system.</li><li>Analyze based on User Requirements and design system accordingly. Provide technical design specifications.</li><li>Lead the programmers to develop the web applications.</li></ul>"
    },
    {
      "subject": "FlexSystem",
      "text": "<ul><li>Revamped web application systems, which supports the weekly/daily operations of divisional companies of Sony Corporation of Hong Kong Ltd. using Java.</li></ul>"
    },
    {
      "subject": "Samvo",
      "text": "<ul><li>Develop online casino games supporting multiple players.</li><li>Revamp the Affiliate System to meet new user requirements.</li></ul>"
    },
    {
      "subject": "DB Power Online",
      "text": "<ul><li>Develop the desktop and mobile web sites, which can be managed by clients via customized content management system.</li><li>Solid experience in mining the ETF data from the web pages, Word documents and PDF files from the HKEx and ETF web sites</li></ul>"
    }
  ]
}

const linksData = {
  items: [
    {
      alt:  'GitHub',
      src:  './images/github.png',
      href: 'https://github.com/adafycheng'
    },
    {
      alt:  'GitLab',
      src:  './images/gitlab.png',
      href: 'https://gitlab.com/adafycheng'
    },
    {
      alt:  'LinkedIn',
      src:  './images/linkedin.png',
      href: 'https://linkedin.com/in/adafycheng'
    },
    {
      alt:  'stackoverflow',
      src:  './images/stackoverflow.png',
      href: 'https://stackoverflow.com/users/16432034/ada-cheng'
    },
    {
      alt:  'Twitter',
      src:  './images/twitter.png',
      href: 'https://twitter.com/adafycheng'
    },
    {
      alt:  'Google Developer',
      src:  './images/gdev.png',
      href: 'https://g.dev/adafycheng'
    },
    {
      alt:  'CodePen',
      src:  './images/codepen.png',
      href: 'https://codepen.io/adafycheng'
    },
    {
      alt:  'HashNode',
      src:  '/images/hashnode.png',
      href: 'https://adafycheng.hashnode.dev'
    },
    {
      alt:  'dev.to',
      src:  '/images/dev-black.png',
      href: 'https://dev.to/adafycheng'
    }
  ]
}

function App() {
    let pjson = require('../package.json');
    return (
        <div className="App">
            <TopNav navTitle="My Portfolio" links={linksData}>
              <TopNavItem href="#main">Home</TopNavItem>
              <TopNavItem href="#about">About</TopNavItem>
              <TopNavItem href="#portfolio">Portfolio</TopNavItem>
              <TopNavItem href="#contact">Contact</TopNavItem>
            </TopNav>
            <section id="main" className="container-fluid">
                <div className="d-flex align-items-center justify-content-center intro">
                    <div>
                        <h1>Hello, I'm <span className="introName">Ada Cheng</span>.</h1>
                        <p>I'm a Java Software Developer.</p>
                    </div>
                </div>
            </section>
            <section id="about" className="container-fluid content">
                <h2>About</h2>
                <div className="d-flex align-items-center justify-content-center intro">
                    <div className="row p-3 align-items-center">
                        <div className="col-md-4">
                            <svg width="300" height="300">
                                <defs>
                                    <mask id="mask">
                                        <circle fill="#FFFFFF" cx="150" cy="150" r="150"></circle>
                                    </mask>
                                </defs>
                                <image width="300" height="300" href="/images/adacheng2.jpg" mask="url(#mask)"></image>
                            </svg>
                        </div>
                        <div className="col-md-8">
                            <h3>I'm a Java Software Developer.</h3>

                            <p>In past 10 years, I mainly involved in Software Development of JAVA-enabled web applications.</p>

                            <p>Recently, I'm interested in Cloud Computing. I study writing Java SpringBoot and Node.js applications in Google Cloud.</p>

                            <p>I also learn new technologies like micro services, docker during my free time.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio" className="container-fluid content">
                <h2>My Experience and Skills</h2>
                <div className="row">
                    <div className="col-md-8">
                        <TabbedPaneComponent data={portfolioData} />
                    </div>
                    <div className="col-md-4">
                        <RatingComponent heading="Web Application Development" subheading="12 years" rate="4" headingColor='purple' subheadingColor='orange' starColor="green" />
                        <RatingComponent heading="Java" subheading="12 years" rate="4" headingColor='purple' subheadingColor='orange' starColor="green" />
                        <RatingComponent heading="Spring" subheading="12 years" rate="4" headingColor='purple' subheadingColor='orange' starColor="green" />
                        <RatingComponent heading="JavaScript" subheading="12 years" rate="4" headingColor='purple' subheadingColor='orange' starColor="green" />
                        <RatingComponent heading="Node.js" subheading="1 year" rate="2" headingColor='purple' subheadingColor='orange' starColor="green" />
                        <RatingComponent heading="React" subheading="1 year" rate="2" headingColor='purple' subheadingColor='orange' starColor="green" />
                        <RatingComponent heading="Python" subheading="6 months" rate="1" headingColor='purple' subheadingColor='orange' starColor="green" />
                    </div>
                </div>
            </section>
            <section id="contact" className="container-fluid content">
                <h2>Contact</h2>
                    <form>
                        <fieldset>
                            <div className="row p-3 justify-content-left">
                                <div className="col-md-3">
                                    <label htmlFor="contactName">Name:</label>
                                </div>
                                <div className="col-md-9"><input type="text" id="contactName" name="contactName" /></div>
                            </div>
                            <div className="row p-3">
                                <div className="col-md-3">
                                    <label htmlFor="contactEmail">Email:</label>
                                </div>
                                <div className="col-md-9">
                                    <input type="email" id="contactEmail" name="contactEmail" />
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="col-md-3">
                                    <label htmlFor="contactMsg">Message:</label>
                                </div>
                                <div className="col-md-9">
                                    <textarea rows="5" id="contactMsg" name="contactMsg"></textarea>
                                </div>
                            </div>
                            <div className="row p-3">
                                <div className="col-md-3">&nbsp;</div>
                                <div className="col-md-9">
                                    <input className="btn" type="submit" id="btnSubmit" value="Send Email" />
                                </div>
                            </div>
                        </fieldset>
                    </form>
            </section>
            <div id="footer">
                <div>Designed and coded by</div>
                <div className="author">Ada Cheng</div>
                <div id="appVersion">Version: { pjson.version }</div>
            </div>
        </div>
    );
}

export default App;
