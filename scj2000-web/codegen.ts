import { CodegenConfig } from '@graphql-codegen/cli'

const apiEndpoint = process.env.API_ENDPOINT || "http://scj2000-cms:8055/graphql"

const config: CodegenConfig = {
  schema: [
    {
      [apiEndpoint]: {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      },
    }
  ],
  documents: ['api/graphql/*.gql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'types/graphql.d.ts': {
      plugins: [
        'typescript-graphql-files-modules',
      ],
    },
    'api/apollo.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-vue-apollo',
      ],
      config: {
        useTypeImports: true,
        withCompositionFunctions: true,
        vueApolloComposableImportFrom: '@vue/apollo-composable',
        vueCompositionApiImportFrom: 'vue',
        namingConvention: {
          transformUnderscore: true,
        },
      },
    },
  },
}
 
export default config