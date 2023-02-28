// Style your elements here
import styled from 'styled-components'

export const ListItemContainer = styled.li`
  display: flex;
  margin-right: 20px;
  margin-bottom: 20px;
`
export const CustomButton = styled.button`
  width: 90px;
  height: 35px;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${props => (props.isActive ? '#ffffff' : '#334155')};
  border: 0px;
  color: #1e293b;
`
