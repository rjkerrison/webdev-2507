import { createContext } from 'react'

const ThemeContext = createContext()

const ThemeContextWrapper = ({ children }) => {
  const theme = 'light'

  return (
    <ThemeContext.Provider value={{ theme, author: 'Robin' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextWrapper, ThemeContext }
