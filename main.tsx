import * as React from 'react'
import { render } from 'react-dom'

import './main.less'

const Greeting: React.SFC<{ hello: string }> = ({ hello }) => (
  <div style={{ padding: '20px' }}>
    {hello}
  </div>
)

const rootNode: HTMLDivElement = document.querySelector('#app')

render(<Greeting hello='Howday' />, rootNode)
