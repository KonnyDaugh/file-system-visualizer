import './App.css'

import { useEffect, useState } from "react";
import type { FileSystemData } from "./types/fileSystem";
import FileSystemItem from './components/FileSystemItem';
import { filterFileSystem } from "./utils/filterFileSystem";

function App() {
    const [fileSystem, setFileSystem] = useState<FileSystemData|null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("/data/file-system.json")
            .then((response) => response.json())
            .then((data:FileSystemData) => setFileSystem(data));
    },  []);

    if (!fileSystem) {
      return <div>Loading...</div>;
    }

    const visibleFileSystem = searchQuery ? filterFileSystem(fileSystem.root, searchQuery) : fileSystem.root;

    return (
        <>
            <input
                type="text"
                placeholder="Go to file..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />
            <div>
                {Object.entries(visibleFileSystem).map(([name, item]) => (
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
