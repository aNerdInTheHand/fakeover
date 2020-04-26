import React, { useState } from 'react'

const content = () => (
  <div>
    You are the tyrannical sweatshop billionaire owner of a football team.
    Each day you'll face a new dilemma.
    Make decisions to benefit only yourself!
    Score points by:
    <div>
      <ul>
        <li>increasing your personal wealth by leeching as much money out of the club as possible</li>
        <li>reducing fan happiness as much as possible and as frequently as possible</li>
        <li>keeping the team as close to 17th in the table as possible without dropping into the bottom three</li>
        <li>keeping pundit opinion of yourself higher than fan happiness.</li>
      </ul>
    </div>
    <div>
      The game will be over if:
      <ul>
        <li>fan happiness is too high for too long or reaches 0</li>
        <li>the club funds or your personal value hit £0</li>
        <li>the club is relegated (finishes below 17th).</li>
      </ul>
    </div>
  </div>
)
const title = () => <div>Click or tap to view instructions</div>

const About = props => {
  const [showContent, setShowContent] = useState(false)
  const collapseSymbol = '-'
  const expandSymbol = '+'
  const borderColor = showContent ? '#c0ff33' : '#b000b5'
  const sectionStyle = {
    border: `1px solid ${borderColor}`,
  }
  const symbolStyle = {
    color: '#bada55',
    'fontWeight': '800'
  }
  return (
    <div
      className='section'
      onClick={() => setShowContent(!showContent)}
      style={sectionStyle}
    >
      <span
        className='expand-collapse'
        role='img'
        aria-label='expand or collapse'
        style={symbolStyle}
      >
        {showContent ? collapseSymbol : expandSymbol}
      </span>
      <div>
        {showContent
          ? content()
          : title()
        }
      </div>
    </div>
  )
}

export default About
