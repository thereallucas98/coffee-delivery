import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  width: 100%;

  border-radius: 6px 36px 6px 36px;
  background-color: ${({ theme }) => theme.BASE_CARD};

  padding: 1.25rem;
  padding-top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const Tags = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    padding: 0.25rem 0.5rem;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.YELLOW_LIGHT};

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 0.8125rem;
    color: ${({ theme }) => theme.YELLOW_DARK};
    text-transform: uppercase;
  }
`

export const Name = styled.span`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: ${({ theme }) => theme.BASE_SUBTITLE};
`

export const Description = styled.span`
  font-family: 'Roboto';
  font-weight: 40;
  font-size: 0.875rem;
  line-height: 1.1375rem;
  color: ${({ theme }) => theme.BASE_LABEL};

  text-align: center;
`

export const CardFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`

export const CurrencyLabel = styled(Description)``

export const CurrencyValue = styled(Name)``

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;

    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 6px;
    background: ${({ theme }) => theme.PURPLE_DARK};
    color: ${({ theme }) => theme.BASE_CARD};

    margin-left: 0.3rem;

    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.PURPLE};
    }
  }
`
