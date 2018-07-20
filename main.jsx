import React from 'react'
import { render } from 'react-dom'

import './main.less'

const greeting = (
  <div style={{ padding: '20px' }}>
    Helloooooo from JSX
 </div>
)

const rootNode = document.querySelector('#app')
render(greeting, rootNode)
