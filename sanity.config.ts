import {defineConfig} from 'sanity';

import {deskTool} from 'sanity/desk';

import schemas from './sanity/schemas'

const config = defineConfig({

    // Project ID is required
    projectId: "7svjof8c",
    dataset: "production",
    title: "My Personal Website",
    apiVerison: '2023-10-15',
    basePath: "/studio",
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config;