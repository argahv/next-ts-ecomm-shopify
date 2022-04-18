import { useApiProvider } from "@common";
import { ApiHooks } from "@common/types/api";
import { MututationHook } from "@common/types/hooks";

export const useHook = (fn: (apiHooks: ApiHooks) => MututationHook) => {
  const { hooks } = useApiProvider();
  return fn(hooks);
};
