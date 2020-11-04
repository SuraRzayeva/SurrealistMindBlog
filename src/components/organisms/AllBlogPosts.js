import React, { useCallback, useContext, useEffect } from 'react'
import { StyledAllBlogPosts } from '../../style/StyledAllBlogPosts'
import Parallax from 'react-rellax'
import Context from '../../context/Context'
import { Helmet } from 'react-helmet'
import DispatchContext from '../../context/DispatchContext'
import { Link } from 'react-router-dom'

const AllBlogPosts = () => {
  const { blogActive } = useContext(Context)
  const { setBlogActive, setHomeActive, setAboutActive, setContactActive, setSingleBlogActive } = useContext(DispatchContext)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    setBlogActive(true)
    setHomeActive(false)
    setContactActive(false)
    setAboutActive(false)
  }, [])

  return (
    <StyledAllBlogPosts blogActive={blogActive}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Posts</title>
        <link rel="canonical" href="http://surrealistmind.com" />
      </Helmet>
      <Parallax speed={3}>
        <div className="title">
          <p>All Blog Posts</p>
        </div>
        <div className="lineDiv lineDiv1">
          <Parallax speed={-2} className="circle"></Parallax>
          <div className="line"></div>
        </div>

        <div className="quote-div">
          <Parallax speed={6}>
            <p>We are the children of chaos...</p>
          </Parallax>
          <Parallax speed={5}>
            <p>because order is intimidating.</p>
          </Parallax>
          <Parallax speed={4}>
            <p>We are loud...</p>
          </Parallax>
          <Parallax speed={3}>
            <p>...because silence is scary.</p>
          </Parallax>
        </div>

        <div className="blog-title">
          <Parallax speed={-2} className="image-div imageRight image1"></Parallax>
          <p className="date">2020, September 2</p>
          <Link to="/BlogPosts/1">
            <p> We are too Loud</p>
          </Link>
        </div>

        <div className="lineDiv lineDiv2">
          <Parallax speed={-2} className="circle"></Parallax>
          <div className="line"></div>
        </div>
        <div className="blog-title">
          <Parallax speed={-2} className="image-div imageLeft image2"></Parallax>
          <p className="date p-left">2020, February 27</p>
          <p className="p-left"> Time to free yourself</p>
        </div>
        <div className="lineDiv lineDiv2">
          <Parallax speed={-1} className="circle"></Parallax>
          <div className="line"></div>
        </div>
        <div className="blog-title">
          <Parallax speed={-2} className="image-div imageRight image3"></Parallax>
          <p className="date">2020, September 2</p>
          <p> They say I have sad eyes.</p>
        </div>
        <div className="lineDiv lineDiv2">
          <Parallax speed={-1} className="circle"></Parallax>
          <div className="line"></div>
        </div>
        <div className="blog-title">
          <Parallax speed={-2} className="image-div imageLeft image4"></Parallax>
          <p className="date p-left">2020, February 27</p>
          <p className="p-left"> Morality</p>
        </div>
        <div className="lineDiv lineDiv2">
          <Parallax speed={-1} className="circle"></Parallax>
          <div className="line"></div>
        </div>
      </Parallax>
      <Parallax speed={-0.5} className="bottom-quote"></Parallax>
    </StyledAllBlogPosts>
  )
}

export default AllBlogPosts
