import './App.css'

import {fileSystem} from './data/fileSystem';
import FileSystemItem from './components/FileSystemItem';

function App() {
  return (
    <>
      <div>
        {fileSystem.map((item) => (
          <FileSystemItem key={item.name} item={item}/>
        ))}
      </div>
    </>
  )
}

export default App
