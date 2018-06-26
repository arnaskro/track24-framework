import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import { Input } from 'src/'

describe('Input', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('renders the component', () => {
    render(<Input label='Label'/>, node, () => {
      expect(node.innerHTML).toContain('Label')
    })
  })
})
