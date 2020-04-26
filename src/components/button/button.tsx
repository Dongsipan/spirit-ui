import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

export type ButtonSize = 'large' | 'normal' | 'small' | 'small'
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
  href?: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
export const Button: FC<ButtonProps> = props => {
  return (
    <button>button</button>
  )
}
export default Button