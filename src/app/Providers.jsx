'use client'   
import { ThemeProvider } from 'next-themes'

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className=" min-h-screen select-none transition-colors-300 dark:opacity-90">
            {children}
        </div>
    </ThemeProvider>
  )
}