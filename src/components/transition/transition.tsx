import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
import { tuple } from '../../utils/type'

const Animations = tuple('zoom-in-top', 'zoom-in-left', 'zoom-in-bottom', 'zoom-in-right')

type AnimationName = typeof Animations[number]

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName
  wrapper?: boolean
}

const Transition: FC<TransitionProps> = (props: React.PropsWithChildren<TransitionProps>) => {
  const { children, classNames, animation, wrapper, ...restProps } = props

  return (
    <CSSTransition classNames={classNames || animation} {...restProps}>
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
}

export default Transition
