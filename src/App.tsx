import './App.css'

import { useEffect, useState } from "react";
import type { FileSystemData } from "./types/fileSystem";
import FileSystemItem from './components/FileSystemItem';

function App() {
    const [fileSystem, setFileSystem] = useState<FileSystemData|null>(null);

    useEffect(() => {
        fetch("/data/file-system.json")
            .then((response) => response.json())
            .then((data:FileSystemData) => setFileSystem(data));
    },  []);

    if (!fileSystem) {
      return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                {Object.entries(fileSystem.root).map(([name, item]) => (
                    <FileSystemItem
                    key={name}
                    name={name}
                    item={item}
                    />
                ))}
            </div>
        </>
    )
}

export default App
