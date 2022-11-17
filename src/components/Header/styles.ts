import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
`

export const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;
`

export const LocationWrapper = styled.div`
  height: 2.375rem;

  padding: 0.5rem;

  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.PURPLE_LIGHT};

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LocationLabel = styled.span`
  color: ${({ theme }) => theme.PURPLE_DARK};
  font-size: 0.875rem;
  line-height: 1.125rem;
`

export const CartWrapper = styled.button`
  height: 2.375rem;

  padding: 0.5rem;

  border: 0;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.YELLOW_LIGHT};

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  transition: all 0.35s ease-in-out;

  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.YELLOW_DARK};

    > div {
      background-color: ${({ theme }) => theme.YELLOW};
    }
  }
`

export const AccountWrapper = styled.div`
  position: absolute;

  top: -20%;
  left: 70%;

  width: 1.25rem;
  height: 1.25rem;

  background-color: ${({ theme }) => theme.YELLOW_DARK};

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.35s ease-in-out;
`

export const AccountLabel = styled.span`
  color: ${({ theme }) => theme.WHITE};
  font-size: 0.75rem;
  line-height: 0.9475rem;
`
