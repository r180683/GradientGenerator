import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  Heading,
  Description,
  ListContainer,
  InputElement,
  InputContainer,
  FormContainer,
  LabelElement,
  SubmitButton,
  InputsContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirectionId: gradientDirectionsList[0].directionId,
    topColor: '#8ae323',
    bottomColor: '#014f7b',
    isActiveBtn: false,
  }

  updateActiveDirection = id => {
    this.setState({activeDirectionId: id})
  }

  updateTopColor = event => {
    this.setState({topColor: event.target.value})
  }

  updateBottomColor = event => {
    this.setState({bottomColor: event.target.value})
  }

  generateBg = event => {
    event.preventDefault()
    this.setState({isActiveBtn: true})
  }

  render() {
    const {activeDirectionId, topColor, bottomColor, isActiveBtn} = this.state
    const activeOptionDetails = gradientDirectionsList.filter(
      each => each.directionId === activeDirectionId,
    )
    const activeObjectDetails = activeOptionDetails[0]
    const {value} = activeObjectDetails
    return (
      <AppContainer
        data-testid="gradientGenerator"
        isActiveBtn={isActiveBtn}
        value={value}
        topColor={topColor}
        bottomColor={bottomColor}
      >
        <Heading>Generate a Css Color Gradient</Heading>
        <Description as="p">Choose Direction</Description>
        <ListContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              activeDirectionId={activeDirectionId}
              gradientDirectionDetails={each}
              updateActiveDirection={this.updateActiveDirection}
            />
          ))}
        </ListContainer>
        <Description as="p">Pick the Colors</Description>
        <FormContainer onSubmit={this.generateBg}>
          <InputsContainer>
            <InputContainer>
              <LabelElement as="p">{topColor}</LabelElement>
              <InputElement
                onChange={this.updateTopColor}
                value={topColor}
                type="color"
              />
            </InputContainer>
            <InputContainer>
              <LabelElement as="p">{bottomColor}</LabelElement>
              <InputElement
                onChange={this.updateBottomColor}
                value={bottomColor}
                type="color"
              />
            </InputContainer>
          </InputsContainer>
          <SubmitButton isActiveBtn={isActiveBtn} type="submit">
            Generate
          </SubmitButton>
        </FormContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
