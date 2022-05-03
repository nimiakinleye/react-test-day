import ContentWrapper from 'Component/ContentWrapper';
import './Checkout.override.style.scss';

import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component'

export class CheckoutComponent extends SourceCheckout {

  renderSteps () {
    const steps = this.stepMap
    const stepsKey = Object.keys(steps)
    console.log(stepsKey)
    const stepsList = stepsKey.map(step => {
      return (steps[step])
    })
    console.log(stepsList)

    return (
      stepsList.map((step, i) => {
        return (
          <div block='Steps' elem='Step'>
            <div elem='index'>{ i+1 }</div>
            <div elem='title'>{ step.title }</div>
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

// export * from 'SourceRoute/Checkout/Checkout.component';
// export { default } from 'SourceRoute/Checkout/Checkout.component';

export default CheckoutComponent