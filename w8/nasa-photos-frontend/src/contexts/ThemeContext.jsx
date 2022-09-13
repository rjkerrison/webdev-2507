import { createContext, useState } from 'react'

const ThemeContext = createContext()

const ThemeContextWrapper = ({ children }) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, author: 'Robin', setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextWrapper, ThemeContext }
