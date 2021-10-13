import React from 'react'
import { Button, SunIcon, MoonIcon } from 'components'

interface Props {
  isDark: boolean
  toggleDarkMode: () => void
}

const DarkMode: React.FC<Props> = ({ isDark, toggleDarkMode }) => {
  return (
    <Button variant="text" onClick={toggleDarkMode}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default React.memo(DarkMode, (prev, next) => prev.isDark === next.isDark)
