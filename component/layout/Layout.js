import Header from '../header/HeaderComponent'

const Layout = (props) => (
    <div>
        <Header/>
         {props.children} 
    </div>
)

export default Layout;