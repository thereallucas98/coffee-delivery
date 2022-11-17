import { MapPin, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

import LogoCoffeeDelivery from '../../assets/logo.svg'

import {
  AccountLabel,
  AccountWrapper,
  CartWrapper,
  HeaderContainer,
  LocationLabel,
  LocationWrapper,
  OptionsWrapper,
} from './styles'

export function Header() {
  const { PURPLE, YELLOW } = useTheme()

  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt="Coffee Delivery" />

      <OptionsWrapper>
        <LocationWrapper>
          <MapPin size={22} weight="fill" color={PURPLE} />
          <LocationLabel>João Pessoa, PB</LocationLabel>
        </LocationWrapper>

        <CartWrapper>
          <ShoppingCart size={22} weight="fill" color={YELLOW} />
          <AccountWrapper>
            <AccountLabel>1</AccountLabel>
          </AccountWrapper>
        </CartWrapper>
      </OptionsWrapper>
    </HeaderContainer>
  )
}
