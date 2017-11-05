import React, { Component } from 'react';
import styled from 'styled-components';
import getapp from '../assets/images/certificates/getapp.png';
import capterra from '../assets/images/certificates/capterra.png';
import crozdesk from '../assets/images/certificates/crozdesk.png';
import g2 from '../assets/images/certificates/g2.png';
import netzsieger from '../assets/images/certificates/netzsieger.png';
import finances01 from '../assets/images/certificates/finances01.png';
import finances02 from '../assets/images/certificates/finances02.png';

const CertificateWrapper = styled.div`
  background-color: #fdfdfd;
  border-bottom: solid 1px rgba(151, 151, 149, 0.2);
`;

const ImgWrapper = styled.div`
  max-width: 1169px;
  margin: 0 auto;
  padding: 70px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > img {
    width: 10%;
    height: 10%;
    margin: 0 10px;
  }
  
`;

class Certificate extends Component {
  render() {
    return (
      <CertificateWrapper className="CertificateWrapper">
        <ImgWrapper className="ImgWrapper">
          <img src={getapp} alt="getapp-certificate"/>
          <img src={capterra} alt="capterra-certificate"/>
          <img src={crozdesk} alt="crozdesk-certificate"/>
          <img src={g2} alt="g2-certificate"/>
          <img src={netzsieger} alt="netzsieger-certificate"/>
          <img src={finances01} alt="finances01-certificate"/>
          <img src={finances02} alt="finances02-certificate"/>
        </ImgWrapper>
      </CertificateWrapper>
    );
  }
}

export default Certificate;