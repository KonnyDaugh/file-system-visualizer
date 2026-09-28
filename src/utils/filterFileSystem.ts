import type {FileSystem} from '../types/fileSystem';

export function filterFileSystem(
    items: FileSystem,
    query: string
    ): FileSystem 
    {
    const filtered: FileSystem = {};

    Object.entries(items).forEach(([name, item]) => {
        if (name.toLowerCase().includes(query.toLowerCase())) {
            filtered[name] = item;
        } else if (item.type === "folder") {
            const filteredChildren = filterFileSystem(item.children, query);
            if (Object.keys(filteredChildren).length > 0) {
                filtered[name] = {
                    ...item,
                    children: filteredChildren,
                };
            }
        };
    });
    return filtered;
}