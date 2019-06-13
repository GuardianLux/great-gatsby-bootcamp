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
            <img src="https://avatars3.githubusercontent.com/u/41714544?s=400&u=96a66c0c9f05fa97071298dc0c219653788e57c0&v=4" />
            <h2>
                Welcome to my site, where I'll be posting information about projects I'm working on in my freetime, as well as my experiences completing my Masters
            </h2>
        </Layout>
    )
}

export default IndexPage