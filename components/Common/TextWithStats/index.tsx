import React from 'react'
//import { Text } from '@mantine/core'

const TextWithStats = ({ name, stats }: { name: string; stats: string }) => {
  return (
    <>
      <span
        style={{
          color: '#909296',
          fontSize: '12px',
          fontWeight: '500',
          fontFamily:
            'Inter,-apple-system,BlinkMacSystemFont,"segoe ui",Roboto,Helvetica,Arial,sans-serif',
        }}
      >
        {name}
      </span>
      <span
        style={{
          color: '#6188FF',
          fontSize: '12px',
          fontWeight: '500',
          fontFamily:
            'Inter,-apple-system,BlinkMacSystemFont,"segoe ui",Roboto,Helvetica,Arial,sans-serif',
        }}
      >
        {stats}
      </span>
    </>
  )
}

export default TextWithStats
