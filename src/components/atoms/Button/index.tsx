import React from 'react'
import { Button as ButtonComponent, ButtonProps } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface IProps extends ButtonProps {
  btnText: string
  handleClick?: () => void
  btnIcon?: any
  isDisabled?: boolean
  className?: string
  to?: string
  isExternalLink?: boolean
}

export const Button: React.FC<IProps> = (props: IProps) => {
  const { btnText, btnIcon, isDisabled, to, handleClick, isExternalLink } =
    props
  const ButtonContent = () => {
    return (
      <ButtonWrapper {...props}>
        <ButtonComponent
          onClick={isDisabled ? () => {} : () => handleClick && handleClick()}
        >
          {btnIcon}
          <span>{btnText}</span>
        </ButtonComponent>
      </ButtonWrapper>
    )
  }

  if (isExternalLink) {
    return (
      <a target="_blank" href={to || '#'} rel="noreferrer">
        <ButtonContent />
      </a>
    )
  }

  if (!!to) {
    return (
      <Link to={to || '#'}>
        <ButtonContent />
      </Link>
    )
  }
  return <ButtonContent />
}

const ButtonWrapper = styled.div<IProps>``

export default Button
