export type MututationHookContext = {
  fetch: (input: any) => any;
};

export type MututationHook = {
  fetcher: (input: any) => any;
  useHook(context: MututationHookContext): (input: any) => any;
};
