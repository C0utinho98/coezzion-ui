import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  fallback?: string
}

export function Avatar({ fallback, ...props }: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
