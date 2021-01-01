import {TextField , Button, Collapse, } from '@material-ui/core';
import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InsertLinkIcon from '@material-ui/icons/InsertLink';

class NewUser extends React.Component{
    state={
        link:window.location.href,
    };
    redirect=(e)=>{
        window.open('/');
    }
    
    render(){
    return (
        <>
            <div className="App">
                <div className="message">
                <h3>{this.props.match.params.message}</h3>
            <h3>From: {this.props.match.params.name}</h3>
            </div>
                <h3>Want to create your own Greetings?</h3>
        
                <Button onClick={this.redirect} variant="contained" color="default" >
                    Click here
                </Button> 
            </div>
        </>
      );
    }
}

export default NewUser;