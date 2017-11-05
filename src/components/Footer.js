import React, { Component } from 'react';
import styled from 'styled-components';
import appStore from '../assets/images/footer/app-store-badge.svg';
import googlePlay from '../assets/images/footer/google-play-badge.png';

const FooterWrapper = styled.div`
  max-width: 1169px;
  margin: 70px auto;
  display: flex;
  justify-content: space-between;
  > ul {

    > li {
      list-style: none;
      font-size: 14px;
      line-height: 1.43;
      color: #696f7a;
      cursor: pointer;
      &:first-child {
        margin: 0 0 10px 0;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.25;
        color: #696f7a;
      }

      > input {
        border: none;
        border-bottom: 1px solid #8d919a;
        font-size: 14px;
      }

      > img {
        width: 120px;
        margin: 10px 0 0 0;
      }
    }

    > li.IconWrapper {
      > i {
        margin: 0 10px 0 0;
      }
    }

    > li.IconWrapper.First {
      margin: 40px 0 0 0;

    }

    > li.ExceptThis {
      font-size: 14px;
    }

    > li.InputWrapper {
      position: relative;

      &:after {
        content: '';
        border: solid #565c67;
        border-width: 0 1px 1px 0;
        display: inline-block;
        padding: 3px;
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
        margin: 0 0 0 5px;
        position: absolute;
        right: 0;
        top: 9px;
      }
    }

    > li.Bold {
      font-weight: 600;
      font-size: 16px;
      margin: 35px 0 0 0;
    }
  }
  
`;

class Footer extends Component {
  render() {
    return (
      <FooterWrapper className="FooterWrapper">
        <ul className="EachGroup">
          <li>Taskworld Inc.</li>
          <li>28 Valley Road, Suite#1</li>
          <li>Montclair, NJ 07042</li>
          <li className="IconWrapper First">
            <i class="fa fa-phone" aria-hidden="true"></i>
            +(1) 866 428 9571
          </li>
          <li className="IconWrapper">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            support@taskworld.com
          </li>
        </ul>
        <ul className="EachGroup">
          <li>Solutions</li>
          <li>Product</li>
          <li>Enterprise</li>
          <li>Pricing</li>
          <li>Success Stories</li>
        </ul>
        <ul className="EachGroup">
          <li>Company</li>
          <li>About us</li>
          <li>Careers</li>
          <li>Press & media</li>
          <li>Blog</li>
          <li>Contact us</li>
          <li>Terms, privacy & security</li>
        </ul>
        <ul className="EachGroup">
          <li>Resources</li>
          <li>User guide</li>
          <li>Getting started</li>
          <li>Taskworld basics</li>
          <li>Youtube channel</li>
          <li>Use cases</li>
        </ul>
        <ul className="EachGroup">
          <li className="ExceptThis">Choose Your Language</li>
          <li className="InputWrapper">
            <input type="text" placeholder="English"/>
          </li>
          <li className="Bold">Mobile Apps</li>
          <li><img src={appStore} alt="app-store-badge"/></li>
          <li><img src={googlePlay} alt="google-play-badge"/></li>
        </ul>
      </FooterWrapper>
      
    );
  }
}

export default Footer;