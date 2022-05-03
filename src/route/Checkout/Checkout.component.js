import ContentWrapper from 'Component/ContentWrapper';
import './Checkout.override.style.scss';

import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component'

export class CheckoutComponent extends SourceCheckout {

  renderSteps () {
    const {checkoutStep} = this.props
    const steps = this.stepMap
    const stepsKey = Object.keys(steps)
    const stepsList = stepsKey.map(step => {
      return (steps[step])
    })

    return (
      stepsList.map((step, i) => {
        // console.log(checkoutStep)
        const likeCheckoutStep = step.title.toUpperCase().split(' ').join('_')
        console.log(likeCheckoutStep)
        return (
          <div block='Steps' elem={`Step ${checkoutStep === likeCheckoutStep ? 'Active' : ''}`}>
            <div block='Steps' elem='index'>{ i+1 }</div>
            <div block='Steps' elem='title'>{ step.title }</div>
          </div>
        )
      })
    )
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