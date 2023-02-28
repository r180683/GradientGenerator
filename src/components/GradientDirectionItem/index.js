// Write your code here
import {ListItemContainer, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {
    activeDirectionId,
    gradientDirectionDetails,
    updateActiveDirection,
  } = props
  const {displayText, directionId} = gradientDirectionDetails
  const isActive = directionId === activeDirectionId
  console.log(isActive)
  const updateActiveButton = () => {
    updateActiveDirection(directionId)
  }

  return (
    <ListItemContainer>
      <CustomButton
        onClick={updateActiveButton}
        isActive={isActive}
        type="button"
      >
        {displayText}
      </CustomButton>
    </ListItemContainer>
  )
}

export default GradientDirectionItem
