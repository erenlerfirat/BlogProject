import { BlogModel } from '../../Models/BlogModel'

function Blog(props:BlogModel) {
  return (
      <>
          <h3>{props.title}</h3>
          <ul>
              <li>{props.author}</li>
              <img src={props.img} alt=''></img>
          </ul>          
          <p>{props.description}</p>
      </>
  )
}

export default Blog