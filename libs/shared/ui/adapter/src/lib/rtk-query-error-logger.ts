import { isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "sonner";

export const rtkQueryErrorLogger = (api: any) => {
  return (next: any) => {
    return (action: any) => {
      // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
      if (isRejectedWithValue(action)) {
        const message = action.payload.data?.length
          ? action.payload.data[0].message
          : action.payload.data?.message
            ? action.payload.data.message
            : "An error occurred. Watch to the console";

        if (message) {
          toast.error(message.toString());
        }
      }

      return next(action);
    };
  };
};
