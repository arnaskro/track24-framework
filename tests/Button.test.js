import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import { Button } from 'src/'

describe('Button', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('renders the component', () => {
    render(<Button text="Button text" callback={() => {}}/>, node, () => {
      expect(node.innerHTML).toContain('Button text')
    })
  })

  it('accepts text prop', () => {
    render(<Button text="Button text" callback={() => {}}/>, node, () => {
      expect(node.innerHTML).toContain('Button text')
    })
  })
})
