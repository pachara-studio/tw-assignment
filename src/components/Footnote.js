import React, { Component } from 'react';
import styled from 'styled-components';
import FbIcon from '../assets/images/footer/facebook.svg';
import TwIcon from '../assets/images/footer/twitter.svg';
import GgIcon from '../assets/images/footer/google.svg';
import LiIcon from '../assets/images/footer/linkedin.svg';

const FootnoteWrapper = styled.div`
  max-width: 1169px;
  margin: 70px auto;
  display: flex;
  justify-content: space-between;

  > h6 {
    font-size: 12px;
    line-height: 1.5;
    text-align: left;
    color: #696f7a;
    margin: 0 0 0 40px;

    > span {
      margin: 0 10px;
    }
  }
`;

const SocialIcon = styled.div`
  > a {
    > img {
      margin: 0 30px;
    }
  }
`;

class Footnote extends Component {
  state = {  }
  render() {
    return (
      <FootnoteWrapper className="FootnoteWrapper">
        <h6>Copyright © 2013-2017 Taskworld™. Pat. Pend. All rights reserved.    <span>•</span>    Terms, Privacy & Security</h6>
        <SocialIcon className="SocialIcon">
          <a href=""><img src={FbIcon} alt=""/></a>
          <a href=""><img src={TwIcon} alt=""/></a>
          <a href=""><img src={GgIcon} alt=""/></a>
          <a href=""><img src={LiIcon} alt=""/></a>
        </SocialIcon>
      </FootnoteWrapper>
    );
  }
}

export default Footnote;