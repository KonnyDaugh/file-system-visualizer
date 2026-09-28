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
            <main className="app">
                <section className="file-explorer">
                    <h1 className="file-explorer__title">File System</h1>
                    <input
                        className="file-explorer__search"
                        type="text"
                        placeholder="Search files..."
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                    <div className="file-explorer__tree">
                        {Object.keys(visibleFileSystem).length === 0 ? (
                        <p className="file-explorer__empty">Nothing found</p>
                        ) : (
                            Object.entries(visibleFileSystem).map(([name, item]) => (
                                <FileSystemItem
                                key={name}
                                name={name}
                                item={item}
                                />
                            ))
                        )}
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
