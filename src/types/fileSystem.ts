export type FileItem = {
    name: string;
    type: 'file';
}

export type FolderItem = {
    name: string;
    type: 'folder';
    children: Array <FileSystemItem>;
}

export type FileSystemItem = FolderItem | FileItem;