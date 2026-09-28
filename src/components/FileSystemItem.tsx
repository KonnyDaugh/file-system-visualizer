import type { FileSystemItem as FileSystemItemType } from "../types/fileSystem";
import { useState } from "react";

type FileSystemItemProps = {
    name: string;
    item: FileSystemItemType;
};

export default function FileSystemItem({name, item}: FileSystemItemProps) {
    const [isOpen, setIsOpen] = useState(true);

    if (item.type === 'file') {
        return (
            <div className="file-system-item">
                <span>📄</span>
                <span>{name}</span>
            </div>
        );
    }

    return (
        <>
            <button
                className="file-system-item file-system-item__folder"
                onClick={() => setIsOpen((prev) => !prev)}
                >
                <span>{isOpen ? "📂" : "📁"}</span>
                <span>{name}</span>
            </button>
            {isOpen && (
                <div className="file-system-item__children">
                {Object.entries(item.children).map(([childName, child]) => (
                    <FileSystemItem key={childName} name={childName} item={child}/>
                ))}
            </div>        
            )}
        </>       
    )    
}

