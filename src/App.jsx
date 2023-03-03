import { ThemeProvider } from 'styled-components'
import {summer, boreal} from 'assets/styles/Themes.js'
import {Header} from 'components/header'
import { GlobalStyle } from 'assets/styles/GlobalStyle'


function App() {
  
  return (
    
    <ThemeProvider theme={boreal}>
      <GlobalStyle />
      <div className="App">
        Oie
      </div>
      <Header />
    </ThemeProvider>
  )
}

export default App
