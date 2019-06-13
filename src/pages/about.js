import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>
                About Me
            </h1>
            <p>
                Hi, I'm an aspiring software developer currently studying at Monash University in Melbourne, Australia
            </p>
            <p>
                Visit my github by clicking the icon below
            </p>
            <a href="https://github.com/GuardianLux"><img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Ficonsimple-logotypes%2F512%2Fgithub-512.png&f=1" /></a>
        </Layout>
    )
}

export default AboutPage