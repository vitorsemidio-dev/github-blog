import { AnchorHTMLAttributes, ReactNode } from 'react'
import { ExternalLinkContainer } from './styles'

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

export function ExternalLink({
  href,
  children,
  target = '_blank',
  ...rest
}: ExternalLinkProps) {
  return (
    <>
      <ExternalLinkContainer
        href={href}
        target={target}
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </ExternalLinkContainer>
    </>
  )
}
