import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { QuantityInput } from '../../../../components/QuantityInput'

import { formatMoney } from '../../../../utils/formatMoney'

import {
  AddCartWrapper,
  CardFooter,
  CoffeCardContainer,
  CurrencyLabel,
  CurrencyValue,
  Description,
  Name,
  Tags,
} from './styles'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  const formattedPrice = formatMoney(coffee.price)

  return (
    <CoffeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="Americano" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <CurrencyLabel>R$</CurrencyLabel>
          <CurrencyValue>{formattedPrice}</CurrencyValue>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />

          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeCardContainer>
  )
}
