export type UserDataResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: UserData[];
};

export type UserData = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  type: string;
  score: number;
  following_url: string;
  gists_url: string;
  starred_url: string;
  events_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string; // ISO 8601 date-time format
  updated_at: string; // ISO 8601 date-time format
  name: string | null;
  bio: string | null;
  email: string | null;
  location: string | null;
  site_admin: boolean;
  hireable: boolean | null;
  text_matches: SearchResultTextMatch[];
  blog: string | null;
  company: string | null;
  suspended_at: string | null; // ISO 8601 date-time format
};

type SearchResultTextMatch = {
  object_url: string;
  object_type: string | null;
  property: string;
  fragment: string;
  matches: Match[];
};

type Match = {
  text: string;
  indices: number[];
};

// Search results

export type RepoDataResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: RepoData[];
};

export type RepoData = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: SimpleUser | null;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  created_at: string; // ISO 8601 date-time format
  updated_at: string; // ISO 8601 date-time format
  pushed_at: string; // ISO 8601 date-time format
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  open_issues_count: number;
  master_branch: string;
  default_branch: string;
  score: number;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  forks: number;
  open_issues: number;
  watchers: number;
  topics: string[];
  mirror_url: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_pages: boolean;
  has_wiki: boolean;
  has_downloads: boolean;
  has_discussions: boolean;
  archived: boolean;
  disabled: boolean;
  visibility: string;
  license: LicenseSimple | null;
  permissions: Permissions;
  text_matches: SearchResultTextMatch[];
  temp_clone_token?: string;
  allow_merge_commit?: boolean;
  allow_squash_merge?: boolean;
  allow_rebase_merge?: boolean;
  allow_auto_merge?: boolean;
  delete_branch_on_merge?: boolean;
  allow_forking?: boolean;
  is_template?: boolean;
  web_commit_signoff_required?: boolean;
};

type SimpleUser = {
  name: string | null;
  email: string | null;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at?: string;
};

type LicenseSimple = {
  key: string;
  name: string;
  url: string | null;
  spdx_id: string | null;
  node_id: string;
  html_url: string;
};

type Permissions = {
  admin: boolean;
  maintain?: boolean;
  push: boolean;
  triage?: boolean;
  pull: boolean;
};
