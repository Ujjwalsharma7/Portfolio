import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Expereience</h2>

      <div className="container experience__container">
        <div className="experience__webd">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <div>

                <h4>HTML</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <div>

                <h4>css</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <div>

                <h4>JavaScript</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <div>

                <h4>Bootstrap</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <div>

                <h4>Tailwind</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <div>

                <h4>NodeJs</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <div>

                <h4>MongoDB</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <div>

                <h4>React</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        {/* end of webd */}
        <div className="experience__others">
          <h3>Others</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Pandas</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Scikit-Learn</h4>
              <small className="text-light">Beginner</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Tensorflow</h4>
              <small className="text-light">Beginner</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>C</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>C++</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>Arduino</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill />
              <h4>MATLAB</h4>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
