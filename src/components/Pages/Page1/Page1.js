import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import './page1.css';

export class Page1 extends Component {
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
      
        <div className="Page1">
          <InputLabel style={{ fontSize:'25px'  }}>Harita spektral ivme katsayılarını giriniz</InputLabel>
            <TextField
              placeholder="Ss değerini giriniz"
              label="Ss Değeri"
              onChange={handleChange('Ss')}
              defaultValue={values.Ss}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="S1 değerini giriniz"
              label="S1 Değeri"
              onChange={handleChange('S1')}
              defaultValue={values.S1}
              margin="normal"
              fullWidth
            />
            
            
            
            <Button
              color="primary"
              variant="contained"             
              onClick={this.continue}
            >Continue</Button>
          
        </div>
      
    );
  }
}

export default Page1;