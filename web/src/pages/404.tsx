
import { Link } from 'gatsby'
import React from 'react'
import { Layout } from '../layout'

const NotFound = () => {
    return <Layout>
        <div style={{textAlign : "center",fontSize : "1.5rem", marginTop : "2rem"}}>
            Sorry. This page does not exist. Visit our <Link to="/home">homepage</Link>.
        </div>
    </Layout>
}
export default NotFound
