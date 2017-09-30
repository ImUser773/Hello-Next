import Link from 'next/link';
import style from 'styled-components'
import Layout from '../component/layout/Layout'

const A = style.a `
    font-size: 20px;
    color: red;
    cursor: pointer
`
const Index = () => (
    <div>
         <Layout> 
        <Link href="/about"> 
            <A>About Page </A>
        </Link>
        <Link href="/about">
            <button> About </button>
        </Link>
        {/* query */}
        <Link href={{ pathname: '/about', query: {name: 'Champ'}}}>
            <a> Query </a>
        </Link>
        <Link href="/about">
            <A>about sds</A>
        </Link>
        <h1>  Hello Next </h1>
        </Layout>
    </div>
);


export default Index;