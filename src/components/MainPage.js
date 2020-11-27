import React, { Component } from 'react';
import Analize from './Analize';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import Page3 from './Pages/Page3/Page3';
import Page4 from './Pages/Page4/Page4';
import Page5 from './Pages/Page5/Page5';
import Page6 from './Pages/Page6/Page6';
import Page7 from './Pages/Page7/Page7';
import Page8 from './Pages/Page8/Page8';
import Page9 from './Pages/Page9/Page9';
import Page10 from './Pages/Page10/Page10';

export class MainPage extends Component {
  state = {
    step: 1  
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { skor, buildingLayout, locationOfBuilding,Ss,S1, constructionYear,numberOfStory,damageInfo } = this.state;
    const values = {skor, buildingLayout, locationOfBuilding,Ss,S1, constructionYear,numberOfStory,damageInfo, tip:'konut' };

    switch (step) {
        case 1:
          return (
            <Page1
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />  
          );
        case 2:
        return (
          <Page2
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
          
        );
        case 3:
        return (
          <Page3
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />  
        );
        case 4:
        return (
          <Page4
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />  
        );
        case 5:
        return (
          <Page5
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />  
        );
        case 99:
        return (
          <Page6
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />  
        );
        case 6:
        return (
          <Analize
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
        
      
      }
     
  }
}

export default MainPage;
