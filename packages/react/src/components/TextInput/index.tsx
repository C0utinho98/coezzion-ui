import { ComponentProps } from 'react'
import { Input, TextInputContainter } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {}

export function TextInput({ ...props }: TextInputProps) {
  return (
    <TextInputContainter>
      <Input {...props} />
    </TextInputContainter>
  )
}

TextInput.displayName = 'TextInput'
