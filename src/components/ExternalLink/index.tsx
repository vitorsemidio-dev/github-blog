import { ReactNode } from 'react'
import { ExternalLinkContainer } from './styles'

interface ExternalLinkProps {
  href: string
  children: ReactNode
}

export function ExternalLink({ href, children, ...rest }: ExternalLinkProps) {
  return (
    <>
      <ExternalLinkContainer href={href} {...rest}>
        {children}
      </ExternalLinkContainer>
    </>
  )
}
