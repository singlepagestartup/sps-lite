import { ISpsLiteBackendApiReview } from "../interfaces/sps-lite";
import { entity as file } from "~redux/services/backend/extensions/upload/api/file/mock/sps-lite";

export const entity: ISpsLiteBackendApiReview = {
  id: 5,
  name: "Emily Wilson",
  title: "Exceptional Startup with Great Potential",
  description:
    "I had the pleasure of working with this startup and I was very impressed with their innovation and dedication to their customers. Their team is very knowledgeable and professional and I am confident that they have great potential for future success. I am looking forward to seeing what new innovations they come up with next. I highly recommend this startup to anyone looking for innovative solutions.",
  subtitle: "Looking Forward to Future Innovations",
  rating: 5,
  media: [{ ...file }],
  additionalMedia: null,
  createdAt: "2023-02-14T08:49:14.623Z",
  updatedAt: "2023-02-14T08:49:53.551Z",
  publishedAt: "2023-02-14T22:48:50.378Z",
};
