import React from 'react'


let fullWidth = { width: "100%" }
let halfWidth = { width: '50%' }
let ContainerStyle = { width: '50vw', margin:'10px', background:'transparent'}

let formStyle = { display: 'flex', flexWrap:'wrap', justifyContent:'center', alignContent:'center'}

const mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
   ContainerStyle = { ...ContainerStyle, width:'100vw'}
   halfWidth = fullWidth
}
const MailChimp = (props) => {
    return (
        <div id="mc_embed_signup" style={ContainerStyle}>
            <form style={formStyle} action="https://gmail.us3.list-manage.com/subscribe/post?u=5729674e2813470eb818c8462&amp;id=4af129eb4d" method="post" 
                id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll" style={formStyle}>
                    <label htmlFor="mce-EMAIL" style={fullWidth}>Let's Stay In Touch!</label>
                    <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required style={halfWidth}/>
                
                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_5729674e2813470eb818c8462_4af129eb4d" tabIndex="-1"/></div>
                    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                </div>
            </form>
        </div>
    )
}

export default MailChimp