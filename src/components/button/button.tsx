import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, useRef } from 'react';
import classNames from 'classnames';
import useWave from '../../hooks/useWave';

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini'
export type ButtonType = 'primary' | 'default' | 'success' | 'warning' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string;
  /** 设置 Button 状态 */
  loading?: boolean;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  /**设置 Button 的 href */
  href?: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = props => {
  const {
    className,
    loading,
    disabled,
    size,
    btnType,
    children,
    href,
    ...restProps
  } = props

  const buttonEl = useRef<HTMLButtonElement>(null);
  useWave(buttonEl)

  const classes = classNames('spirit-button', `is-${btnType}`,
    {
      'is-large': size === 'large',
      'is-normal': size === 'normal',
      'is-small': size === 'small',
      'is-mini': size === 'mini'
    }
  )

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>{children}</a>
    );
  }
  return (
    <button
      ref={buttonEl}
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  loading: false,
  disabled: false,
  btnType: 'default'
}

export default Button;