import { Header } from "./components/Header"

import './global.css'
import styles from './App.module.css'
import { Post } from "./components/Post"
import { Sidebar } from "./components/sidebar"

function App() {


  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main> 
          <Post
           author="Gustavo Cabral"
           description='Lorem ipson dolors'
           />
        </main>


      </div>
 
    
    </div>
  )
}

export default App
