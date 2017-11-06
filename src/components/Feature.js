import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PmImage from '../assets/images/feature/pm-image.png';
import TmImage from '../assets/images/feature/tm-image.png';
import PmIcon from '../assets/images/feature/pm-icon.svg';
import TmIcon from '../assets/images/feature/tm-icon.svg';
import Tticon from '../assets/images/feature/tt-icon.svg';
import FmIcon from '../assets/images/feature/fm-icon.svg';
import PrIcon from '../assets/images/feature/pr-icon.svg';
import GcIcon from '../assets/images/feature/gc-icon.svg';

const FeatureWrapper = styled.div`
  background-image: linear-gradient(to right, #1f5c87, rgba(63, 190, 192, 0.48) 44%, rgba(89, 206, 208, 0));
`;

const BgWrapper = styled.div`
  background-image: linear-gradient(59deg, rgba(46, 179, 182, 0.14), rgba(63, 190, 192, 0.48) 40%, #59ced0);
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1169px;
`;

const Headline = styled.h1`
  text-align: center;
  color: #ffffff;
  font-size: 30px;
  font-weight: 300;
  line-height: 1.27;
  padding: 60px;
`;

const Bold = styled.span`
  font-weight: bold;
  margin: 0;
  display: inline;
  padding: 0;
  text-align: center;
  color: #ffffff;
  font-size: 30px;
  line-height: 1.27;
  
`;

const FeatureBlock = styled.div`
  display: flex;
  margin: 0 60px;
`;

const ImageBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FadeOutLeft = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;

const FadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const Image = styled.img`
  width: 80%;
  margin-left: ${props => props.active ? '0' : 'auto'};
  left: ${props => props.active ? '0' : '100px'};
  ${'' /* left: ${props => props.active ? '0' : '100px'}; */}
  top: ${props => props.active ? '0' : '50px'};
  transition: opacity 1000ms;
  transition: left 1000ms;
  position: ${props => props.active ? 'static' : 'absolute'};
  opacity: ${props => props.active ? '1' : '0.4'};
  z-index: ${props => props.active ? '2' : '1'};
  ${'' /* transform: ${props => props.active ? translate3d(100%, 0, 0) : translate3d(-100%, 0, 0)}; */}
  ${'' /* animation: ${props => props.active ? ${FadeOutLeft} 1000ms ease-in-out 0s : FadeInRight 1000ms ease-in-out 0s}; */}
  ${'' /* animation: ${FadeOutLeft} 1000ms ease-in-out 0s; */}

`;

const TextBlock = styled.div`
  width: 50%;
`;

const EachFeature = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.26);
  margin: 0 0 0 80px;
  padding: 10px 0;
  align-items: center;
    &:first-child {
      padding: 0 0 20px 0;
    }
    &:last-child {
      border-bottom: none;
    }
`;

const IconWrapper = styled.div`
  background-image: ${props => props.active ? 'linear-gradient(135deg, #ff9e95, #f2938a)' : 'tranparent'};
  box-shadow: ${props => props.active ? '1px 3px 5px 0 rgba(0, 0, 0, 0.15)' : 'none'};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  text-align: center;
  margin: 0 10px 0 0;
`;
const Icon = styled.img`
  vertical-align: -19px;
`;

const TextWrapper = styled.div`
`;

const MainText = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  color: #ffffff;
  margin: 0;
`;

const SubText = styled.h4`
  display: ${props => props.active ? 'block' : 'none'};
  ${'' /* transition: opacity 1000ms;
  opacity: ${props => props.active ? '1' : '0'}; */}
  font-size: 16px;
  font-weight: 300;
  line-height: 1.25;
  text-align: left;
  color: #ffffff;
  margin: 0;
  max-width: 400px;
`;

const LearnMore = SubText.extend`
  display: block;
  max-width: none;
  padding: 40px 0;
  text-decoration: underline;
  cursor: pointer;
  font-size: 20px;
  width: 120px;
  margin: 0 auto;
`;

class Feature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 1
    }
    
  }

  handleMouseOver(ele) {
    this.setState(() => ({
      active: ele
    }));
  }
  
  render() {
    return (
      <FeatureWrapper className="FeatureWrapper">
        <BgWrapper className="BgWrapper">
          <ContentWrapper className="ContentWrapper">
            <Headline className="Headline">
              <Bold className="Bold">Thousands of companies </Bold>in every imaginable industry track work, 
              <br />
              measure performance and deliver <Bold className="Bold">great results with Taskworld.</Bold>
            </Headline>
            <FeatureBlock className="FeatureBlock">
              <ImageBlock className="ImageBlock">
                <Image active={this.state.active !== 2} src={PmImage} alt="project management feature" className="Image"></Image>
                <Image active={this.state.active === 2} src={TmImage} alt="team messaging feature" className="Image"></Image>
              </ImageBlock>
              <TextBlock className="TextBlock">
                <EachFeature className="EachFeature"
                 onMouseEnter={this.handleMouseOver.bind(this, 1)}
                >
                  <IconWrapper active={this.state.active === 1} lassName="IconWrapper">
                    <Icon src={PmIcon} alt="project management icon" className="Icon"></Icon>
                  </IconWrapper>
                  <TextWrapper className="TextWrapper">
                    <MainText className="MainText">Project management</MainText>
                    <SubText active={this.state.active === 1} className="SubText">Effortlessly assign and track work with visual boards.</SubText>
                  </TextWrapper>
                </EachFeature>
                <EachFeature className="EachFeature"
                 onMouseEnter={this.handleMouseOver.bind(this, 2)}
                >
                  <IconWrapper active={this.state.active === 2} className="IconWrapper">
                    <Icon src={TmIcon} alt="" className="Icon"></Icon>
                  </IconWrapper>
                  <TextWrapper className="TextWrapper">
                    <MainText className="MainText">Team messaging</MainText>
                    <SubText active={this.state.active === 2} className="SubText">See who's online, who has read your message and receive instant response.</SubText>
                  </TextWrapper>
                </EachFeature>
                <EachFeature className="EachFeature"
                 onMouseEnter={this.handleMouseOver.bind(this, 3)}
                >
                  <IconWrapper active={this.state.active === 3} className="IconWrapper">
                    <Icon src={Tticon} alt="" className="Icon"></Icon>
                  </IconWrapper>
                  <TextWrapper className="TextWrapper">
                    <MainText className="MainText">Time tracking </MainText>
                    <SubText active={this.state.active === 3} className="SubText">Track time spent on task and get logs for each project.</SubText>
                  </TextWrapper>
                </EachFeature>
                <EachFeature className="EachFeature"
                 onMouseEnter={this.handleMouseOver.bind(this, 4)}
                >
                  <IconWrapper active={this.state.active === 4} className="IconWrapper">
                    <Icon src={FmIcon} alt="" className="Icon"></Icon>
                  </IconWrapper>
                  <TextWrapper className="TextWrapper">
                    <MainText className="MainText">File management</MainText>
                    <SubText active={this.state.active === 4} className="SubText">Each file is where it's supposed to be, attached to the relevant task and project.</SubText>
                  </TextWrapper>
                </EachFeature>
                <EachFeature className="EachFeature"
                 onMouseEnter={this.handleMouseOver.bind(this, 5)}
                >
                  <IconWrapper active={this.state.active === 5} className="IconWrapper">
                    <Icon src={PrIcon} alt="" className="Icon"></Icon>
                  </IconWrapper>
                  <TextWrapper className="TextWrapper">
                    <MainText className="MainText">Performance reports</MainText>
                    <SubText active={this.state.active === 5} className="SubText">Stay on top of your performance with reports and real-time feedback.</SubText>
                  </TextWrapper>
                </EachFeature>
                <EachFeature className="EachFeature"
                 onMouseEnter={this.handleMouseOver.bind(this, 6)}
                >
                  <IconWrapper active={this.state.active === 6} className="IconWrapper">
                    <Icon src={GcIcon} alt="" className="Icon"></Icon>
                  </IconWrapper>
                  <TextWrapper className="TextWrapper">
                    <MainText className="MainText">Gantt chart</MainText>
                    <SubText active={this.state.active === 6} className="SubText">Visualize project progress in a timeline and anticipate potential problems.</SubText>
                  </TextWrapper>
                </EachFeature>
              </TextBlock>
            </FeatureBlock>
            <div>
              <LearnMore className="LeranMore">Learn more ></LearnMore>
            </div>
          </ContentWrapper>
        </BgWrapper>
      </FeatureWrapper>
    );
  }
}

export default Feature;