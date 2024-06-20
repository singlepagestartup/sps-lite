import { app as notification } from "@sps/sps-notification/models/notification/backend/app/root";
import { app as widget } from "@sps/sps-notification/models/widget/backend/app/root";
export const routes = { "/notifications": notification, "/widgets": widget };
