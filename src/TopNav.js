import React, { Component } from 'react';
import {Nav} from 'react-bootstrap';

class TopNav extends Component {
  render() {
    return (
      <>
        <Nav className="navbar navbar-expand-lg navbar-light bg-light header">
            <div className="container-fluid">
                <a className="navbar-brand" href="#main">{this.props.navTitle}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      {this.props.children}
                    </ul>
                    <a href="https://github.com/adafycheng" target="_blank"><img src="/images/github.png" class="icon" /></a>&nbsp;
                    <a href="https://linkedin.com/in/adafycheng" target="_blank"><img src="/images/linkedin.png" class="icon" /></a>&nbsp;
                    <a href="https://stackoverflow.com/story/adafycheng" target="_blank"><img src="/images/stackoverflow.png" class="icon" /></a>&nbsp;
                    <a href="https://twitter.com/adafycheng" target="_blank"><img src="/images/twitter.png" class="icon" /></a>&nbsp;
                    <a href="https://g.dev/adafycheng" target="_blank"><img src="/images/gdev.png" class="icon" /></a>&nbsp;
                </div>
            </div>
        </Nav>
      </>
    );
  }
}

export default TopNav;
