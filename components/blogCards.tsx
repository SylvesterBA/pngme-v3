import './BlogCards.css'
import { useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";


const query = `
{
  blogPostCollection{
   items{
     title
     sys{
       id
     }
     category{
       title
     }
     featuredImage{
       fileName
       url
     }
     postCreatedAt
     slug
     author
     body{
       json
     }
     extract
   }
 }
}
 `


const BlogCards = () => {

  const [getBlog, setBlog] = useState([]);
  const [titleSearch, setTitleSearch] = useState([]);
  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/5ern7dz6mdq9/?access_token=uwrQeEm8dxtiaQErBiPWWPXVVeyIwxJsyMXmDk2yif0`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then(response => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setBlog(data.blogPostCollection.items);
        setTitleSearch(data.blogPostCollection.items);
      });
  }, []);

  if (!getBlog.length) {
    return (
      <div className='mt-10 md:mt-24'>
        <p className='leading-6 text-gray-900 font-Proxima-Nova-Bold'>
          Blogs loading
        </p>
      </div>
    );
  }

  const filterTitles = (e: ChangeEvent<HTMLInputElement>) => {

    const search = e.target.value.toLowerCase()
    const filteredNames = getBlog.filter((titleSearch: any) => titleSearch.title.toLowerCase().includes(search))
    setTitleSearch(filteredNames)
  }

  return (
    <div className='bg-white '>
      <div className='container px-4 py-16 mx-auto md:py-20'>
        <div className=''>
          <h2 className='mt-8 text-xlg text-pngme-fuchsia md:text-4xl'>
            Blog
          </h2>
          <div>
            <input type="text" placeholder='search here' onChange={(e) => filterTitles(e)} />
          </div>
        </div>
        <div className='mt-10 md:mt-24'>
          <div className='sm:space-y-0 sm:grid sm:grid-cols-12 gap-10'>
            {/* {titleSearch.map((blog) => (
              <Link className='sm:col-span-6 md:col-span-4 ' to={`/blog/${blog.slug}`} key={blog.slug}>
                <article id={blog.slug} >
                  <div>
                    <div className='leading-6 text-gray-900 font-Proxima-Nova-Bold capitalize'>
                      {blog.category.title}
                    </div>
                    <div className=''>
                      <img
                        src={blog.featuredImage == null ? "https://images.ctfassets.net/iu2kp5ba77sm/5Y5VeCxGxroQPTiHloLN7r/5a7a0987d95f38547d7dbeee0549f6f0/FeatureLibrary3.png" : blog.featuredImage.url}
                        alt={blog.featuredImage == null ? "Placeholder image" : blog.featuredImage.fileName} />
                    </div>
                    <p className='leading-6 text-gray-900 font-Proxima-Nova-Bold'>
                      {blog.title}
                    </p>
                  </div>
                  <p className='mt-2 text-black ' >
                    {blog.extract}
                  </p>
                  <div className='capitalize mt-2'>
                    {blog.author}
                  </div>
                  <div>
                    {new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(blog.postCreatedAt))}
                  </div>
                </article>
              </Link>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCards
