import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>
                Contact
            </h1>
            <p>
                <a href="mailto:mhen0009@student.monash.edu">Email me</a>
            </p>
        </Layout>
    )
}

export default ContactPage