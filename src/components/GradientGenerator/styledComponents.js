// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
  background-image: linear-gradient(
    ${props => {
      const {topColor, isActiveBtn, bottomColor, value} = props
      console.log(`to left,${topColor},${bottomColor}`)
      return `to ${value},${topColor},${bottomColor}`
    }}
  );
`
export const Heading = styled.h1`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #ffffff;
`
export const Description = styled(Heading)`
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 20px;
`
export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
`
export const InputElement = styled.input`
  width: 100px;
  height: 40px;
  margin-top: 10px;
  border: 0px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  margin-bottom: 20px;
`

export const InputsContainer = styled.div`
  display: flex;
`

export const LabelElement = styled(Description)`
  margin-bottom: 0px;
  margin-top: 20px;
`
export const SubmitButton = styled.button`
  background-color: #8ae323;
  cursor: pointer;
  font-weight: bold;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  border: 0px;
  border-radius: 12px;
  width: 100px;
  height: 35px;
  margin-top: 20px;
  opacity: ${props => (props.isActiveBtn === true ? 1 : 0.5)};
`
