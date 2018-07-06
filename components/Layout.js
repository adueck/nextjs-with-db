import Header from './Header'
import Head from 'next/head'

const layoutStyle = {
    margin: 10,
    padding: 10,
    fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    lineHeight: 1.42857143,
    color: `#333`,
    backgroundColor: `#fff`
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Head>
            <title>Live Example</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
        </Head>
        <Header />
        {props.children}
    </div>
)

export default Layout
