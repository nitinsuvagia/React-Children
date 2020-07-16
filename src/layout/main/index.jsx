import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <div>
            <div style={{  position:'fixed', height:'50px', width: '100%', border:'solid 1px #darkblue', background:'blue', color:'#ffffff'}}>
                THIS IS HEADER PART OF MAIN LAYOUT 
            </div>
            <div style={{ float:'left', height:'100%', width:'20%', border:'0 0 0 1px', color:'#000000' }}><br/><br/><br/><br/><br/><br/>SIDE BAR OF MAIN LAYOUT</div>
            <div>{children}</div>
        </div>
    )
}

export default (MainLayout)
