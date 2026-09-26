import type { FileSystemItem as FileSystemItemType } from "../types/fileSystem";

type FileSystemItemProps = {
  item: FileSystemItemType;
};

export default function FileSystemItem({ item }: FileSystemItemProps) {
    if (item.type === 'file') {
        return (
            <div>📄{item.name}</div>
        );
    }

    return (
        <>
            <div>📁{item.name}</div>
            <div className="file-system-item__children">
                {item.children.map((child) => (
                    <FileSystemItem key={child.name} item={child}/>
                ))}
            </div>        
        </>       
    )    
}

