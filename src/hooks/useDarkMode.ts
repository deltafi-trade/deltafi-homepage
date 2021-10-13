import { useContext } from 'react'
import { ThemeContext } from 'contexts/ThemeContext'

const useDarkMode = () => {
  const { isDark, toggleDarkMode } = useContext(ThemeContext)
  return { isDark, toggleDarkMode }
}

export default useDarkMode
