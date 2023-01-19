import { Avatar, AvatarProps } from '@coezzion/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Coutinho57.png',
    alt: 'Emerson Coutinho',
    fallback: 'EC',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {},
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    fallback: 'EC',
  },
}
