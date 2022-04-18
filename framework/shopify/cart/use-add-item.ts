import { useAddItem } from "@common/cart";
import { MututationHook } from "@common/types/hooks";

export default useAddItem;

export const handler: MututationHook = {
  fetcher: (input: any) => {
    return JSON.stringify(input) + "_MODIFIED";
  },
  useHook: ({ fetch }: any) => {
    return (input: any) => {
      const response = fetch(input);

      return {
        output: response,
      };
    };
  },
};
