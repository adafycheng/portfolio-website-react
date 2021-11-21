import React, { Component } from 'react';
import $ from 'jquery';

class TopNavItem extends Component {

    state = {
        isActive: "" //this.props.active
    };

    constructor(props) {
        super(props);
        this.clickFunction = this.clickFunction.bind(this);
    }

    clickFunction = (e) => {
        $('.navbar-nav .nav-link').removeClass('active');
        this.setState({ isActive: "active" });
//        console.log('1: ');
  //      console.log(this.state.isActive);
    //    this.setState({ isActive: true });
      //  console.log('2: ');
        //console.log(this.state.isActive);
    //            <a className={`nav-link ${isActive ? "active" : ""}`}  href={this.props.href} onClick={this.clickFunction}>{this.props.children} | {this.className} |</a>

    this.forceUpdate();
    //$('#navbarSupportedContent').hide();
  }

  render() {
    const { isActive } = this.state;

    //console.log(this.state.isActive);

    return (
        <>
            <li className="nav-item" key={this.props.keyName}>
                <a className={`nav-link ${isActive}`}  href={this.props.href} onClick={this.clickFunction}>{this.props.children}</a>
            </li>
      </>
    );
  }
}

export default TopNavItem;
