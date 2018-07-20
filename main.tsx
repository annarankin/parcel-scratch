import * as React from 'react'
import { render } from 'react-dom'
import { Button } from 'antd'

import './main.less'
import 'antd/dist/antd.css'

const Greeting: React.SFC<{ hello: string }> = ({ hello }) => (
  <div style={{ padding: '20px' }}>
    <Button>{hello}</Button>
  </div>
)

const rootNode: HTMLDivElement = document.querySelector('#app')

render(<Greeting hello="Howday" />, rootNode)
