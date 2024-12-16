import React from 'react'

interface SpacerProps {
  direction: string
  size: number
}

export function Spacer(prop: SpacerProps) {
  const width = prop.direction.toLowerCase() === 'vertical' ? 1 : prop.size
  const height = prop.direction.toLowerCase() === 'horizontal' ? 1 : prop.size

  return (
    <span
      className='display-block'
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
      }}
    ></span>
  )
}
