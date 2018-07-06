import Layout from '../components/Layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const listStyle = {
    lineHeight: 2
}
 
const Resources = (props) => (
	<Layout>
		<h3>Resources</h3>
        <ul style={listStyle}>
            {props.resources.map((mpd) =>
                <li key={mpd._id}>
                    <Link href={mpd.link}>
                        <a>{mpd.title}</a>
                    </Link>
            </li>)} 
        </ul>
    </Layout>
);

Resources.getInitialProps = async function() {  
    try {
        const list = await fetch('http://localhost:3000/api/resources');
        const data = await list.json();
        return {
            resources: data
        }
    } catch(e) {
        console.log(e);    
    }    
}

export default Resources;
