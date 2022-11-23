import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

import CoffeeImg from '../../assets/images/coffee.png'
import { coffees } from '../../data/coffees'
import { CoffeeCard } from './components/CoffeeCard'

import {
  CardContainer,
  Header,
  CardTitle,
  CardWrapper,
  HomeContainer,
  IconWrapper,
  InfoWrapper,
  SubTitle,
  Title,
  MainContent,
  MainTitle,
  CoffeeList,
} from './styles'

interface CardProps {
  title: string
  icon: string
  bgColor: 'YELLOW' | 'PURPLE' | 'YELLOW_DARK' | 'BASE_TEXT'
}

const cardOptions: CardProps[] = [
  {
    title: 'Compra simples e segura',
    icon: 'shopping',
    bgColor: 'YELLOW_DARK',
  },
  {
    title: 'Embalagem mantém o café intacto',
    icon: 'box',
    bgColor: 'BASE_TEXT',
  },
  {
    title: 'Entrega rápida e rastreada',
    icon: 'timer',
    bgColor: 'YELLOW',
  },
  {
    title: 'O café chega fresquinho até você',
    icon: 'coffee',
    bgColor: 'PURPLE',
  },
]

function Card({ title, icon, bgColor }: CardProps) {
  const { BACKGROUND } = useTheme()

  function renderingIcon() {
    switch (icon) {
      case 'shopping':
        return <ShoppingCart size={13} color={BACKGROUND} weight="fill" />
      case 'box':
        return <Package size={13} color={BACKGROUND} weight="fill" />
      case 'timer':
        return <Timer size={13} color={BACKGROUND} weight="fill" />
      case 'coffee':
        return <Coffee size={13} color={BACKGROUND} weight="fill" />
      default:
        return <ShoppingCart size={13} color={BACKGROUND} weight="fill" />
    }
  }

  return (
    <CardContainer>
      <IconWrapper bgColor={bgColor}>{renderingIcon()}</IconWrapper>
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  )
}

export function Home() {
  return (
    <HomeContainer>
      <Header>
        <InfoWrapper>
          <Title>
            {'Encontre o café perfeito\npara qualquer hora do dia\n'}
          </Title>
          <SubTitle>
            {
              'Com o Coffee Delivery você recebe seu café onde estiver, a\nqualquer hora'
            }
          </SubTitle>

          <CardWrapper>
            {cardOptions.map((item) => (
              <Card
                title={item.title}
                icon={item.icon}
                bgColor={item.bgColor}
                key={`${item.icon}-${item.icon}`}
              />
            ))}
          </CardWrapper>
        </InfoWrapper>
        <img src={CoffeeImg} alt="Coffee Delivery" />
      </Header>

      <MainContent>
        <MainTitle>Nossos cafés</MainTitle>

        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
      </MainContent>
    </HomeContainer>
  )
}
