import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>
                About Me
            </h1>
            <p>
                Hi, I'm an aspiring software developer currently studying at Monash University in Melbourne, Australia
            </p>
            <p><Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
}

export default AboutPage