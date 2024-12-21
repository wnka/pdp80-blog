import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        defaultItem: () => {
          return {
            date: new Date(),
            draft: true,
            code: false,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: 'datetime',
            label: 'Date',
            name: 'date',
            required: true,
          },
          {
            type: "boolean",
            name: 'draft',
            label: 'Draft',
          },
          {
            type: "boolean",
            name: 'code',
            label: 'Does this post have code blocks?',
          },
          {
            label: 'Categories',
            name: 'categories',
            type: 'string',
            list: true,
            options: [
              {
                value: 'movies',
                label: 'Movies',
              },
              {
                value: 'music',
                label: 'Music',
              },
              {
                value: 'biking',
                label: 'Biking',
              },
              {
                value: 'books',
                label: 'Books',
              },
              {
                value: 'computers',
                label: 'Computers',
              },
              {
                value: 'emacs',
                label: 'Emacs',
              },
              {
                value: 'gaming',
                label: 'Gaming',
              },
              {
                value: 'personal',
                label: 'Personal',
              },
            ],
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
