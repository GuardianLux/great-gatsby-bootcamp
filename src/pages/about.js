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
            <a href="https://github.com/GuardianLux"><img src="./GitHub-Mark-64px.png" /></a>
        </Layout>
    )
}

export default AboutPage