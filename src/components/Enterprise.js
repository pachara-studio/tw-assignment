import React, { Component } from 'react';
import styled from 'styled-components';
import samlIcon from '../assets/images/enterprise/saml.svg';
import vpcIcon from '../assets/images/enterprise/vpc.svg';
import tfaIcon from '../assets/images/enterprise/tfa.svg';
import damIcon from '../assets/images/enterprise/dam.svg';
import slaIcon from '../assets/images/enterprise/sla.svg';
import pscIcon from '../assets/images/enterprise/psc.svg';
import reqDemoImg from '../assets/images/enterprise/device@2x.png';
import ctaBg from '../assets/images/enterprise/buttom-cta-bg.png';
import media from 'styled-media-query';

const EnterpriseWrapper = styled.div`
`;

const WhiteWrapper = styled.div`
  max-width: 1169px;
  margin: 70px auto;
  text-align: center;
  > h2 {
    font-size: 38px;
    font-weight: 600;
    line-height: 0.53;
    color: #515459;
    margin: 0;
  }
  > h3 {
    font-size: 20px;
    font-weight: 300;
    line-height: 1;
    color: #1f5c87;
    margin: 67px auto 150px auto;
    cursor: pointer;
    width: 120px;
    text-decoration: underline;
  }
  > h4 {
    font-size: 20px;
    font-weight: 300;
    line-height: 1.2;
    text-align: center;
    color: #515459;
  }
`;

const FeatureIcon = styled.div`
  display: flex;
  justify-content: space-around;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`;

const EachFeature = styled.div`
  ${media.lessThan('medium')`
    display: flex;
    margin: 0 auto;
  `}
  > ul {
    padding-left: 0;
    > li.ImgWrapper {
      width: 94px;
      height: 94px;
      background-color: rgba(237, 237, 237, 0.4);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      margin: 0 0 10px 0;
    }
    > li {
      list-style: none;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.14;
      color: #1f5c87;
    }
  }
`;

const GreenWrapper = styled.div`
  background-image: url(${ctaBg});
  min-height: 430px;
  text-align: center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;

  > div {
    max-width: 1169px;
    margin: 70px auto 0px auto;
    ${media.lessThan('medium')`
      padding: 0 0 20px 0;
    `}
    > img {
      position: absolute;
      width: 300px;
      top: 60px;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    > h1 {
      font-size: 38px;
      font-weight: bold;
      line-height: 1.26;
      color: #ffffff;
      max-width: 800px;
      margin: 0 auto;
      padding: 190px 0 20px 0;
    }

    > button {
      width: 328px;
      height: 50px;
      border-radius: 6px;
      background-color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      color: #3c3e41;
      border: none;
    }
  }

  
`;

class Enterprise extends Component {
  render() {
    return (
      <EnterpriseWrapper className="EnterpriseWrapper">
        <WhiteWrapper className="WhiteWrapper">
          <h2>100% enterprise ready</h2>
          <h4>Taskworld works like a charm in even highly regulated industries.</h4>
          <FeatureIcon className="FeatureIcon">
            <EachFeature className="EachFeature">
              <ul className="Wrapepr">
                <li className="ImgWrapper"><img src={samlIcon} alt="sam-icon" /></li>
                <li>SAML 2.0<br />SSO</li>
              </ul>
            </EachFeature>
            <EachFeature className="EachFeature">
              <ul className="Wrapepr">
                <li className="ImgWrapper"><img src={vpcIcon} alt="vpn-icon" /></li>
                <li>VPC/On premise<br />options</li>
              </ul>
            </EachFeature>
            <EachFeature className="EachFeature">
              <ul className="Wrapepr">
                <li className="ImgWrapper"><img src={tfaIcon} alt="tfa-icon" /></li>
                <li>Two factor<br />authentication</li>
              </ul>
            </EachFeature>
            <EachFeature className="EachFeature">
              <ul className="Wrapepr">
                <li className="ImgWrapper"><img src={damIcon} alt="dam-icon" /></li>
                <li>Dedicated<br />account manager</li>
              </ul>
            </EachFeature>
            <EachFeature className="EachFeature">
              <ul className="Wrapepr">
                <li className="ImgWrapper"><img src={slaIcon} alt="sla-icon" /></li>
                <li>SLA (Service<br />Level Agreements)</li>
              </ul>
            </EachFeature>
            <EachFeature className="EachFeature">
              <ul className="Wrapepr">
                <li className="ImgWrapper"><img src={pscIcon} alt="ps-icon" /></li>
                <li>Privacy Shield<br />certified</li>
              </ul>
            </EachFeature>
          </FeatureIcon>
          <h3>Learn more ></h3>
        </WhiteWrapper>
        <GreenWrapper className="GreenWrapper">
          <div>
            <img src={reqDemoImg} alt="laptop" />
            <h1 className="CtaText">Still on the fence? Talk with us,
            share your requirements and see if Taskworld can help.
            </h1>
            <button className="reqDemoButton">Request demo</button>
          </div>
        </GreenWrapper>
      </EnterpriseWrapper>
    );
  }
}

export default Enterprise;