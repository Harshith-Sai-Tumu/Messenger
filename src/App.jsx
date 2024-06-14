import Chat from "./Components/Chat/Chat"
import Detail from "./Components/Detail/Detail"
import List from "./Components/List/List"

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App