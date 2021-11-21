import React from 'react';
//import logo from './logo.svg';
import './App.css';

import RatingComponent from 'reactjs-rating-component'
import TopNav from './TopNav';
import TopNavItem from './TopNavItem';

function App() {
    return (
        <div className="App">
            <TopNav navTitle="Ada's World">
              <TopNavItem href="#main">Home</TopNavItem>
              <TopNavItem href="#about">About</TopNavItem>
              <TopNavItem href="#portfolio">Portfolio</TopNavItem>
              <TopNavItem href="#contact">Contact</TopNavItem>
            </TopNav>
            <section id="main" class="container-fluid">
                <div class="d-flex align-items-center justify-content-center intro">
                    <div>
                        <h1>Hello, I'm <span class="introName">Ada Cheng</span>.</h1>
                        <p>I'm a Java Software Developer.</p>
                    </div>
                </div>
            </section>
            <section id="about" class="container-fluid">
                <div class="container-fluid flex align-items-center justify-content-center intro">
                    <h2>About</h2>
                    <div class="row p-3 align-items-center">
                        <div class="col-md-4">
                            <svg width="300" height="300">
                                <defs>
                                    <mask id="mask">
                                        <circle fill="#FFFFFF" cx="150" cy="150" r="150"></circle>
                                    </mask>
                                </defs>
                                <image width="300" height="300" href="/images/adacheng.jpg" mask="url(#mask)"></image>
                            </svg>
                        </div>
                        <div class="col-md-8">
                            <h3>I'm a Java Software Developer.</h3>

                            <p>In past 10 years, I mainly involved in Software Development of JAVA-enabled web applications.</p>

                            <p>Recently, I'm interested in Cloud Computing. I study writing Java SpringBoot and Node.js applications in Google Cloud.</p>

                            <p>I also learn new technologies like micro services, docker during my free time.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio">
                <div class="container-fluid flex align-items-center justify-content-center intro">
                    <h2>My Skill</h2>
                    <RatingComponent heading="C#" subheading="6 months" rate="2" headingColor='purple' subheadingColor='orange' starColor="green" />
                    <RatingComponent heading="Java" subheading="11 years" rate="4" headingColor='purple' subheadingColor='orange' starColor="green" />
                    <RatingComponent heading="JavaScript" subheading="10 years" rate="4" headingColor='purple' subheadingColor='orange' starColor="green" />
                    <RatingComponent heading="Node.js" subheading="6 months" rate="3" headingColor='purple' subheadingColor='orange' starColor="green" />
                    <RatingComponent heading="React" subheading="6 months" rate="2" headingColor='purple' subheadingColor='orange' starColor="green" />
                </div>
            </section>
            <section id="contact">
                <div class="container-fluid flex align-items-center justify-content-center intro">
                    <h2>Contact</h2>
                    <form>
                        <fieldset>
                            <div class="row p-3 justify-content-left">
                                <div class="col-md-3">
                                    <label for="contactName">Name:</label>
                                </div>
                                <div class="col-md-9"><input type="text" id="contactName" name="contactName" /></div>
                            </div>
                            <div class="row p-3">
                                <div class="col-md-3">
                                    <label for="contactEmail">Email:</label>
                                </div>
                                <div class="col-md-9">
                                    <input type="text" id="contactEmail" name="contactEmail" />
                                </div>
                            </div>
                            <div class="row p-3">
                                <div class="col-md-3">
                                    <label for="contactMsg">Message:</label>
                                </div>
                                <div class="col-md-9">
                                    <textarea rows="5" id="contactMsg" name="contactMsg"></textarea>
                                </div>
                            </div>
                            <div class="row p-3">
                                <div class="col-md-3">&nbsp;</div>
                                <div class="col-md-9">
                                    <input class="btn" type="submit" id="btnSubmit" value="Send Email" />
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default App;
