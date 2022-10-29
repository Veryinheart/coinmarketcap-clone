import React from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Popover, Text, UnstyledButton } from '@mantine/core'

const ButtonWithPopover = ({ text }: { text: string }) => {
  const [opened, { close, open }] = useDisclosure(false)
  return (
    <Popover
      width={200}
      position="bottom"
      withArrow
      shadow="md"
      opened={opened}
    >
      <Popover.Target>
        <UnstyledButton onMouseEnter={open} onMouseLeave={close}>
          <Text weight="bold">{text}</Text>
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
        <Text size="sm">
          This popover is shown when user hovers the target element
        </Text>
      </Popover.Dropdown>
    </Popover>
  )
}

export default ButtonWithPopover
