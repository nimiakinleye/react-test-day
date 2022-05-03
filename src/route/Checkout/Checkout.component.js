import ContentWrapper from 'Component/ContentWrapper';

import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component'

export class CheckoutComponent extends SourceCheckout {

  renderTitle () {
    return 'Hello'
  }

}

export default CheckoutComponent