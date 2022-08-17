import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin: 0 auto;
  margin-top: -5.5rem;

  width: ${(props) => props.theme.screens.desktop};
  background: ${(props) => props.theme.colors['base-profile']};
  padding: 2rem 2.5rem;
  border-radius: 10px;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
`
export const ProfileImageContainer = styled.div`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`

export const InfoProfileContainer = styled.div`
  display: grid;
  gap: 0.5rem;
`

export const InfoProfileContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const InfoProfileContainerBody = styled.div``
export const InfoProfileContainerFooter = styled.footer`
  display: flex;
  gap: 1.5rem;
`

export const InfoItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
