import type {FileSystemItem} from '../types/fileSystem';

export const fileSystem: Array <FileSystemItem> = [
    {
        name: 'README.md',
        type: 'file',
    },
    {
        name: 'src',
        type: 'folder',
        children: [
            {
                name: 'App.tsx',
                type: 'file'
            },
            {
                name: 'main.tsx',
                type: 'file'
            },
            {
                name: 'components',
                type: 'folder',
                children: [
                    {
                        name: 'Header.tsx',
                        type: 'file'
                    },
                    {
                        name: 'ui',
                        type: 'folder',
                        children: [
                            {
                                name: 'Button.tsx',
                                type: 'file'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

