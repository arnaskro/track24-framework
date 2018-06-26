import React, {Component} from 'react'
import {render} from 'react-dom'

import { Button, List } from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>Framework demo</h1>
      <Button text="Say Hello" callback={() => alert("hello")} />
      <List items={["Test", "123", "Hello", 123456]} />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
