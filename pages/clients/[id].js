export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map(client => {
    return {
      params: { id: client.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

// based on paths
// id of each attached to context object
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { client: data }
  }
}

const Details = (props) => {
  console.log("props", props)
  const { client: { name, phone } } = props
  return (
    <div>
      <h1>Client Details</h1>
      <p>{name}</p>
      <p>{phone}</p>
    </div>
  )
}


export default Details;