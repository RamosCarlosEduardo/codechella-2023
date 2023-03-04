import { ThemeProvider } from 'styled-components'
import {summer, boreal} from 'assets/styles/Themes.js'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import {Header} from 'components/header'
import { Home } from './pages/Home'
import { Footer } from 'components/Footer'



function App() {
  
  return (
    
    <ThemeProvider theme={summer}>
      <GlobalStyle />

      <Header />
      
      <Home />
      <Footer />
    </ThemeProvider>
  )
}

export default App
