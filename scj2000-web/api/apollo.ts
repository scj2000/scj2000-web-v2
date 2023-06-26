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
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GraphQLBigInt: { input: any; output: any; }
  GraphQLStringOrFloat: { input: any; output: any; }
  Hash: { input: any; output: any; }
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
  articles_files: Array<ArticlesFiles>;
  articles_files_aggregated: Array<ArticlesFilesAggregated>;
  articles_files_by_id?: Maybe<ArticlesFiles>;
  articles_tags: Array<ArticlesTags>;
  articles_tags_aggregated: Array<ArticlesTagsAggregated>;
  articles_tags_by_id?: Maybe<ArticlesTags>;
  downloadlink?: Maybe<Downloadlink>;
  frontpage?: Maybe<Frontpage>;
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
  user_feedbacks: Array<UserFeedbacks>;
  user_feedbacks_aggregated: Array<UserFeedbacksAggregated>;
  user_feedbacks_by_id?: Maybe<UserFeedbacks>;
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


export type QueryArticlesFilesArgs = {
  filter?: InputMaybe<ArticlesFilesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticlesFilesAggregatedArgs = {
  filter?: InputMaybe<ArticlesFilesFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticlesFilesByIdArgs = {
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


export type QueryUserFeedbacksArgs = {
  filter?: InputMaybe<UserFeedbacksFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUserFeedbacksAggregatedArgs = {
  filter?: InputMaybe<UserFeedbacksFilter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUserFeedbacksByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  articles_files_mutated?: Maybe<ArticlesFilesMutated>;
  articles_mutated?: Maybe<ArticlesMutated>;
  articles_tags_mutated?: Maybe<ArticlesTagsMutated>;
  directus_activity_mutated?: Maybe<DirectusActivityMutated>;
  directus_dashboards_mutated?: Maybe<DirectusDashboardsMutated>;
  directus_files_mutated?: Maybe<DirectusFilesMutated>;
  directus_flows_mutated?: Maybe<DirectusFlowsMutated>;
  directus_folders_mutated?: Maybe<DirectusFoldersMutated>;
  directus_notifications_mutated?: Maybe<DirectusNotificationsMutated>;
  directus_panels_mutated?: Maybe<DirectusPanelsMutated>;
  directus_permissions_mutated?: Maybe<DirectusPermissionsMutated>;
  directus_presets_mutated?: Maybe<DirectusPresetsMutated>;
  directus_roles_mutated?: Maybe<DirectusRolesMutated>;
  directus_settings_mutated?: Maybe<DirectusSettingsMutated>;
  directus_shares_mutated?: Maybe<DirectusSharesMutated>;
  directus_translations_mutated?: Maybe<DirectusTranslationsMutated>;
  directus_users_mutated?: Maybe<DirectusUsersMutated>;
  downloadlink_mutated?: Maybe<DownloadlinkMutated>;
  frontpage_mutated?: Maybe<FrontpageMutated>;
  mainmenu_menulinks_mutated?: Maybe<MainmenuMenulinksMutated>;
  mainmenu_mutated?: Maybe<MainmenuMutated>;
  menulinks_mutated?: Maybe<MenulinksMutated>;
  sidemenu_menulinks_mutated?: Maybe<SidemenuMenulinksMutated>;
  sidemenu_mutated?: Maybe<SidemenuMutated>;
  tags_mutated?: Maybe<TagsMutated>;
  user_feedbacks_mutated?: Maybe<UserFeedbacksMutated>;
};


export type SubscriptionArticlesFilesMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionArticlesMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionArticlesTagsMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectusActivityMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectusDashboardsMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectusFilesMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectusFlowsMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectusFoldersMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectusNotificationsMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectusPanelsMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectusPermissionsMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectusPresetsMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectusRolesMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectusSettingsMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectusSharesMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectusTranslationsMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectusUsersMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDownloadlinkMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionFrontpageMutatedArgs = {
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


export type SubscriptionUserFeedbacksMutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Articles = {
  __typename?: 'articles';
  body?: Maybe<Scalars['String']['output']>;
  cover_image?: Maybe<DirectusFiles>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<DatetimeFunctions>;
  files?: Maybe<Array<Maybe<ArticlesFiles>>>;
  files_func?: Maybe<CountFunctions>;
  frontpage_articles?: Maybe<Frontpage>;
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<ArticlesTags>>>;
  tags_func?: Maybe<CountFunctions>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<DirectusUsers>;
  user_updated?: Maybe<DirectusUsers>;
};


export type ArticlesCoverImageArgs = {
  filter?: InputMaybe<DirectusFilesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticlesFilesArgs = {
  filter?: InputMaybe<ArticlesFilesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticlesFrontpageArticlesArgs = {
  filter?: InputMaybe<FrontpageFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticlesTagsArgs = {
  filter?: InputMaybe<ArticlesTagsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticlesUserCreatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticlesUserUpdatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
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
  cover_image?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  files?: Maybe<Scalars['Int']['output']>;
  frontpage_articles?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type ArticlesAggregatedFields = {
  __typename?: 'articles_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type ArticlesFiles = {
  __typename?: 'articles_files';
  articles_id?: Maybe<Articles>;
  directus_files_id?: Maybe<DirectusFiles>;
  id: Scalars['ID']['output'];
};


export type ArticlesFilesArticlesIdArgs = {
  filter?: InputMaybe<ArticlesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticlesFilesDirectusFilesIdArgs = {
  filter?: InputMaybe<DirectusFilesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticlesFilesAggregated = {
  __typename?: 'articles_files_aggregated';
  avg?: Maybe<ArticlesFilesAggregatedFields>;
  avgDistinct?: Maybe<ArticlesFilesAggregatedFields>;
  count?: Maybe<ArticlesFilesAggregatedCount>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<ArticlesFilesAggregatedCount>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<ArticlesFilesAggregatedFields>;
  min?: Maybe<ArticlesFilesAggregatedFields>;
  sum?: Maybe<ArticlesFilesAggregatedFields>;
  sumDistinct?: Maybe<ArticlesFilesAggregatedFields>;
};

export type ArticlesFilesAggregatedCount = {
  __typename?: 'articles_files_aggregated_count';
  articles_id?: Maybe<Scalars['Int']['output']>;
  directus_files_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type ArticlesFilesAggregatedFields = {
  __typename?: 'articles_files_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type ArticlesFilesFilter = {
  _and?: InputMaybe<Array<InputMaybe<ArticlesFilesFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticlesFilesFilter>>>;
  articles_id?: InputMaybe<ArticlesFilter>;
  directus_files_id?: InputMaybe<DirectusFilesFilter>;
  id?: InputMaybe<NumberFilterOperators>;
};

export type ArticlesFilesMutated = {
  __typename?: 'articles_files_mutated';
  data?: Maybe<ArticlesFiles>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type ArticlesFilter = {
  _and?: InputMaybe<Array<InputMaybe<ArticlesFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticlesFilter>>>;
  body?: InputMaybe<StringFilterOperators>;
  cover_image?: InputMaybe<DirectusFilesFilter>;
  date_created?: InputMaybe<DateFilterOperators>;
  date_created_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  date_updated?: InputMaybe<DateFilterOperators>;
  date_updated_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  files?: InputMaybe<ArticlesFilesFilter>;
  files_func?: InputMaybe<CountFunctionFilterOperators>;
  frontpage_articles?: InputMaybe<FrontpageFilter>;
  id?: InputMaybe<StringFilterOperators>;
  slug?: InputMaybe<StringFilterOperators>;
  sort?: InputMaybe<NumberFilterOperators>;
  status?: InputMaybe<StringFilterOperators>;
  summary?: InputMaybe<StringFilterOperators>;
  tags?: InputMaybe<ArticlesTagsFilter>;
  tags_func?: InputMaybe<CountFunctionFilterOperators>;
  title?: InputMaybe<StringFilterOperators>;
  user_created?: InputMaybe<DirectusUsersFilter>;
  user_updated?: InputMaybe<DirectusUsersFilter>;
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

export type BooleanFilterOperators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
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

export type DirectusActivity = {
  __typename?: 'directus_activity';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  item: Scalars['String']['output'];
  origin?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Date']['output']>;
  timestamp_func?: Maybe<DatetimeFunctions>;
  user?: Maybe<DirectusUsers>;
  user_agent?: Maybe<Scalars['String']['output']>;
};


export type DirectusActivityUserArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DirectusActivityMutated = {
  __typename?: 'directus_activity_mutated';
  data?: Maybe<DirectusActivity>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type DirectusDashboards = {
  __typename?: 'directus_dashboards';
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  panels?: Maybe<Array<Maybe<DirectusPanels>>>;
  panels_func?: Maybe<CountFunctions>;
  user_created?: Maybe<DirectusUsers>;
};


export type DirectusDashboardsPanelsArgs = {
  filter?: InputMaybe<DirectusPanelsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type DirectusDashboardsUserCreatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DirectusDashboardsFilter = {
  _and?: InputMaybe<Array<InputMaybe<DirectusDashboardsFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusDashboardsFilter>>>;
  color?: InputMaybe<StringFilterOperators>;
  date_created?: InputMaybe<DateFilterOperators>;
  date_created_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  icon?: InputMaybe<StringFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
  note?: InputMaybe<StringFilterOperators>;
  panels?: InputMaybe<DirectusPanelsFilter>;
  panels_func?: InputMaybe<CountFunctionFilterOperators>;
  user_created?: InputMaybe<DirectusUsersFilter>;
};

export type DirectusDashboardsMutated = {
  __typename?: 'directus_dashboards_mutated';
  data?: Maybe<DirectusDashboards>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type DirectusFiles = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['GraphQLBigInt']['output']>;
  folder?: Maybe<DirectusFolders>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<CountFunctions>;
  modified_by?: Maybe<DirectusUsers>;
  modified_on?: Maybe<Scalars['Date']['output']>;
  modified_on_func?: Maybe<DatetimeFunctions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<CountFunctions>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<DirectusUsers>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<DatetimeFunctions>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type DirectusFilesFolderArgs = {
  filter?: InputMaybe<DirectusFoldersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type DirectusFilesModifiedByArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type DirectusFilesUploadedByArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DirectusFilesFilter = {
  _and?: InputMaybe<Array<InputMaybe<DirectusFilesFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusFilesFilter>>>;
  charset?: InputMaybe<StringFilterOperators>;
  description?: InputMaybe<StringFilterOperators>;
  duration?: InputMaybe<NumberFilterOperators>;
  embed?: InputMaybe<StringFilterOperators>;
  filename_disk?: InputMaybe<StringFilterOperators>;
  filename_download?: InputMaybe<StringFilterOperators>;
  filesize?: InputMaybe<NumberFilterOperators>;
  folder?: InputMaybe<DirectusFoldersFilter>;
  height?: InputMaybe<NumberFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  location?: InputMaybe<StringFilterOperators>;
  metadata?: InputMaybe<StringFilterOperators>;
  metadata_func?: InputMaybe<CountFunctionFilterOperators>;
  modified_by?: InputMaybe<DirectusUsersFilter>;
  modified_on?: InputMaybe<DateFilterOperators>;
  modified_on_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  storage?: InputMaybe<StringFilterOperators>;
  tags?: InputMaybe<StringFilterOperators>;
  tags_func?: InputMaybe<CountFunctionFilterOperators>;
  title?: InputMaybe<StringFilterOperators>;
  type?: InputMaybe<StringFilterOperators>;
  uploaded_by?: InputMaybe<DirectusUsersFilter>;
  uploaded_on?: InputMaybe<DateFilterOperators>;
  uploaded_on_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  width?: InputMaybe<NumberFilterOperators>;
};

export type DirectusFilesMutated = {
  __typename?: 'directus_files_mutated';
  data?: Maybe<DirectusFiles>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type DirectusFlows = {
  __typename?: 'directus_flows';
  color?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<CountFunctions>;
  trigger?: Maybe<Scalars['String']['output']>;
};

export type DirectusFlowsMutated = {
  __typename?: 'directus_flows_mutated';
  data?: Maybe<DirectusFlows>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type DirectusFolders = {
  __typename?: 'directus_folders';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<DirectusFolders>;
};


export type DirectusFoldersParentArgs = {
  filter?: InputMaybe<DirectusFoldersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DirectusFoldersFilter = {
  _and?: InputMaybe<Array<InputMaybe<DirectusFoldersFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusFoldersFilter>>>;
  id?: InputMaybe<StringFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
  parent?: InputMaybe<DirectusFoldersFilter>;
};

export type DirectusFoldersMutated = {
  __typename?: 'directus_folders_mutated';
  data?: Maybe<DirectusFolders>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type DirectusNotifications = {
  __typename?: 'directus_notifications';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  recipient?: Maybe<DirectusUsers>;
  sender?: Maybe<DirectusUsers>;
  status?: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  timestamp?: Maybe<Scalars['Date']['output']>;
  timestamp_func?: Maybe<DatetimeFunctions>;
};


export type DirectusNotificationsRecipientArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type DirectusNotificationsSenderArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DirectusNotificationsMutated = {
  __typename?: 'directus_notifications_mutated';
  data?: Maybe<DirectusNotifications>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type DirectusPanels = {
  __typename?: 'directus_panels';
  color?: Maybe<Scalars['String']['output']>;
  dashboard?: Maybe<DirectusDashboards>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  height: Scalars['Int']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<CountFunctions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  show_header: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  user_created?: Maybe<DirectusUsers>;
  width: Scalars['Int']['output'];
};


export type DirectusPanelsDashboardArgs = {
  filter?: InputMaybe<DirectusDashboardsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type DirectusPanelsUserCreatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DirectusPanelsFilter = {
  _and?: InputMaybe<Array<InputMaybe<DirectusPanelsFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusPanelsFilter>>>;
  color?: InputMaybe<StringFilterOperators>;
  dashboard?: InputMaybe<DirectusDashboardsFilter>;
  date_created?: InputMaybe<DateFilterOperators>;
  date_created_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  height?: InputMaybe<NumberFilterOperators>;
  icon?: InputMaybe<StringFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
  note?: InputMaybe<StringFilterOperators>;
  options?: InputMaybe<StringFilterOperators>;
  options_func?: InputMaybe<CountFunctionFilterOperators>;
  position_x?: InputMaybe<NumberFilterOperators>;
  position_y?: InputMaybe<NumberFilterOperators>;
  show_header?: InputMaybe<BooleanFilterOperators>;
  type?: InputMaybe<StringFilterOperators>;
  user_created?: InputMaybe<DirectusUsersFilter>;
  width?: InputMaybe<NumberFilterOperators>;
};

export type DirectusPanelsMutated = {
  __typename?: 'directus_panels_mutated';
  data?: Maybe<DirectusPanels>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type DirectusPermissions = {
  __typename?: 'directus_permissions';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  fields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  permissions?: Maybe<Scalars['JSON']['output']>;
  permissions_func?: Maybe<CountFunctions>;
  presets?: Maybe<Scalars['JSON']['output']>;
  presets_func?: Maybe<CountFunctions>;
  role?: Maybe<DirectusRoles>;
  validation?: Maybe<Scalars['JSON']['output']>;
  validation_func?: Maybe<CountFunctions>;
};


export type DirectusPermissionsRoleArgs = {
  filter?: InputMaybe<DirectusRolesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DirectusPermissionsMutated = {
  __typename?: 'directus_permissions_mutated';
  data?: Maybe<DirectusPermissions>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type DirectusPresets = {
  __typename?: 'directus_presets';
  bookmark?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  filter?: Maybe<Scalars['JSON']['output']>;
  filter_func?: Maybe<CountFunctions>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  layout?: Maybe<Scalars['String']['output']>;
  layout_options?: Maybe<Scalars['JSON']['output']>;
  layout_options_func?: Maybe<CountFunctions>;
  layout_query?: Maybe<Scalars['JSON']['output']>;
  layout_query_func?: Maybe<CountFunctions>;
  refresh_interval?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<DirectusRoles>;
  search?: Maybe<Scalars['String']['output']>;
  user?: Maybe<DirectusUsers>;
};


export type DirectusPresetsRoleArgs = {
  filter?: InputMaybe<DirectusRolesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type DirectusPresetsUserArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DirectusPresetsMutated = {
  __typename?: 'directus_presets_mutated';
  data?: Maybe<DirectusPresets>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type DirectusRoles = {
  __typename?: 'directus_roles';
  admin_access: Scalars['Boolean']['output'];
  app_access?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enforce_tfa: Scalars['Boolean']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip_access?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  users?: Maybe<Array<Maybe<DirectusUsers>>>;
  users_func?: Maybe<CountFunctions>;
};


export type DirectusRolesUsersArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DirectusRolesFilter = {
  _and?: InputMaybe<Array<InputMaybe<DirectusRolesFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusRolesFilter>>>;
  admin_access?: InputMaybe<BooleanFilterOperators>;
  app_access?: InputMaybe<BooleanFilterOperators>;
  description?: InputMaybe<StringFilterOperators>;
  enforce_tfa?: InputMaybe<BooleanFilterOperators>;
  icon?: InputMaybe<StringFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  ip_access?: InputMaybe<StringFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
  users?: InputMaybe<DirectusUsersFilter>;
  users_func?: InputMaybe<CountFunctionFilterOperators>;
};

export type DirectusRolesMutated = {
  __typename?: 'directus_roles_mutated';
  data?: Maybe<DirectusRoles>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type DirectusSettings = {
  __typename?: 'directus_settings';
  auth_login_attempts?: Maybe<Scalars['Int']['output']>;
  auth_password_policy?: Maybe<Scalars['String']['output']>;
  basemaps?: Maybe<Scalars['JSON']['output']>;
  basemaps_func?: Maybe<CountFunctions>;
  custom_aspect_ratios?: Maybe<Scalars['JSON']['output']>;
  custom_aspect_ratios_func?: Maybe<CountFunctions>;
  custom_css?: Maybe<Scalars['String']['output']>;
  default_language?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mapbox_key?: Maybe<Scalars['String']['output']>;
  module_bar?: Maybe<Scalars['JSON']['output']>;
  module_bar_func?: Maybe<CountFunctions>;
  /** $t:field_options.directus_settings.project_color_note */
  project_color?: Maybe<Scalars['String']['output']>;
  project_descriptor?: Maybe<Scalars['String']['output']>;
  project_logo?: Maybe<DirectusFiles>;
  project_name?: Maybe<Scalars['String']['output']>;
  project_url?: Maybe<Scalars['String']['output']>;
  public_background?: Maybe<DirectusFiles>;
  public_foreground?: Maybe<DirectusFiles>;
  public_note?: Maybe<Scalars['String']['output']>;
  storage_asset_presets?: Maybe<Scalars['JSON']['output']>;
  storage_asset_presets_func?: Maybe<CountFunctions>;
  storage_asset_transform?: Maybe<Scalars['String']['output']>;
  storage_default_folder?: Maybe<DirectusFolders>;
};


export type DirectusSettingsProjectLogoArgs = {
  filter?: InputMaybe<DirectusFilesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type DirectusSettingsPublicBackgroundArgs = {
  filter?: InputMaybe<DirectusFilesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type DirectusSettingsPublicForegroundArgs = {
  filter?: InputMaybe<DirectusFilesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type DirectusSettingsStorageDefaultFolderArgs = {
  filter?: InputMaybe<DirectusFoldersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DirectusSettingsMutated = {
  __typename?: 'directus_settings_mutated';
  data?: Maybe<DirectusSettings>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type DirectusShares = {
  __typename?: 'directus_shares';
  collection?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: Maybe<Scalars['Date']['output']>;
  date_end_func?: Maybe<DatetimeFunctions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: Maybe<Scalars['Date']['output']>;
  date_start_func?: Maybe<DatetimeFunctions>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** $t:shared_leave_blank_for_unlimited */
  password?: Maybe<Scalars['Hash']['output']>;
  role?: Maybe<DirectusRoles>;
  times_used?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<DirectusUsers>;
};


export type DirectusSharesRoleArgs = {
  filter?: InputMaybe<DirectusRolesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type DirectusSharesUserCreatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DirectusSharesMutated = {
  __typename?: 'directus_shares_mutated';
  data?: Maybe<DirectusShares>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type DirectusTranslations = {
  __typename?: 'directus_translations';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  language: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type DirectusTranslationsMutated = {
  __typename?: 'directus_translations_mutated';
  data?: Maybe<DirectusTranslations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type DirectusUsers = {
  __typename?: 'directus_users';
  auth_data?: Maybe<Scalars['JSON']['output']>;
  auth_data_func?: Maybe<CountFunctions>;
  avatar?: Maybe<DirectusFiles>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_notifications?: Maybe<Scalars['Boolean']['output']>;
  external_identifier?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  last_access?: Maybe<Scalars['Date']['output']>;
  last_access_func?: Maybe<DatetimeFunctions>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_page?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['Hash']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<DirectusRoles>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<CountFunctions>;
  tfa_secret?: Maybe<Scalars['Hash']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['Hash']['output']>;
};


export type DirectusUsersAvatarArgs = {
  filter?: InputMaybe<DirectusFilesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type DirectusUsersRoleArgs = {
  filter?: InputMaybe<DirectusRolesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DirectusUsersFilter = {
  _and?: InputMaybe<Array<InputMaybe<DirectusUsersFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<DirectusUsersFilter>>>;
  auth_data?: InputMaybe<StringFilterOperators>;
  auth_data_func?: InputMaybe<CountFunctionFilterOperators>;
  avatar?: InputMaybe<DirectusFilesFilter>;
  description?: InputMaybe<StringFilterOperators>;
  email?: InputMaybe<StringFilterOperators>;
  email_notifications?: InputMaybe<BooleanFilterOperators>;
  external_identifier?: InputMaybe<StringFilterOperators>;
  first_name?: InputMaybe<StringFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  language?: InputMaybe<StringFilterOperators>;
  last_access?: InputMaybe<DateFilterOperators>;
  last_access_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  last_name?: InputMaybe<StringFilterOperators>;
  last_page?: InputMaybe<StringFilterOperators>;
  location?: InputMaybe<StringFilterOperators>;
  password?: InputMaybe<HashFilterOperators>;
  provider?: InputMaybe<StringFilterOperators>;
  role?: InputMaybe<DirectusRolesFilter>;
  status?: InputMaybe<StringFilterOperators>;
  tags?: InputMaybe<StringFilterOperators>;
  tags_func?: InputMaybe<CountFunctionFilterOperators>;
  tfa_secret?: InputMaybe<HashFilterOperators>;
  theme?: InputMaybe<StringFilterOperators>;
  title?: InputMaybe<StringFilterOperators>;
  token?: InputMaybe<HashFilterOperators>;
};

export type DirectusUsersMutated = {
  __typename?: 'directus_users_mutated';
  data?: Maybe<DirectusUsers>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
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

export type Frontpage = {
  __typename?: 'frontpage';
  articles?: Maybe<Array<Maybe<Articles>>>;
  articles_func?: Maybe<CountFunctions>;
  id: Scalars['ID']['output'];
  welcome_message?: Maybe<Scalars['String']['output']>;
};


export type FrontpageArticlesArgs = {
  filter?: InputMaybe<ArticlesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FrontpageFilter = {
  _and?: InputMaybe<Array<InputMaybe<FrontpageFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<FrontpageFilter>>>;
  articles?: InputMaybe<ArticlesFilter>;
  articles_func?: InputMaybe<CountFunctionFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  welcome_message?: InputMaybe<StringFilterOperators>;
};

export type FrontpageMutated = {
  __typename?: 'frontpage_mutated';
  data?: Maybe<Frontpage>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type HashFilterOperators = {
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
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
  cover_image?: Maybe<DirectusFiles>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
};


export type TagsArticlesArgs = {
  filter?: InputMaybe<ArticlesTagsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TagsCoverImageArgs = {
  filter?: InputMaybe<DirectusFilesFilter>;
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
  cover_image?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['Int']['output']>;
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
  cover_image?: InputMaybe<DirectusFilesFilter>;
  id?: InputMaybe<StringFilterOperators>;
  name?: InputMaybe<StringFilterOperators>;
  slug?: InputMaybe<StringFilterOperators>;
  sort?: InputMaybe<NumberFilterOperators>;
  status?: InputMaybe<StringFilterOperators>;
  summary?: InputMaybe<StringFilterOperators>;
};

export type TagsMutated = {
  __typename?: 'tags_mutated';
  data?: Maybe<Tags>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type UserFeedbacks = {
  __typename?: 'user_feedbacks';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<DatetimeFunctions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<DatetimeFunctions>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  sender_name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<DirectusUsers>;
  user_updated?: Maybe<DirectusUsers>;
};


export type UserFeedbacksUserCreatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UserFeedbacksUserUpdatedArgs = {
  filter?: InputMaybe<DirectusUsersFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UserFeedbacksAggregated = {
  __typename?: 'user_feedbacks_aggregated';
  avg?: Maybe<UserFeedbacksAggregatedFields>;
  avgDistinct?: Maybe<UserFeedbacksAggregatedFields>;
  count?: Maybe<UserFeedbacksAggregatedCount>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<UserFeedbacksAggregatedCount>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<UserFeedbacksAggregatedFields>;
  min?: Maybe<UserFeedbacksAggregatedFields>;
  sum?: Maybe<UserFeedbacksAggregatedFields>;
  sumDistinct?: Maybe<UserFeedbacksAggregatedFields>;
};

export type UserFeedbacksAggregatedCount = {
  __typename?: 'user_feedbacks_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['Int']['output']>;
  sender_name?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type UserFeedbacksAggregatedFields = {
  __typename?: 'user_feedbacks_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type UserFeedbacksFilter = {
  _and?: InputMaybe<Array<InputMaybe<UserFeedbacksFilter>>>;
  _or?: InputMaybe<Array<InputMaybe<UserFeedbacksFilter>>>;
  date_created?: InputMaybe<DateFilterOperators>;
  date_created_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  date_updated?: InputMaybe<DateFilterOperators>;
  date_updated_func?: InputMaybe<DatetimeFunctionFilterOperators>;
  id?: InputMaybe<StringFilterOperators>;
  message?: InputMaybe<StringFilterOperators>;
  sender_name?: InputMaybe<StringFilterOperators>;
  sort?: InputMaybe<NumberFilterOperators>;
  status?: InputMaybe<StringFilterOperators>;
  user_created?: InputMaybe<DirectusUsersFilter>;
  user_updated?: InputMaybe<DirectusUsersFilter>;
};

export type UserFeedbacksMutated = {
  __typename?: 'user_feedbacks_mutated';
  data?: Maybe<UserFeedbacks>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type GetDownloadLinkQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDownloadLinkQuery = { __typename?: 'Query', downloadlink?: { __typename?: 'downloadlink', id: string, menulink?: { __typename?: 'menulinks', id: string, title?: string | null, url: string, status?: string | null } | null } | null };

export type GetFrontpageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFrontpageQuery = { __typename?: 'Query', frontpage?: { __typename?: 'frontpage', id: string, welcome_message?: string | null, articles?: Array<{ __typename?: 'articles', id: string, title?: string | null, summary?: string | null, slug: string, cover_image?: { __typename?: 'directus_files', id: string, filename_disk?: string | null, filename_download: string, type?: string | null, description?: string | null, filesize?: any | null, folder?: { __typename?: 'directus_folders', name: string } | null } | null } | null> | null } | null };

export type GetMainMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMainMenuQuery = { __typename?: 'Query', mainmenu?: { __typename?: 'mainmenu', items?: Array<{ __typename?: 'mainmenu_menulinks', menulinks_id?: { __typename?: 'menulinks', id: string, title?: string | null, url: string, status?: string | null, sort?: number | null } | null } | null> | null } | null };

export type GetPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type GetPathQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'articles', id: string, title?: string | null, body?: string | null, tags?: Array<{ __typename?: 'articles_tags', tags_id?: { __typename?: 'tags', id: string, name: string, slug: string } | null } | null> | null }>, tags: Array<{ __typename?: 'tags', id: string, name: string, slug: string, status?: string | null, articles?: Array<{ __typename?: 'articles_tags', articles_id?: { __typename?: 'articles', id: string, title?: string | null, summary?: string | null, slug: string, cover_image?: { __typename?: 'directus_files', id: string, filename_disk?: string | null, filename_download: string, type?: string | null, description?: string | null, filesize?: any | null, folder?: { __typename?: 'directus_folders', name: string } | null } | null } | null } | null> | null }> };

export type GetSideMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSideMenuQuery = { __typename?: 'Query', sidemenu?: { __typename?: 'sidemenu', items?: Array<{ __typename?: 'sidemenu_menulinks', menulinks_id?: { __typename?: 'menulinks', id: string, title?: string | null, url: string, status?: string | null, sort?: number | null } | null } | null> | null } | null };

export type GetTagQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTagQuery = { __typename?: 'Query', tag?: { __typename?: 'tags', id: string, name: string, slug: string, status?: string | null, articles?: Array<{ __typename?: 'articles_tags', articles_id?: { __typename?: 'articles', id: string, title?: string | null, summary?: string | null, slug: string, cover_image?: { __typename?: 'directus_files', id: string, filename_disk?: string | null, filename_download: string, type?: string | null, description?: string | null, filesize?: any | null, folder?: { __typename?: 'directus_folders', name: string } | null } | null } | null } | null> | null } | null };

export type GetTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'tags', id: string, name: string, slug: string, status?: string | null, articles_func?: { __typename?: 'count_functions', count?: number | null } | null }> };


export const GetDownloadLinkDocument = gql`
    query GET_DOWNLOAD_LINK {
  downloadlink {
    id
    menulink {
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
export const GetFrontpageDocument = gql`
    query GET_FRONTPAGE {
  frontpage {
    id
    welcome_message
    articles {
      id
      title
      cover_image {
        id
        folder {
          name
        }
        filename_disk
        filename_download
        type
        description
        filesize
      }
      summary
      slug
    }
  }
}
    `;

/**
 * __useGetFrontpageQuery__
 *
 * To run a query within a Vue component, call `useGetFrontpageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFrontpageQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetFrontpageQuery();
 */
export function useGetFrontpageQuery(options: VueApolloComposable.UseQueryOptions<GetFrontpageQuery, GetFrontpageQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetFrontpageQuery, GetFrontpageQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetFrontpageQuery, GetFrontpageQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetFrontpageQuery, GetFrontpageQueryVariables>(GetFrontpageDocument, {}, options);
}
export function useGetFrontpageLazyQuery(options: VueApolloComposable.UseQueryOptions<GetFrontpageQuery, GetFrontpageQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetFrontpageQuery, GetFrontpageQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetFrontpageQuery, GetFrontpageQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetFrontpageQuery, GetFrontpageQueryVariables>(GetFrontpageDocument, {}, options);
}
export type GetFrontpageQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetFrontpageQuery, GetFrontpageQueryVariables>;
export const GetMainMenuDocument = gql`
    query GET_MAIN_MENU {
  mainmenu {
    items {
      menulinks_id {
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
      tags_id {
        id
        name
        slug
      }
    }
  }
  tags(filter: {slug: {_eq: $path}}) {
    id
    name
    slug
    status
    articles {
      articles_id {
        id
        title
        cover_image {
          id
          folder {
            name
          }
          filename_disk
          filename_download
          type
          description
          filesize
        }
        summary
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
      menulinks_id {
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
      articles_id {
        id
        title
        cover_image {
          id
          folder {
            name
          }
          filename_disk
          filename_download
          type
          description
          filesize
        }
        summary
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