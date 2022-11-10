import React, { ReactNode } from 'react'
// import { createStyles } from '@mantine/core';

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  // const useStyles = createStyles((theme) => ({

  //     container: {
  //         [`@media (max-width:${theme.breakpoints.xl}px)`]: {

  //         }
  //     }
  // }))

  return <div>{children}</div>
}

export default LayoutWrapper
