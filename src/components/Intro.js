import React, { Component } from 'react';
import styled from 'styled-components';
import playImage from '../assets/images/play-image@2x.png';
import Samsung from '../assets/images/companies-logo/samsung-v-2.svg';
import Amazon from '../assets/images/companies-logo/amazon.svg';
import Netflix from '../assets/images/companies-logo/netflix.svg';
import Salesforce from '../assets/images/companies-logo/salesforce.svg';
import Roche from '../assets/images/companies-logo/roche.svg';
import Att from '../assets/images/companies-logo/at-t.svg';

const IntroWrapper = styled.div`
  margin: 120px auto 0 auto;
  max-width: 1169px;
`;

const UpperSide = styled.div`
  display: flex;
  margin: 0 60px;
`;

const LeftSide = styled.div`
  width: 50%;
  margin: 0 0 0 0;
`;

const TextWrapper = styled.div`
  margin: 10px 0 60px 0;
`;

const Text = styled.h1`
  font-weight: ${props => props.bold ? 'bold' : '300'};
  font-size: ${props => props.small ? '14px' : '56px'};
  line-height: ${props => props.small ? '1.86' : '1.16'};
  color: ${props => props.small ? '888888' : '#515459'};
  margin: 0;
`;

const ButtonWrapper = styled.div`
  
`;

const Button = styled.button`
  width: 190px;
  height: 50px;
  border-radius: 8px;
  border: solid 1px #888888;
  background-color: #fff;
  font-size: 16px;
  font-weight: 600;
  color: #888888;
`;

const ButtonTrial  = Button.extend`
  background-image: linear-gradient(105deg, #ff9e95, #f2938a);
  border: solid 1px #ff9e95;
  margin: 0 23px 0 0;
  color: #fff;
`;

const RightSide = styled.div`
  width: 50%;
  margin: 0 0 0 0;
`;

const PlayImage = styled.img`
  width: 100%;
`;

const LowerSide = styled.div`
  margin: 0 60px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0 0 0;
`;

const CompaniesLogo = styled.img`
`;

class Intro extends Component {
  render() {
    return (
      <IntroWrapper className="IntroWrapper">
        <UpperSide className="UpperSide">
          <LeftSide className="LeftSide">
            <TextWrapper className="TextWrapper">
              <Text className="Text">Ridiculously easy</Text>
              <Text bold className="Text">project management</Text>
            </TextWrapper>
            <ButtonWrapper className="ButtonWrapper">
              <ButtonTrial className="ButtonTrial">Try 15 days free</ButtonTrial>
              <Button className="Button">Request Demo</Button>
            </ButtonWrapper>
          </LeftSide>
          <RightSide className="RightSide">
            <PlayImage src={playImage} className="playImage" alt="play image" />
          </RightSide>
        </UpperSide>
        <LowerSide className="LowerSide">
          <Text small className="Text">Trusted by leading companies worldwide</Text>
          <ImgWrapper className="ImgWrapper">
            <CompaniesLogo src={Samsung} alt="Samsung Logo" className="ComapniesLogo"></CompaniesLogo>
            <CompaniesLogo src={Amazon} alt="Amazon Logo" className="ComapniesLogo"></CompaniesLogo>
            <CompaniesLogo src={Netflix} alt="Netflix Logo" className="ComapniesLogo"></CompaniesLogo>
            <CompaniesLogo src={Salesforce} alt="Salesforce Logo" className="ComapniesLogo"></CompaniesLogo>
            <CompaniesLogo src={Roche} alt="Roche Logo" className="ComapniesLogo"></CompaniesLogo>
            <CompaniesLogo src={Att} alt="At&t Logo" className="ComapniesLogo"></CompaniesLogo>
          </ImgWrapper>
        </LowerSide>
      </IntroWrapper>
    );
  }
}

export default Intro;