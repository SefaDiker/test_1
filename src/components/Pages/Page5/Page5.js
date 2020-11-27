import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './style.css';
import ayrik from './images/ayrik.png'
import bitisik from './images/bitisik.png'

export class Page4 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      
      
      <div className="Page3">
         <img src={ayrik} width="360" style={{margin:"0px 10px 5px 0px"}} />
         <img src={bitisik} width="360"  style={{margin:"0px 10px 5px 0px"}}/> 
         
      
        <InputLabel style={{marginBottom: '32px', fontSize:'25px'  }}>Binanızın yapılaşma tipi nedir? </InputLabel>
        
        <Select style={{marginBottom:'9px' }}
          onChange={handleChange('buildingLayout')}
          defaultValue={values.buildingLayout}
          fullWidth
        >
          
          <MenuItem value={'bitisik'}>Bitişik Nizam</MenuItem>
          <MenuItem value={'ayrik'}>Ayrık Nizam</MenuItem>
          
        </Select>
            
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>
            
            <Button
              color="primary"
              variant="contained"             
              onClick={this.continue}
            >Continue</Button>
        
       
<img src={require('./images/bitisik.png' )} width="20%"   alt=""  /> 
          
      </div>
      
    );
  }
}

export default Page4;
