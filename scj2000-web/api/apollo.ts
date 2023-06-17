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
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  media?: Maybe<UploadFileRelationResponseCollection>;
  path?: Maybe<PathEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  tags?: Maybe<TagRelationResponseCollection>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ArticleMediaArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  path?: InputMaybe<PathFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  path?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  data: Array<ArticleEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentMenuMenuLink = {
  __typename?: 'ComponentMenuMenuLink';
  id: Scalars['ID']['output'];
  menuItem?: Maybe<MenuItemEntityResponse>;
};

export type ComponentMenuMenuLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMenuMenuLinkFiltersInput>>>;
  menuItem?: InputMaybe<MenuItemFiltersInput>;
  not?: InputMaybe<ComponentMenuMenuLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMenuMenuLinkFiltersInput>>>;
};

export type ComponentMenuMenuLinkInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  menuItem?: InputMaybe<Scalars['ID']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DownloadLink = {
  __typename?: 'DownloadLink';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  menuLink?: Maybe<ComponentMenuMenuLink>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DownloadLinkEntity = {
  __typename?: 'DownloadLinkEntity';
  attributes?: Maybe<DownloadLink>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DownloadLinkEntityResponse = {
  __typename?: 'DownloadLinkEntityResponse';
  data?: Maybe<DownloadLinkEntity>;
};

export type DownloadLinkInput = {
  menuLink?: InputMaybe<ComponentMenuMenuLinkInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Article | ComponentMenuMenuLink | DownloadLink | I18NLocale | MainMenu | MenuItem | Path | SideMenu | Tag | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type MainMenu = {
  __typename?: 'MainMenu';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  menuLink: Array<Maybe<ComponentMenuMenuLink>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MainMenuMenuLinkArgs = {
  filters?: InputMaybe<ComponentMenuMenuLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MainMenuEntity = {
  __typename?: 'MainMenuEntity';
  attributes?: Maybe<MainMenu>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MainMenuEntityResponse = {
  __typename?: 'MainMenuEntityResponse';
  data?: Maybe<MainMenuEntity>;
};

export type MainMenuInput = {
  menuLink?: InputMaybe<Array<InputMaybe<ComponentMenuMenuLinkInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MenuItem = {
  __typename?: 'MenuItem';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  externalLink: Scalars['Boolean']['output'];
  path?: Maybe<PathEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type MenuItemEntity = {
  __typename?: 'MenuItemEntity';
  attributes?: Maybe<MenuItem>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MenuItemEntityResponse = {
  __typename?: 'MenuItemEntityResponse';
  data?: Maybe<MenuItemEntity>;
};

export type MenuItemEntityResponseCollection = {
  __typename?: 'MenuItemEntityResponseCollection';
  data: Array<MenuItemEntity>;
  meta: ResponseCollectionMeta;
};

export type MenuItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenuItemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  externalLink?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<MenuItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenuItemFiltersInput>>>;
  path?: InputMaybe<PathFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type MenuItemInput = {
  externalLink?: InputMaybe<Scalars['Boolean']['input']>;
  path?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createArticle?: Maybe<ArticleEntityResponse>;
  createMenuItem?: Maybe<MenuItemEntityResponse>;
  createPath?: Maybe<PathEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteDownloadLink?: Maybe<DownloadLinkEntityResponse>;
  deleteMainMenu?: Maybe<MainMenuEntityResponse>;
  deleteMenuItem?: Maybe<MenuItemEntityResponse>;
  deletePath?: Maybe<PathEntityResponse>;
  deleteSideMenu?: Maybe<SideMenuEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateDownloadLink?: Maybe<DownloadLinkEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateMainMenu?: Maybe<MainMenuEntityResponse>;
  updateMenuItem?: Maybe<MenuItemEntityResponse>;
  updatePath?: Maybe<PathEntityResponse>;
  updateSideMenu?: Maybe<SideMenuEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
};


export type MutationCreateMenuItemArgs = {
  data: MenuItemInput;
};


export type MutationCreatePathArgs = {
  data: PathInput;
};


export type MutationCreateTagArgs = {
  data: TagInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenuItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePathArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateDownloadLinkArgs = {
  data: DownloadLinkInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateMainMenuArgs = {
  data: MainMenuInput;
};


export type MutationUpdateMenuItemArgs = {
  data: MenuItemInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePathArgs = {
  data: PathInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSideMenuArgs = {
  data: SideMenuInput;
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Path = {
  __typename?: 'Path';
  article?: Maybe<ArticleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  tag?: Maybe<TagEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type PathEntity = {
  __typename?: 'PathEntity';
  attributes?: Maybe<Path>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PathEntityResponse = {
  __typename?: 'PathEntityResponse';
  data?: Maybe<PathEntity>;
};

export type PathEntityResponseCollection = {
  __typename?: 'PathEntityResponseCollection';
  data: Array<PathEntity>;
  meta: ResponseCollectionMeta;
};

export type PathFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PathFiltersInput>>>;
  article?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PathFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PathFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  tag?: InputMaybe<TagFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type PathInput = {
  article?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  tag?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  downloadLink?: Maybe<DownloadLinkEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  mainMenu?: Maybe<MainMenuEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  menuItem?: Maybe<MenuItemEntityResponse>;
  menuItems?: Maybe<MenuItemEntityResponseCollection>;
  path?: Maybe<PathEntityResponse>;
  paths?: Maybe<PathEntityResponseCollection>;
  sideMenu?: Maybe<SideMenuEntityResponse>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDownloadLinkArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMainMenuArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryMenuItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMenuItemsArgs = {
  filters?: InputMaybe<MenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPathArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPathsArgs = {
  filters?: InputMaybe<PathFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySideMenuArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type SideMenu = {
  __typename?: 'SideMenu';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  menuLink?: Maybe<Array<Maybe<ComponentMenuMenuLink>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SideMenuMenuLinkArgs = {
  filters?: InputMaybe<ComponentMenuMenuLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SideMenuEntity = {
  __typename?: 'SideMenuEntity';
  attributes?: Maybe<SideMenu>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SideMenuEntityResponse = {
  __typename?: 'SideMenuEntityResponse';
  data?: Maybe<SideMenuEntity>;
};

export type SideMenuInput = {
  menuLink?: InputMaybe<Array<InputMaybe<ComponentMenuMenuLinkInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  articleCount?: Maybe<Scalars['Int']['output']>;
  articles?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  path?: Maybe<PathEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TagArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  path?: InputMaybe<PathFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type GetDownloadLinkQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDownloadLinkQuery = { __typename?: 'Query', downloadLink?: { __typename?: 'DownloadLinkEntityResponse', data?: { __typename?: 'DownloadLinkEntity', attributes?: { __typename?: 'DownloadLink', menuLink?: { __typename?: 'ComponentMenuMenuLink', menuItem?: { __typename?: 'MenuItemEntityResponse', data?: { __typename?: 'MenuItemEntity', attributes?: { __typename?: 'MenuItem', title: string, url: string, externalLink: boolean, path?: { __typename?: 'PathEntityResponse', data?: { __typename?: 'PathEntity', attributes?: { __typename?: 'Path', article?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', title?: string | null } | null } | null } | null } | null } | null } | null } | null } | null } | null } | null } | null } | null } | null };

export type GetMainMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMainMenuQuery = { __typename?: 'Query', mainMenu?: { __typename?: 'MainMenuEntityResponse', data?: { __typename?: 'MainMenuEntity', attributes?: { __typename?: 'MainMenu', menuLink: Array<{ __typename?: 'ComponentMenuMenuLink', menuItem?: { __typename?: 'MenuItemEntityResponse', data?: { __typename?: 'MenuItemEntity', attributes?: { __typename?: 'MenuItem', title: string, url: string, externalLink: boolean, path?: { __typename?: 'PathEntityResponse', data?: { __typename?: 'PathEntity', attributes?: { __typename?: 'Path', article?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', title?: string | null } | null } | null } | null } | null } | null } | null } | null } | null } | null } | null> } | null } | null } | null };

export type GetPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type GetPathQuery = { __typename?: 'Query', paths?: { __typename?: 'PathEntityResponseCollection', data: Array<{ __typename?: 'PathEntity', id?: string | null, attributes?: { __typename?: 'Path', url: string, article?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', title?: string | null, body?: string | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name?: string | null } | null }> } | null } | null } | null } | null } | null }> } | null };

export type GetSideMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSideMenuQuery = { __typename?: 'Query', sideMenu?: { __typename?: 'SideMenuEntityResponse', data?: { __typename?: 'SideMenuEntity', attributes?: { __typename?: 'SideMenu', menuLink?: Array<{ __typename?: 'ComponentMenuMenuLink', menuItem?: { __typename?: 'MenuItemEntityResponse', data?: { __typename?: 'MenuItemEntity', attributes?: { __typename?: 'MenuItem', title: string, url: string, externalLink: boolean, path?: { __typename?: 'PathEntityResponse', data?: { __typename?: 'PathEntity', attributes?: { __typename?: 'Path', article?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', title?: string | null } | null } | null } | null } | null } | null } | null } | null } | null } | null } | null> | null } | null } | null } | null };

export type GetTagQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTagQuery = { __typename?: 'Query', tag?: { __typename?: 'TagEntityResponse', data?: { __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name?: string | null, articleCount?: number | null, path?: { __typename?: 'PathEntityResponse', data?: { __typename?: 'PathEntity', attributes?: { __typename?: 'Path', url: string } | null } | null } | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', title?: string | null, path?: { __typename?: 'PathEntityResponse', data?: { __typename?: 'PathEntity', attributes?: { __typename?: 'Path', url: string } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type GetTagsQueryVariables = Exact<{
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetTagsQuery = { __typename?: 'Query', tags?: { __typename?: 'TagEntityResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name?: string | null, articleCount?: number | null, path?: { __typename?: 'PathEntityResponse', data?: { __typename?: 'PathEntity', attributes?: { __typename?: 'Path', url: string } | null } | null } | null } | null }> } | null };


export const GetDownloadLinkDocument = gql`
    query GET_DOWNLOAD_LINK {
  downloadLink {
    data {
      attributes {
        menuLink {
          menuItem {
            data {
              attributes {
                title
                url
                externalLink
                path {
                  data {
                    attributes {
                      article {
                        data {
                          attributes {
                            title
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
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
  mainMenu {
    data {
      attributes {
        menuLink {
          menuItem {
            data {
              attributes {
                title
                url
                externalLink
                path {
                  data {
                    attributes {
                      article {
                        data {
                          attributes {
                            title
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
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
  paths(filters: {url: {eq: $path}}) {
    data {
      id
      attributes {
        url
        article {
          data {
            attributes {
              title
              body
              tags {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
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
  sideMenu {
    data {
      attributes {
        menuLink {
          menuItem {
            data {
              attributes {
                title
                url
                externalLink
                path {
                  data {
                    attributes {
                      article {
                        data {
                          attributes {
                            title
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
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
  tag(id: $id) {
    data {
      id
      attributes {
        name
        path {
          data {
            attributes {
              url
            }
          }
        }
        articleCount
        articles {
          data {
            attributes {
              title
              path {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
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
    query GET_TAGS($pageSize: Int) {
  tags(pagination: {page: 1, pageSize: $pageSize}) {
    data {
      id
      attributes {
        name
        path {
          data {
            attributes {
              url
            }
          }
        }
        articleCount
      }
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
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetTagsQuery({
 *   pageSize: // value for 'pageSize'
 * });
 */
export function useGetTagsQuery(variables: GetTagsQueryVariables | VueCompositionApi.Ref<GetTagsQueryVariables> | ReactiveFunction<GetTagsQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<GetTagsQuery, GetTagsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTagsQuery, GetTagsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTagsQuery, GetTagsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, variables, options);
}
export function useGetTagsLazyQuery(variables: GetTagsQueryVariables | VueCompositionApi.Ref<GetTagsQueryVariables> | ReactiveFunction<GetTagsQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<GetTagsQuery, GetTagsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetTagsQuery, GetTagsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetTagsQuery, GetTagsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, variables, options);
}
export type GetTagsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetTagsQuery, GetTagsQueryVariables>;