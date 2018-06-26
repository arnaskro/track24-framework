import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import { List } from 'src/'

describe('List', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('renders the component', () => {
    render(<List items={[]}/>, node, () => {
      expect(node.innerHTML).toContain('')
    })
  })
})
