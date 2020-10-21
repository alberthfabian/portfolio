import React from 'react';
import { Link } from 'react-router-dom';
import { useServer } from '../../Context'
import { Article } from './Style';

const BlogInfo = (props) => {

  const { id, title, description, img } = props;

  const { Blog } = useServer();

  return (   
    <Article>
      <div>
        <img src={img} alt={title}/>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/blog/${id}`}>
        <button onClick={() => Blog(id)}>Read more</button>
      </Link>
    </Article>
  )
};

export default BlogInfo;