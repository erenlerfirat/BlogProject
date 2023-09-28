import { BlogModel } from '../../Models/BlogModel';
import { useDispatch } from "react-redux";
import { AddBlog } from '../../Store/BlogSlice';

function Blog(props: BlogModel) {
    const dispatch = useDispatch();
    const BlogHandler = () => {
        dispatch(AddBlog({isRead:false}))
    }
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