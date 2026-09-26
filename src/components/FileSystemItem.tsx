import type { FileSystemItem as FileSystemItemType } from "../types/fileSystem";

type FileSystemItemProps = {
    name: string;
    item: FileSystemItemType;
};

export default function FileSystemItem({name, item}: FileSystemItemProps) {
    if (item.type === 'file') {
        return (
            <div>📄{name}</div>
        );
    }

    return (
        <>
            <div>📁{name}</div>
            <div className="file-system-item__children">
                {Object.entries(item.children).map(([childName, child]) => (
                    <FileSystemItem key={childName} name={childName} item={child}/>
                ))}
            </div>        
        </>       
    )    
}

