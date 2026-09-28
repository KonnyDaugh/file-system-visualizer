export type FileItem = {
    type: 'file';
};

export type FolderItem = {
    type: 'folder';
    children: Record<string, FileSystemItem>;
};

export type FileSystem = Record<string, FileSystemItem>;

export type FileSystemItem = FolderItem | FileItem;

export type FileSystemData = {
    root: FileSystem;
};