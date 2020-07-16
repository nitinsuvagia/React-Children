import React from 'react'

const PublicLayout = ({ children }) => {
    return (
        <div>
            <div style={{ height:'50px', width: '100%', border:'0 1px 0 1px', background:'blue', color:'#ffffff'}}>
                THIS IS PUBLIC WEBSITE
            </div>
            <div>Your content will be here</div>
            <div>{children}</div>
        </div>
    )
}

export default (PublicLayout)