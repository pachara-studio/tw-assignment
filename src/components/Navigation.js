import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/tw-logo.svg';
import contactIcon from '../assets/images/headphone_icon.svg';

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px auto 0 auto;
  color: #3c3e41;
  max-width: 1169px;
`;

const LinkGroup = styled.ul`
  display: flex;
`;

const Link = styled.li`
  list-style: none;
  margin: 0 15px 0 0;
  font-size: 14px;
  line-height: 1.57;
`;

const DownArrow = styled.span`
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin: 0 0 0 5px;
  vertical-align: 2px;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  margin: 0 7px 0 0;
`;

const ContactNum = styled.span`
  font-size: 12px;
  line-height: 1.67;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-self: center;
`;

const Button = styled.button`
  width: 85px;
  height: 42px;
  border-radius: 6px;
  border: solid 1px #3c3e41;
  background-color: #fff;
  font-size: 16px;
  line-height: 1.5;
`;

const TrialButton = Button.extend`
  background-image: linear-gradient(283deg, #2eb3b6, #59ced0);
  color: #fff;
  width: 180px;
  border: 1px solid #2eb3b6;
  margin: 0 0 0 12px;
`;

class Navigation extends Component {
  render() {
    return (
      <Navbar className="NavBar">
        <div className="logoWrapper">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="linkGroup">
          <LinkGroup className="LinkGroup">
            <Link>Product</Link>
            <Link>Pricing</Link>
            <Link>Success</Link>
            <Link>
              Enterprise
              <DownArrow />
            </Link>
            <Link>Contact us</Link>
          </LinkGroup>
        </div>
        <Contact className="Contact">
          <Icon src={contactIcon} className="contactIcon" alt="contact icon" />
          <ContactNum>+1-866-428-9571</ContactNum>
        </Contact>
        <ButtonGroup className="ButtonGroup">
          <Button>Log in</Button>
          <TrialButton>Try 15 days free</TrialButton>
        </ButtonGroup>
      </Navbar>
    );
  }
}

export default Navigation;