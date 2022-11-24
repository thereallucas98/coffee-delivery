import styled from 'styled-components'

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Title = styled.span`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3rem;
  color: ${({ theme }) => theme.BASE_SUBTITLE};
`

export const Subtitle = styled.span`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.1375rem;
  color: ${({ theme }) => theme.BASE_TEXT};
`
