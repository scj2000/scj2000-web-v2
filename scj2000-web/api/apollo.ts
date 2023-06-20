import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import type * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GraphQLStringOrFloat: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Query = {
  __typename?: 'Query';
  articles: Array<Articles>;
  articles_aggregated: Array<ArticlesAggregated>;
  articles_by_id?: Maybe<Articles>;
  articles_tags: Array<ArticlesTags>;
  articles_tags_aggregated: Array<ArticlesTagsAggregated>;
  articles_tags_by_id?: Maybe<ArticlesTags>;
  downloadlink?: Maybe<Downloadlink>;
  mainmenu?: Maybe<Mainmenu>;
  mainmenu_menulinks: Array<MainmenuMenulinks>;
  mainmenu_menulinks_aggregated: Array<MainmenuMenulinksAggregated>;
  mainmenu_menulinks_by_id?: Maybe<MainmenuMenulinks>;
  menulinks: Array<Menulinks>;
  menulinks_aggregated: Array<MenulinksAggregated>;
  menulinks_by_id?: Maybe<Menulinks>;
  sidemenu?: Maybe<Sidemenu>;
  sidemenu_menulinks: Array<SidemenuMenulinks>;
  sidemenu_menulinks_aggregated: Array<SidemenuMenulinksAggregated>;
  sidemenu_menulinks_by_id?: Maybe<SidemenuMenulinks>;
  tags: Array<Tags>;
  tags_aggregated: Array<TagsAggregated>;
  tags_by_id?: Maybe<Tags>;
};


export type QueryArticlesArgs = {
  filter?: InputMaybe<ArticlesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticlesAggregatedArgs = {
  filter?: InputMaybe<ArticlesFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticlesByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryArticlesTagsArgs = {
  filter?: InputMaybe<ArticlesTagsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticlesTagsAggregatedArgs = {
  filter?: InputMaybe<ArticlesTagsFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticlesTagsByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMainmenuMenulinksArgs = {
  filter?: InputMaybe<MainmenuMenulinksFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMainmenuMenulinksAggregatedArgs = {
  filter?: InputMaybe<MainmenuMenulinksFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMainmenuMenulinksByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMenulinksArgs = {
  filter?: InputMaybe<MenulinksFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenulinksAggregatedArgs = {
  filter?: InputMaybe<MenulinksFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenulinksByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySidemenuMenulinksArgs = {
  filter?: InputMaybe<SidemenuMenulinksFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySidemenuMenulinksAggregatedArgs = {
  filter?: InputMaybe<SidemenuMenulinksFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySidemenuMenulinksByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTagsArgs = {
  filter?: InputMaybe<TagsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTagsAggregatedArgs = {
  filter?: InputMaybe<TagsFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTagsByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  articles_mutated?: Maybe<ArticlesMutated>;
  articles_tags_mutated?: Maybe<ArticlesTagsMutated>;
  downloadlink_mutated?: Maybe<DownloadlinkMutated>;
  mainmenu_menulinks_mutated?: Maybe<MainmenuMenulinksMutated>;
  mainmenu_mutated?: Maybe<MainmenuMutated>;
  menulinks_mutated?: Maybe<MenulinksMutated>;
  sidemenu_menulinks_mutated?: Maybe<SidemenuMenulinksMutated>;
  sidemenu_mutated?: Maybe<SidemenuMutated>;
  tags_mutated?: Maybe<TagsMutated>;
};


export type SubscriptionArticlesMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionArticlesTagsMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDownloadlinkMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionMainmenuMenulinksMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionMainmenuMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionMenulinksMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSidemenuMenulinksMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSidemenuMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionTagsMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Articles = {
  __typename?: 'articles';
  body?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<DatetimeFunctions>;
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<ArticlesTags>>>;
  tags_func?: Maybe<CountFunctions>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type ArticlesTagsArgs = {
  filter?: InputMaybe<ArticlesTagsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticlesAggregated = {
  __typename?: 'articles_aggregated';
  avg?: Maybe<ArticlesAggregatedFields>;
  avgDistinct?: Maybe<ArticlesAggregatedFields>;
  count?: Maybe<ArticlesAggregatedCount>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<ArticlesAggregatedCount>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<ArticlesAggregatedFields>;
  min?: Maybe<ArticlesAggregatedFields>;
  sum?: Maybe<ArticlesAggregatedFields>;
  sumDistinct?: Maybe<ArticlesAggregatedFields>;
};

export type ArticlesAggregatedCount = {
  __typename?: 'articles_aggregated_count';
  body?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type ArticlesAggregatedFields = {
  __typename?: 'articles_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type ArticlesFilter = {
  _and?: InputMaybe<Array<InputMaybe<ArticlesFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticlesFilter>>>;
  body?: InputMaybe<StringFilterOperators>;
  date_created?: InputMaybe<DateFilterOperators>;
  date_created_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  date_updated?: InputMaybe<DateFilterOperators>;
  date_updated_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  slug?: InputMaybe<StringFilterOperators>;
  sort?: InputMaybe<NumberFilterOperators>;
  status?: InputMaybe<StringFilterOperators>;
  tags?: InputMaybe<ArticlesTagsFilter>;
  tags_func?: InputMaybe<CountFunctionFilterOperators>;
  title?: InputMaybe<StringFilterOperators>;
  user_created?: InputMaybe<StringFilterOperators>;
  user_updated?: InputMaybe<StringFilterOperators>;
};

export type ArticlesMutated = {
  __typename?: 'articles_mutated';
  data?: Maybe<Articles>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type ArticlesTags = {
  __typename?: 'articles_tags';
  articles_id?: Maybe<Articles>;
  id: Scalars['ID']['output'];
  tags_id?: Maybe<Tags>;
};


export type ArticlesTagsArticlesIdArgs = {
  filter?: InputMaybe<ArticlesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticlesTagsTagsIdArgs = {
  filter?: InputMaybe<TagsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticlesTagsAggregated = {
  __typename?: 'articles_tags_aggregated';
  avg?: Maybe<ArticlesTagsAggregatedFields>;
  avgDistinct?: Maybe<ArticlesTagsAggregatedFields>;
  count?: Maybe<ArticlesTagsAggregatedCount>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<ArticlesTagsAggregatedCount>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<ArticlesTagsAggregatedFields>;
  min?: Maybe<ArticlesTagsAggregatedFields>;
  sum?: Maybe<ArticlesTagsAggregatedFields>;
  sumDistinct?: Maybe<ArticlesTagsAggregatedFields>;
};

export type ArticlesTagsAggregatedCount = {
  __typename?: 'articles_tags_aggregated_count';
  articles_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  tags_id?: Maybe<Scalars['Int']['output']>;
};

export type ArticlesTagsAggregatedFields = {
  __typename?: 'articles_tags_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type ArticlesTagsFilter = {
  _and?: InputMaybe<Array<InputMaybe<ArticlesTagsFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticlesTagsFilter>>>;
  articles_id?: InputMaybe<ArticlesFilter>;
  id?: InputMaybe<NumberFilterOperators>;
  tags_id?: InputMaybe<TagsFilter>;
};

export type ArticlesTagsMutated = {
  __typename?: 'articles_tags_mutated';
  data?: Maybe<ArticlesTags>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type CountFunctionFilterOperators = {
  count?: InputMaybe<NumberFilterOperators>;
};

export type CountFunctions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type DateFilterOperators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DatetimeFunctionFilterOperators = {
  day?: InputMaybe<NumberFilterOperators>;
  hour?: InputMaybe<NumberFilterOperators>;
  minute?: InputMaybe<NumberFilterOperators>;
  month?: InputMaybe<NumberFilterOperators>;
  second?: InputMaybe<NumberFilterOperators>;
  week?: InputMaybe<NumberFilterOperators>;
  weekday?: InputMaybe<NumberFilterOperators>;
  year?: InputMaybe<NumberFilterOperators>;
};

export type DatetimeFunctions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Downloadlink = {
  __typename?: 'downloadlink';
  id: Scalars['ID']['output'];
  menulink?: Maybe<Menulinks>;
};


export type DownloadlinkMenulinkArgs = {
  filter?: InputMaybe<MenulinksFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DownloadlinkMutated = {
  __typename?: 'downloadlink_mutated';
  data?: Maybe<Downloadlink>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Mainmenu = {
  __typename?: 'mainmenu';
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<MainmenuMenulinks>>>;
  items_func?: Maybe<CountFunctions>;
};


export type MainmenuItemsArgs = {
  filter?: InputMaybe<MainmenuMenulinksFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MainmenuFilter = {
  _and?: InputMaybe<Array<InputMaybe<MainmenuFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<MainmenuFilter>>>;
  id?: InputMaybe<StringFilterOperators>;
  items?: InputMaybe<MainmenuMenulinksFilter>;
  items_func?: InputMaybe<CountFunctionFilterOperators>;
};

export type MainmenuMenulinks = {
  __typename?: 'mainmenu_menulinks';
  id: Scalars['ID']['output'];
  mainmenu_id?: Maybe<Mainmenu>;
  menulinks_id?: Maybe<Menulinks>;
};


export type MainmenuMenulinksMainmenuIdArgs = {
  filter?: InputMaybe<MainmenuFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MainmenuMenulinksMenulinksIdArgs = {
  filter?: InputMaybe<MenulinksFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MainmenuMenulinksAggregated = {
  __typename?: 'mainmenu_menulinks_aggregated';
  avg?: Maybe<MainmenuMenulinksAggregatedFields>;
  avgDistinct?: Maybe<MainmenuMenulinksAggregatedFields>;
  count?: Maybe<MainmenuMenulinksAggregatedCount>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<MainmenuMenulinksAggregatedCount>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<MainmenuMenulinksAggregatedFields>;
  min?: Maybe<MainmenuMenulinksAggregatedFields>;
  sum?: Maybe<MainmenuMenulinksAggregatedFields>;
  sumDistinct?: Maybe<MainmenuMenulinksAggregatedFields>;
};

export type MainmenuMenulinksAggregatedCount = {
  __typename?: 'mainmenu_menulinks_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  mainmenu_id?: Maybe<Scalars['Int']['output']>;
  menulinks_id?: Maybe<Scalars['Int']['output']>;
};

export type MainmenuMenulinksAggregatedFields = {
  __typename?: 'mainmenu_menulinks_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type MainmenuMenulinksFilter = {
  _and?: InputMaybe<Array<InputMaybe<MainmenuMenulinksFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<MainmenuMenulinksFilter>>>;
  id?: InputMaybe<NumberFilterOperators>;
  mainmenu_id?: InputMaybe<MainmenuFilter>;
  menulinks_id?: InputMaybe<MenulinksFilter>;
};

export type MainmenuMenulinksMutated = {
  __typename?: 'mainmenu_menulinks_mutated';
  data?: Maybe<MainmenuMenulinks>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type MainmenuMutated = {
  __typename?: 'mainmenu_mutated';
  data?: Maybe<Mainmenu>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Menulinks = {
  __typename?: 'menulinks';
  id: Scalars['ID']['output'];
  mainmenu_items?: Maybe<Mainmenu>;
  sidemenu_items?: Maybe<Sidemenu>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};


export type MenulinksMainmenuItemsArgs = {
  filter?: InputMaybe<MainmenuFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MenulinksSidemenuItemsArgs = {
  filter?: InputMaybe<SidemenuFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenulinksAggregated = {
  __typename?: 'menulinks_aggregated';
  avg?: Maybe<MenulinksAggregatedFields>;
  avgDistinct?: Maybe<MenulinksAggregatedFields>;
  count?: Maybe<MenulinksAggregatedCount>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<MenulinksAggregatedCount>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<MenulinksAggregatedFields>;
  min?: Maybe<MenulinksAggregatedFields>;
  sum?: Maybe<MenulinksAggregatedFields>;
  sumDistinct?: Maybe<MenulinksAggregatedFields>;
};

export type MenulinksAggregatedCount = {
  __typename?: 'menulinks_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  mainmenu_items?: Maybe<Scalars['Int']['output']>;
  sidemenu_items?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Int']['output']>;
};

export type MenulinksAggregatedFields = {
  __typename?: 'menulinks_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type MenulinksFilter = {
  _and?: InputMaybe<Array<InputMaybe<MenulinksFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<MenulinksFilter>>>;
  id?: InputMaybe<StringFilterOperators>;
  mainmenu_items?: InputMaybe<MainmenuFilter>;
  sidemenu_items?: InputMaybe<SidemenuFilter>;
  sort?: InputMaybe<NumberFilterOperators>;
  status?: InputMaybe<StringFilterOperators>;
  title?: InputMaybe<StringFilterOperators>;
  url?: InputMaybe<StringFilterOperators>;
};

export type MenulinksMutated = {
  __typename?: 'menulinks_mutated';
  data?: Maybe<Menulinks>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type NumberFilterOperators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Sidemenu = {
  __typename?: 'sidemenu';
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<SidemenuMenulinks>>>;
  items_func?: Maybe<CountFunctions>;
};


export type SidemenuItemsArgs = {
  filter?: InputMaybe<SidemenuMenulinksFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SidemenuFilter = {
  _and?: InputMaybe<Array<InputMaybe<SidemenuFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<SidemenuFilter>>>;
  id?: InputMaybe<StringFilterOperators>;
  items?: InputMaybe<SidemenuMenulinksFilter>;
  items_func?: InputMaybe<CountFunctionFilterOperators>;
};

export type SidemenuMenulinks = {
  __typename?: 'sidemenu_menulinks';
  id: Scalars['ID']['output'];
  menulinks_id?: Maybe<Menulinks>;
  sidemenu_id?: Maybe<Sidemenu>;
};


export type SidemenuMenulinksMenulinksIdArgs = {
  filter?: InputMaybe<MenulinksFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SidemenuMenulinksSidemenuIdArgs = {
  filter?: InputMaybe<SidemenuFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SidemenuMenulinksAggregated = {
  __typename?: 'sidemenu_menulinks_aggregated';
  avg?: Maybe<SidemenuMenulinksAggregatedFields>;
  avgDistinct?: Maybe<SidemenuMenulinksAggregatedFields>;
  count?: Maybe<SidemenuMenulinksAggregatedCount>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SidemenuMenulinksAggregatedCount>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<SidemenuMenulinksAggregatedFields>;
  min?: Maybe<SidemenuMenulinksAggregatedFields>;
  sum?: Maybe<SidemenuMenulinksAggregatedFields>;
  sumDistinct?: Maybe<SidemenuMenulinksAggregatedFields>;
};

export type SidemenuMenulinksAggregatedCount = {
  __typename?: 'sidemenu_menulinks_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  menulinks_id?: Maybe<Scalars['Int']['output']>;
  sidemenu_id?: Maybe<Scalars['Int']['output']>;
};

export type SidemenuMenulinksAggregatedFields = {
  __typename?: 'sidemenu_menulinks_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type SidemenuMenulinksFilter = {
  _and?: InputMaybe<Array<InputMaybe<SidemenuMenulinksFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<SidemenuMenulinksFilter>>>;
  id?: InputMaybe<NumberFilterOperators>;
  menulinks_id?: InputMaybe<MenulinksFilter>;
  sidemenu_id?: InputMaybe<SidemenuFilter>;
};

export type SidemenuMenulinksMutated = {
  __typename?: 'sidemenu_menulinks_mutated';
  data?: Maybe<SidemenuMenulinks>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type SidemenuMutated = {
  __typename?: 'sidemenu_mutated';
  data?: Maybe<Sidemenu>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type StringFilterOperators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Tags = {
  __typename?: 'tags';
  articles?: Maybe<Array<Maybe<ArticlesTags>>>;
  articles_func?: Maybe<CountFunctions>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};


export type TagsArticlesArgs = {
  filter?: InputMaybe<ArticlesTagsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TagsAggregated = {
  __typename?: 'tags_aggregated';
  avg?: Maybe<TagsAggregatedFields>;
  avgDistinct?: Maybe<TagsAggregatedFields>;
  count?: Maybe<TagsAggregatedCount>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<TagsAggregatedCount>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<TagsAggregatedFields>;
  min?: Maybe<TagsAggregatedFields>;
  sum?: Maybe<TagsAggregatedFields>;
  sumDistinct?: Maybe<TagsAggregatedFields>;
};

export type TagsAggregatedCount = {
  __typename?: 'tags_aggregated_count';
  articles?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type TagsAggregatedFields = {
  __typename?: 'tags_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type TagsFilter = {
  _and?: InputMaybe<Array<InputMaybe<TagsFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<TagsFilter>>>;
  articles?: InputMaybe<ArticlesTagsFilter>;
  articles_func?: InputMaybe<CountFunctionFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
  slug?: InputMaybe<StringFilterOperators>;
  sort?: InputMaybe<NumberFilterOperators>;
  status?: InputMaybe<StringFilterOperators>;
};

export type TagsMutated = {
  __typename?: 'tags_mutated';
  data?: Maybe<Tags>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type GetDownloadLinkQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDownloadLinkQuery = { __typename?: 'Query', downloadlink?: { __typename?: 'downloadlink', id: string, link?: { __typename?: 'menulinks', id: string, title?: string | null, url: string, status?: string | null } | null } | null };

export type GetMainMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMainMenuQuery = { __typename?: 'Query', mainmenu?: { __typename?: 'mainmenu', items?: Array<{ __typename?: 'mainmenu_menulinks', link?: { __typename?: 'menulinks', id: string, title?: string | null, url: string, status?: string | null, sort?: number | null } | null } | null> | null } | null };

export type GetPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type GetPathQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'articles', id: string, title?: string | null, body?: string | null, tags?: Array<{ __typename?: 'articles_tags', tag?: { __typename?: 'tags', id: string, name?: string | null, slug: string } | null } | null> | null }> };

export type GetSideMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSideMenuQuery = { __typename?: 'Query', sidemenu?: { __typename?: 'sidemenu', items?: Array<{ __typename?: 'sidemenu_menulinks', link?: { __typename?: 'menulinks', id: string, title?: string | null, url: string, status?: string | null, sort?: number | null } | null } | null> | null } | null };

export type GetTagQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTagQuery = { __typename?: 'Query', tag?: { __typename?: 'tags', id: string, name?: string | null, slug: string, status?: string | null, articles?: Array<{ __typename?: 'articles_tags', article?: { __typename?: 'articles', id: string, title?: string | null, slug: string } | null } | null> | null } | null };

export type GetTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'tags', id: string, name?: string | null, slug: string, status?: string | null, articles_func?: { __typename?: 'count_functions', count?: number | null } | null }> };


export const GetDownloadLinkDocument = gql`
    query GET_DOWNLOAD_LINK {
  downloadlink {
    id
    link: menulink {
      id
      title
      url
      status
    }
  }
}
    `;

/**
 * __useGetDownloadLinkQuery__
 *
 * To run a query within a Vue component, call `useGetDownloadLinkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDownloadLinkQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDownloadLinkQuery();
 */
export function useGetDownloadLinkQuery(options: VueApolloComposable.UseQueryOptions<GetDownloadLinkQuery, GetDownloadLinkQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetDownloadLinkQuery, GetDownloadLinkQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetDownloadLinkQuery, GetDownloadLinkQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetDownloadLinkQuery, GetDownloadLinkQueryVariables>(GetDownloadLinkDocument, {}, options);
}
export function useGetDownloadLinkLazyQuery(options: VueApolloComposable.UseQueryOptions<GetDownloadLinkQuery, GetDownloadLinkQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetDownloadLinkQuery, GetDownloadLinkQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetDownloadLinkQuery, GetDownloadLinkQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetDownloadLinkQuery, GetDownloadLinkQueryVariables>(GetDownloadLinkDocument, {}, options);
}
export type GetDownloadLinkQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetDownloadLinkQuery, GetDownloadLinkQueryVariables>;
export const GetMainMenuDocument = gql`
    query GET_MAIN_MENU {
  mainmenu {
    items {
      link: menulinks_id {
        id
        title
        url
        status
        sort
      }
    }
  }
}
    `;

/**
 * __useGetMainMenuQuery__
 *
 * To run a query within a Vue component, call `useGetMainMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMainMenuQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetMainMenuQuery();
 */
export function useGetMainMenuQuery(options: VueApolloComposable.UseQueryOptions<GetMainMenuQuery, GetMainMenuQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetMainMenuQuery, GetMainMenuQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetMainMenuQuery, GetMainMenuQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetMainMenuQuery, GetMainMenuQueryVariables>(GetMainMenuDocument, {}, options);
}
export function useGetMainMenuLazyQuery(options: VueApolloComposable.UseQueryOptions<GetMainMenuQuery, GetMainMenuQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetMainMenuQuery, GetMainMenuQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetMainMenuQuery, GetMainMenuQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetMainMenuQuery, GetMainMenuQueryVariables>(GetMainMenuDocument, {}, options);
}
export type GetMainMenuQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetMainMenuQuery, GetMainMenuQueryVariables>;
export const GetPathDocument = gql`
    query GET_PATH($path: String!) {
  articles(filter: {slug: {_eq: $path}}) {
    id
    title
    body
    tags {
      tag: tags_id {
        id
        name
        slug
      }
    }
  }
}
    `;

/**
 * __useGetPathQuery__
 *
 * To run a query within a Vue component, call `useGetPathQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPathQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetPathQuery({
 *   path: // value for 'path'
 * });
 */
export function useGetPathQuery(variables: GetPathQueryVariables | VueCompositionApi.Ref<GetPathQueryVariables> | ReactiveFunction<GetPathQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetPathQuery, GetPathQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPathQuery, GetPathQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPathQuery, GetPathQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetPathQuery, GetPathQueryVariables>(GetPathDocument, variables, options);
}
export function useGetPathLazyQuery(variables: GetPathQueryVariables | VueCompositionApi.Ref<GetPathQueryVariables> | ReactiveFunction<GetPathQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetPathQuery, GetPathQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetPathQuery, GetPathQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetPathQuery, GetPathQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetPathQuery, GetPathQueryVariables>(GetPathDocument, variables, options);
}
export type GetPathQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetPathQuery, GetPathQueryVariables>;
export const GetSideMenuDocument = gql`
    query GET_SIDE_MENU {
  sidemenu {
    items {
      link: menulinks_id {
        id
        title
        url
        status
        sort
      }
    }
  }
}
    `;

/**
 * __useGetSideMenuQuery__
 *
 * To run a query within a Vue component, call `useGetSideMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSideMenuQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetSideMenuQuery();
 */
export function useGetSideMenuQuery(options: VueApolloComposable.UseQueryOptions<GetSideMenuQuery, GetSideMenuQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetSideMenuQuery, GetSideMenuQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetSideMenuQuery, GetSideMenuQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetSideMenuQuery, GetSideMenuQueryVariables>(GetSideMenuDocument, {}, options);
}
export function useGetSideMenuLazyQuery(options: VueApolloComposable.UseQueryOptions<GetSideMenuQuery, GetSideMenuQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetSideMenuQuery, GetSideMenuQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetSideMenuQuery, GetSideMenuQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetSideMenuQuery, GetSideMenuQueryVariables>(GetSideMenuDocument, {}, options);
}
export type GetSideMenuQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetSideMenuQuery, GetSideMenuQueryVariables>;
export const GetTagDocument = gql`
    query GET_TAG($id: ID!) {
  tag: tags_by_id(id: $id) {
    id
    name
    slug
    status
    articles {
      article: articles_id {
        id
        title
        slug
      }
    }
  }
}
    `;

/**
 * __useGetTagQuery__
 *
 * To run a query within a Vue component, call `useGetTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetTagQuery({
 *   id: // value for 'id'
 * });
 */
export function useGetTagQuery(variables: GetTagQueryVariables | VueCompositionApi.Ref<GetTagQueryVariables> | ReactiveFunction<GetTagQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetTagQuery, GetTagQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTagQuery, GetTagQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTagQuery, GetTagQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetTagQuery, GetTagQueryVariables>(GetTagDocument, variables, options);
}
export function useGetTagLazyQuery(variables: GetTagQueryVariables | VueCompositionApi.Ref<GetTagQueryVariables> | ReactiveFunction<GetTagQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetTagQuery, GetTagQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTagQuery, GetTagQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTagQuery, GetTagQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetTagQuery, GetTagQueryVariables>(GetTagDocument, variables, options);
}
export type GetTagQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetTagQuery, GetTagQueryVariables>;
export const GetTagsDocument = gql`
    query GET_TAGS {
  tags(limit: 30, page: 1, sort: "-count(articles)") {
    id
    name
    slug
    status
    articles_func {
      count
    }
  }
}
    `;

/**
 * __useGetTagsQuery__
 *
 * To run a query within a Vue component, call `useGetTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetTagsQuery();
 */
export function useGetTagsQuery(options: VueApolloComposable.UseQueryOptions<GetTagsQuery, GetTagsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTagsQuery, GetTagsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTagsQuery, GetTagsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, {}, options);
}
export function useGetTagsLazyQuery(options: VueApolloComposable.UseQueryOptions<GetTagsQuery, GetTagsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTagsQuery, GetTagsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTagsQuery, GetTagsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, {}, options);
}
export type GetTagsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetTagsQuery, GetTagsQueryVariables>;