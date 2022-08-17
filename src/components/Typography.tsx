import styled from 'styled-components'

interface TitleTextProps {
  size?: 'l' | 'm' | 's'
  color?: 'title' | 'subtitle' | 'text'
  weight?: string | number
  lineHeight?: 130 | 160
}

interface RegularTextProps {
  size?: 'm' | 's'
  color?: 'text' | 'subtitle' | 'label' | 'span' | 'label' | 'post'
  weight?: string | number
}

export const Title = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`title-title-${size ?? 'l'}`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${({ lineHeight: height }) => `${height ?? 160}%`};
  font-weight: ${({ weight }) => weight ?? 800};
`

export const Text = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-text-${size ?? 'm'}`]};
  line-height: 160%;
  font-weight: ${({ weight }) => weight ?? 400};
`
