import React, { useContext, useEffect } from 'react'
import Context from '../../context/Context'
import DispatchContext from '../../context/DispatchContext'
import { StyledAboutMe } from '../../style/StyledAboutMe'
import Parallax from 'react-rellax'

const AboutMe = () => {
  const {} = useContext(Context)
  const { setAboutActive, setHomeActive, setBlogActive, setContactActive } = useContext(DispatchContext)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    setAboutActive(true)
    setHomeActive(false)
    setBlogActive(false)
    setContactActive(false)
  }, [])

  return (
    <StyledAboutMe>
      <Parallax speed={-4}>
        <div className="img-div"></div>
      </Parallax>

      <div className="text-div">
        <Parallax speed={8}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit deleniti cupiditate, eveniet sequi hic rem voluptas eum aspernatur illum et deserunt ipsum consequatur, iste magnam. Quas deserunt aut necessitatibus. Alias aut id sint consectetur quaerat ullam quis hic quidem velit deserunt eius voluptate
            repellendus ipsum nobis ad doloribus voluptates excepturi incidunt impedit, veniam iusto corporis accusantium, beatae natus. Tenetur! Soluta explicabo doloremque aut fuga unde, veritatis natus ad dolorum amet earum maiores doloribus possimus magni, facilis at molestiae harum tempora culpa sunt itaque non
            neque cupiditate.
          </p>
        </Parallax>
        <Parallax speed={7}>
          <p>
            onsequuntur, eligendi obcaecati! Officiis nostrum similique ducimus tenetur, quia eligendi, harum velit ab ullam facilis corporis quisquam animi. Quo a ipsa, cum explicabo eos natus. Repellat minima aspernatur quaerat aliquam ea veritatis illum? Quibusdam eum ab ex enim, autem reprehenderit dolore corrupti
            ad necessitatibus, reiciendis aliquam, nemo dignissimos error amet natus expedita. Illo voluptatum nesciunt voluptatibus tenetur repellendus molestiae eveniet in, necessitatibus quas? Unde dicta ea autem quo consequatur rerum quasi numquam at magnam dolor perspiciatis corporis omnis reprehenderit et quod
            ipsam expedita nulla atque, ab aliquid vero architecto
          </p>
        </Parallax>
        <Parallax speed={6}>
          <p>
            Ipsa accusantium! Accusantium, iure. Possimus quasi at molestiae facere voluptatibus fugiat, nesciunt aspernatur tenetur laboriosam et? Dolores commodi quos eaque, eum optio minus possimus beatae sed nesciunt provident, laborum quis nisi facilis, reiciendis debitis? Obcaecati doloremque incidunt ipsam? Ea
            quas nostrum nulla facere non aspernatur at, enim nam quo, vel tenetur suscipit placeat ex laborum quae doloremque repudiandae! Quia qui aliquam sed in doloribus! Officiis, harum sint? Laboriosam nulla ullam et, cum impedit asperiores eum doloribus? Aliquid magni velit deleniti voluptatem maxime provident
            atque, quasi est beatae distinctio hic corrupti ipsum commodi. Vero, architecto. Nemo, sint esse, perferendis laboriosam tempore modi, ratione voluptate id sunt cum praesentium sit iure rerum iste eius assumenda debitis. Magnam architecto consequatur vel, quasi nesciunt deserunt assumenda inventore
            perspiciatis.
          </p>
        </Parallax>
      </div>
      <div className="quote"></div>
    </StyledAboutMe>
  )
}

export default AboutMe
