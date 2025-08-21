import { ThemeProvider } from "../components/ui/ThemeProvider"
import Header from "../components/ui/header"
import  './globals.css';

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header></Header>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}