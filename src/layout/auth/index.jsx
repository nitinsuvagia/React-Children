import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <div>
            <div style={{ position:'fixed', zIndex:'9999', height:'50px', width: '100%', border:'0 1px 0 1px', background:'blue', color:'#ffffff'}}>
                THIS IS HEADER PART OF AUTH LAYOUT 
            </div>
            <div style={{ marginTop:'50px', float:'left', height:'100vh', position:'fixed', width:'20%', border:'0 0 0 1px', background:'blue', color:'#000000' }}>SIDE BAR WITH MENU OF AUTH LAYOUT</div>
            <div style={{ marginTop:'50px', float:'right', height:'100%', width:'80%', border:'0 0 0 1px', background:'#AEAEAE' }}>{children}</div>
        </div>
    )
}

export default (AuthLayout)