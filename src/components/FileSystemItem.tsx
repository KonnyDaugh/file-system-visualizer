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
            <div>📄{name}</div>
        );
    }

    return (
        <>
            <div className="file-system-item__folder" onClick={() => setIsOpen((prev) => !prev)}>{isOpen ? "📂" : "📁"}{name}</div>
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

