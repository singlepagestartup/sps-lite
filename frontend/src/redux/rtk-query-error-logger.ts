import { isRejectedWithValue } from "@reduxjs/toolkit";
import { createNotification } from "~components/notification";

export const rtkQueryErrorLogger = (api: any) => {
  return (next: any) => {
    return (action: any) => {
      // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
      if (isRejectedWithValue(action)) {
        if (action?.payload?.data?.error?.message) {
          // console.log(`🚀 ~ return ~ action`, action);
          createNotification({
            title: action.payload.data.error.name,
            message: action.payload.data.error.message,
            className: "notification-error",
            duration: 10000,
          });
        }
      }

      return next(action);
    };
  };
};
