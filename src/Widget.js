import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widget.css'

function Widget() {
    const newsArticle = (heading, subtitle) =>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widegets__header">
                <Info />
                <h2 className="widgets__title">LinkedIn News</h2>
            </div>
            {newsArticle("PAPA React is back", "Top news - 4923 readers")}
            {newsArticle("Cornavirus is scattering the world", "Top news - 9938 readers")}
            {newsArticle("BORN OF GOD is a nice Album", "Top news - 5000 readers")}
        </div>
    )
}

export default Widget
