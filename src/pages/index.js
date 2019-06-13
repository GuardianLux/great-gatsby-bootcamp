import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>
                Hello!
            </h1>
            <h2>
                Welcome to my site, where I'll be posting information about projects I'm working on in my freetime, as well as my experiences completing my Masters
            </h2>
            <p>Need to get in touch? <Link to="/contact">Contact Me.</Link></p>
        </Layout>
    )
}

export default IndexPage