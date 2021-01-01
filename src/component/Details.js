import {TextField , Button, Collapse } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Details extends React.Component{
    state={
        name:'',
        message:'',
        alertMessage:'',
        alertDisplay:false
    };
    nameChange =(event) =>{
        this.setState({name:event.target.value})
    };
    messageChange =(event) =>{
        this.setState({message:event.target.value})
    };
    afterClick =() =>{
        if(this.state.name && this.state.message){
            window.open(`/${this.state.name}/${this.state.message}`);
        }
        else if(this.state.name && !this.state.message){
            this.setState({alertDisplay:true, alertMessage:"Enter a message to proceed"});
        }
        else if(!this.state.name && this.state.message){
            this.setState({alertDisplay:true, alertMessage:"Enter your name to proceed"});
        }
        else{
            this.setState({alertDisplay:true, alertMessage:"Enter details to proceed"});
        }
    };
    render(){
    return (
        <>
        <div className="App">
        <Collapse in={this.state.alertDisplay}>
        <Alert variant="filled" severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                this.setState({alertDisplay:false});
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
         {this.state.alertMessage}
        </Alert>
      </Collapse>
      </div>
            <div className="App">
                <h3>Send New Year Wishes To Your Loved ones</h3>
            </div>
            <div className="App">
                <TextField id="outlined-basic" label="Enter Your Name" onChange={this.nameChange} variant="outlined" />
            </div>
            <div className="App">
            <TextField
                id="outlined-multiline-static"
                label="Enter Message"
                multiline
                onChange={this.messageChange}
                rows={4}
                variant="outlined"
            />
            </div>
            <div className="App">         
                <Button onClick={this.afterClick} variant="contained" color="primary">
                    Submit
                </Button>        
            </div>
        </>
      );
    }
}

export default Details;
