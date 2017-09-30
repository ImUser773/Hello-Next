import Layout from '../component/layout/Layout';

const Post = (props) => (
    <div> 
        <h1> {props.show.name} </h1>
        <h1>{props.show.summary.replace(/<p>[/]?p/g, '')}</h1>
        <img src={props.show.image.medium}></img>
    </div>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post