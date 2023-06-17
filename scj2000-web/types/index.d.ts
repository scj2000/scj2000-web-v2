declare module 'vuewordcloud';

declare module '*.gql' {
    import { DocumentNode } from 'graphql'
    const Schema: DocumentNode
  
    export = Schema
}