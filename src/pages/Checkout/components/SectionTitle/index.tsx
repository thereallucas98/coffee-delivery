import { ReactNode } from 'react'

import { SectionTitleContainer, Subtitle, Title } from './styles'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function SectionTitle({ icon, title, subtitle }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}

      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
    </SectionTitleContainer>
  )
}
