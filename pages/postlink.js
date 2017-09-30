import Layout from '../component/layout/Layout'
import Link from 'next/link'

const PostLink = (props) => (
    <li>
        <Link as={`${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="1" title="page1"/>
            <PostLink id="2" title="page2"/>
            <PostLink id="3" title="page3"/>
            <PostLink id="4" title="page4"/>
        </ul>
    </Layout>
)