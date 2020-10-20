import React from 'react';
import { DataBlog } from '../../components/DataBlog';
import BlogInfo from '../../components/BlogInfo';
import { Div, Section } from './Style';

const Blog = () => {
  return (
    <Div>
      <h1>Blog</h1>
      <Section>
        {DataBlog.map(data => (
          <section key={data.id}>
            <BlogInfo id={data.id} title={data.title} description={data.description} img={data.img}/>
          </section>
        ))}
      </Section>
    </Div>
  )
};

export default Blog;