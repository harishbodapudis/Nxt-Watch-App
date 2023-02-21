import styled from 'styled-components'

export const NotFoundDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const NotFoundBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const NotFoundDataBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${props => (props.mode ? '#000000' : '#f4f4f4')};
  height: 89vh;
  overflow: auto;
`
export const NotFoundImage = styled.img`
  width: 350px;
  height: 350px;
`
export const HeadingText = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: ${props => (props.mode ? '#f4f4f4' : '#000000')};
`

export const ParaText = styled.p`
  font-size: 18px;
  color: ${props => (props.mode ? '#cccccc' : '#606060')};
`
