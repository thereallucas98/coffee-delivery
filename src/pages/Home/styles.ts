import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 3rem;

  margin-top: 5.875rem;
`

export const InfoWrapper = styled.div``

export const Title = styled.span`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.9rem;
  color: ${({ theme }) => theme.BASE_TITLE};
`

export const SubTitle = styled.span`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: ${({ theme }) => theme.BASE_SUBTITLE};

  margin-top: 1rem;
`

export const CardWrapper = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.5rem;
  row-gap: 1rem;
`

/**
 * Card Styles
 */

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconWrapperProps {
  bgColor: 'YELLOW' | 'PURPLE' | 'YELLOW_DARK' | 'BASE_TEXT'
}

export const IconWrapper = styled.div<IconWrapperProps>`
  height: 2rem;
  width: 2rem;

  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, bgColor }) => theme[`${bgColor}`]};
`

export const CardTitle = styled.span`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.3rem;
  color: ${({ theme }) => theme.BASE_TEXT};
`
