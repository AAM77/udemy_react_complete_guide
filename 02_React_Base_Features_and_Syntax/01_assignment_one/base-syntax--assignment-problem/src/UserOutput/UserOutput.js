import React from 'react';

import './UserOutput.css'

const userOutput = (props) => {
  return(
    <div className='UserOutput'>
      <p onClick={ props.click }>
        { props.username } says: <br />
        Aut et sunt amet labore, se quis iudicem, summis admodum ne aute magna ut non de
        dolore occaecat sed tempor in nam anim admodum, excepteur quae offendit probant
        eu mentitum dolor senserit ita quo magna relinqueret. Commodo irure summis
        consequat quis. Ullamco aute quibusdam et fabulas minim ita excepteur
        eruditionem.
      </p>
      <p onClick={ props.click }>
        { props.username } also says: <br />
        Veniam vidisse exercitation si elit nostrud a duis amet, ullamco non sunt ab si
        eiusmod ut voluptate non incurreret multos quibusdam, proident aute velit ex
        quem hic quo offendit ut deserunt qui malis in singulis sed tamen. Noster
        constias et exquisitaque de singulis dolor quae constias velit o eiusmod minim
        ipsum senserit quorum quo nulla ingeniis cernantur.
      </p>
    </div>
  )
}

export default userOutput;
