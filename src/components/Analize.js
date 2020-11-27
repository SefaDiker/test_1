import React, { Component } from 'react';
import { ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import './lastPage.css';

export class Analize extends Component {

 
  state = {
    skor : 0,
    height: 0,
    codesYear: 0,
    total:0
  };
  

  

  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  buildingHeight = () => {
    const { values: {numberOfStory}} = this.props;
    this.setState({
      height : 2.7*numberOfStory
    });
  };

  codes = () => {
    const { values: {constructionYear}} = this.props;

    if (constructionYear >= 2019){
      this.setState({
        codesYear : '2018 Deprem Yönetmeliği'
      });
    } else if (constructionYear < 2019 && constructionYear >= 2007){
      this.setState({
        codesYear : '2007 Deprem Yönetmeliği'
      });
    }else if (constructionYear < 2007 && constructionYear >= 1998){
      this.setState({
        codesYear : '1998 Deprem Yönetmeliği'
      });
    }

    
  };

  analize = () => {
    this.buildingHeight();
    this.codes();
    
    const { values: {locationOfBuilding}} = this.props;
    
    this.setState({
      skor : Number(locationOfBuilding),
     
      
    });
  };


 


  

  render() {
    const { skor, height, codesYear } = this.state;
    const { values: { Ss, S1, constructionYear,numberOfStory,damageInfo, buildingLayout}} = this.props;
    
    return (
      <div className="lastPage"><hr/> 

        <div className="skor">
        {skor.toFixed(2)} <br/>
        {height.toFixed(2)}<br/>
        {codesYear}<br/>
        {height+skor}
        </div><hr/>

        <ListItem>
          <ListItemText primary="Ss" secondary={Ss} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ss" secondary={S1} />
        </ListItem> <hr/>
        <ListItem>
          <ListItemText primary="Construction Year" secondary={constructionYear} />
        </ListItem><hr/>
        <ListItem>
          <ListItemText primary="numberOfStory" secondary={numberOfStory} />
        </ListItem> <hr/>
        <ListItem>
          <ListItemText primary="damageInfo" secondary={damageInfo} />
        </ListItem> <hr/>
        <ListItem>
          <ListItemText primary="buildingLayout" secondary={buildingLayout} />
        </ListItem> <hr/>
       
        
      
        <br/>

        <Button
          color="secondary"
          variant="contained"
          onClick={this.back}
        >Back</Button>

       
        

        <Button
          color="primary"
          variant="contained"
          onClick={this.analize}
        >Analiz</Button>

        


      </div> 

      
          
        
      
    );

    
  }

  
}

export default Analize;
