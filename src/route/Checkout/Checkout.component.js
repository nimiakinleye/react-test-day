import ContentWrapper from 'Component/ContentWrapper';
import './Checkout.override.style.scss';

import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component'
import FormStep from '../../Components/FormStep/FormStep.component'

export class CheckoutComponent extends SourceCheckout {

  renderSteps () {
    const {checkoutStep} = this.props
    // return (
    //   <FormStep />
    // )
    return (
      <FormStep checkoutStep={checkoutStep} steps={this.stepMap} />
    )
    // const steps = this.stepMap
    // const stepsKey = Object.keys(steps)
    // const stepsList = stepsKey.map(step => {
    //   return ({...steps[step], joinString: steps[step].title.toUpperCase().split(' ').join('_')})
    // })
    // const currentIndex = stepsKey.indexOf(checkoutStep, 0)
    // console.log(stepsList)

    // return (
    //   stepsList.map((step, i) => {
    //     return (
    //       <div key={i} block='Steps' elem={`Step ${i <= currentIndex ? 'Active' : ''}`}>
    //         <div block='Steps' elem='index'>{ i+1 }</div>
    //         <div block='Steps' elem='title'>{ step.title }</div>
    //       </div>
    //     )
    //   })
    // )
  }

  render () {
    return (
      <main block="Checkout">
                <ContentWrapper
                wrapperMix={ { block: 'Checkout', elem: 'Steps' } }
                label={ __('Checkout page') }
                >
                    { this.renderSteps() }
                    
                </ContentWrapper>
                
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
    )
  }

}

export default CheckoutComponent