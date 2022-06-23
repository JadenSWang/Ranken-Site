import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/menu.css"
import { getMenu } from "../source/getMenu.source"


const TestMenu = () => {
    useEffect(() => {
        getMenu()
    }, [])

    return (
        <Layout>
            <SEO title="Online Ordering" />
            <div>FUSKDLFJLK</div>
        </Layout>
    )
}

export default TestMenu
