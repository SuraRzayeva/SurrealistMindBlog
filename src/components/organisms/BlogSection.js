import React, { useContext } from 'react'
import { StyledBlogSection } from '../../style/StyledBlogSection'
import Parallax from 'react-rellax'
import Context from '../../context/Context'

const BlogSection = () => {
  const { blogActive } = useContext(Context)

  return (
    <StyledBlogSection blogActive={blogActive}>
      <Parallax speed={5}>
        <div className="title">
          <p>Selected Blog Posts</p>
        </div>
        <div className="lineDiv lineDiv1">
          <Parallax speed={-2} className="circle"></Parallax>
          <div className="line"></div>
        </div>
        <Parallax speed={-3} className="image-div image1"></Parallax>
        <Parallax speed={-3} className="image-div image2"></Parallax>
        <Parallax speed={-3} className="image-div image3"></Parallax>

        <div className="quote-div">
          <p>Let's play a game.</p>
          <p>We ask questions...</p>
          <p>...and when it starts to hurt...</p>
          <p>we drink.</p>
        </div>

        <div className="blog-title">
          <p> What is the point?</p>
        </div>

        <div className="lineDiv lineDiv2">
          <Parallax speed={-2} className="circle"></Parallax>
          <div className="line"></div>
        </div>
        <div className="blog-title">
          <p className="p-left"> They say I have sad eyes.</p>
        </div>
        <div className="lineDiv lineDiv2">
          <Parallax speed={-1} className="circle"></Parallax>
          <div className="line"></div>
        </div>
        <div className="blog-title">
          <p> Time to free yourself.</p>
        </div>
        <div className="lineDiv lineDiv2">
          <Parallax speed={-1} className="circle"></Parallax>
          <div className="line"></div>
        </div>
        <div className=" title">
          <p>More Blog Posts</p>
        </div>
      </Parallax>
      <Parallax speed={-0.5} className="bottom-quote">
        <div className="quote">
          <p>Life is simple...</p>
          <p>if you don't think too much.</p>
          <p>Why do you think too much?</p>
          <p>...does it help you?</p>
        </div>
      </Parallax>
    </StyledBlogSection>
  )
}

export default BlogSection
