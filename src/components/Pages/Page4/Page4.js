import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './style.css';

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
        <InputLabel style={{marginBottom: 'px', fontSize:'25px'  }}>Binanızda Hasar var mı?</InputLabel>
        <Select style={{marginBottom:'9px' }}
          onChange={handleChange('damageInfo')}
          defaultValue={values.damageInfo}
          fullWidth
          margin="normal"
        >
          
          <MenuItem value={'EVET'}>Evet</MenuItem>
          <MenuItem value={'HAYIR'}>Hayır</MenuItem>
          
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
          
        </div>
      
    );
  }
}

export default Page4;
