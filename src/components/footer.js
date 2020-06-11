import React from 'react';
class Footer extends React.Component{
    
    render(){
        return(
            <div className = "footer">
                <div className="footerFirst">Need help? 
                    <span><a href="mailto:support@astrumu.com"target="_blank">   Contact Us</a></span>
                </div>
                <div className="footerAstrum">Practice Project</div>
                <div className = "fbIcon"><i className="fa fa-facebook-square" aria-hidden="true"></i></div>
            </div>
        )
    }
}
export default Footer