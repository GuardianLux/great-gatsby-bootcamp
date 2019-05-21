import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>
                About Me
            </h1>
            <p>
                sample text
            </p>
            <p><Link to="/contact">Contact Me</Link></p>
        </div>
    )
}

export default AboutPage