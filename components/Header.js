import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link prefetch href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link prefetch href="/resources">
            <a style={linkStyle}>Resources</a>
        </Link>
        <Link href="/thisworks">
	    <a style={linkStyle}>This Works</a>
	</Link> 
    </div>
)

export default Header
