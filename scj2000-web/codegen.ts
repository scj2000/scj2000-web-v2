import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: process.env.API_ENDPOINT || "http://scj2000-cms:8055/graphql",
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