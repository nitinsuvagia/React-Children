import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <div>
            <div style={{ position:'relative fixed', height:'50px', width: '100%', border:'0 1px 0 1px', background:'blue', color:'#ffffff'}}>
                THIS IS HEADER PART OF AUTH LAYOUT 
            </div>
            <div style={{ float:'left', height:'100vh', width:'20%', border:'0 0 0 1px', background:'blue', color:'#000000' }}><br/><br/><br/><br/>SIDE BAR WITH MENU OF AUTH LAYOUT</div>
            <div style={{ float:'right', height:'100vh', width:'80%', border:'0 0 0 1px', background:'#AEAEAE' }}>{children}</div>
        </div>
    )
}

export default (AuthLayout)