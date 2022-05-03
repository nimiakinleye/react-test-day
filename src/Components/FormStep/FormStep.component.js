import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace Component/FormStep/Component */
export class FormStep extends PureComponent {

  static propTypes = {
    checkoutStep: PropTypes.string,
    steps: PropTypes.object
};

  renderSteps () {
    const {checkoutStep, steps} = this.props
    console.log(this.props)
    const stepsKey = Object.keys(steps)
    const stepsList = stepsKey.map(step => {
      return ({...steps[step], joinString: steps[step].title.toUpperCase().split(' ').join('_')})
    })
    const currentIndex = stepsKey.indexOf(checkoutStep, 0)
    console.log(stepsList)

    return (
      stepsList.map((step, i) => {
        return (
          <div key={i} block='Steps' elem={`Step ${i <= currentIndex ? 'Active' : ''}`}>
            <div block='Steps' elem='index'>{ i+1 }</div>
            <div block='Steps' elem='title'>{ step.title }</div>
          </div>
        )
      })
    )
  }

  render () {
    return (
      <>
        { this.renderSteps() }
      </>
    )
  }
}

export default FormStep