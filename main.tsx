import * as React from 'react'
import { render } from 'react-dom'
import { Button, Steps } from 'antd'
const Step = Steps.Step;

import 'antd/dist/antd.css'
import './main.less'

type StepperState = { currentStep: number }

class Stepper extends React.Component {
  state: StepperState = { currentStep: 0 }

  incrementStep = () => {
    this.setState((prevState: StepperState): StepperState => {
      const nextStep: number = Math.min(prevState.currentStep + 1, 2)
      return { currentStep: nextStep }
    })
  }

  decrementStep = () => {
    this.setState((prevState: StepperState): StepperState => {
      const prevStep: number = Math.max(prevState.currentStep - 1, 0)
      return { currentStep: prevStep }
    })
  }

  render() {
    const { currentStep } = this.state

    return(
      <div style={{ padding: '20px' }}>
        <Steps direction="vertical" current={currentStep}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>

        <Button onClick={this.decrementStep} style={{ marginRight: '20px'}}>Previous</Button>
        <Button onClick={this.incrementStep}>Next</Button>
      </div>
    )
  }
}

const rootNode: HTMLDivElement = document.querySelector('#app')

render(<Stepper />, rootNode)
