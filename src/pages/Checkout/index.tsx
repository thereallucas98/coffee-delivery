import { Coffees } from './components/Coffees'
import { OrderForm } from './components/OrderForm'

import { CompleteOrderContainer } from './styles'

export function Checkout() {
  return (
    <CompleteOrderContainer>
      <OrderForm />
      <Coffees />
    </CompleteOrderContainer>
  )
}
