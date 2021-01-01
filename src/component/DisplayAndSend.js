import {TextField , Button, Collapse, } from '@material-ui/core';
import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InsertLinkIcon from '@material-ui/icons/InsertLink';

class DisplayAndSend extends React.Component{
    state={
        link:window.location.href+'/new',
    };
    copyLink=(e)=>{
        navigator.clipboard.writeText(window.location.href+'/new');
    }
    
    render(){
    return (
        <>
            <div className="App">
                <div className="message">
                <h3>{this.props.match.params.message}</h3>
                
                <h3>From: {this.props.match.params.name}</h3>
                </div> 
                <Button variant="contained" style={{backgroundColor:'#4CAF50',color:'white'}} startIcon={<WhatsAppIcon/>}>
                    <a style={{color:'black'}} href='https://api.whatsapp.com/send?text={this.state.link}'>
                    Share on whatsapp
                    </a>
                </Button>
            </div>
            <div className="App"> 
                <Button variant="contained" color="primary" style={{color:'white'}} startIcon={<FacebookIcon/>}>
                <a style={{color:'white'}} href="https://www.facebook.com/sharer/sharer.php?u={this.state.link}" target="_blank">
                    Share on Facebook
                </a>                   
                </Button>
            </div>
            <div className="App"> 
                <Button onClick={this.copyLink} variant="contained" color="default" startIcon={<InsertLinkIcon/>}>
                    Copy Link
                </Button>        
            </div>
            
        </>
      );
    }
}

export default DisplayAndSend;