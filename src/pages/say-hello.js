import * as React from 'react'
import Greeting from '../components/greeting'
import { Link } from 'gatsby'

// Rendering the <Greeting> component
const SayHello = () => {
  return (
    <div>
      <Greeting name="Megan" />
      <Greeting name="Obinna" />
      <Greeting name="Generosa" />
      <Link to="/">
        This text is passed into the Link component's children prop!
      </Link>
    </div>
  )
}

export default SayHello