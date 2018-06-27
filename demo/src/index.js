import React, {Component} from 'react'
import {render} from 'react-dom'

import { Button } from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>Framework demo</h1>
      <Button text='Say Hello' onClick={() => alert('hello')} />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
