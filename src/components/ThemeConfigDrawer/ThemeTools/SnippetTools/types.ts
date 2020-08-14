export type SnippetModification = {
  title: string
  info?: string
  docs?: string
  configs: Array<{ path: string; value: any }>
}
