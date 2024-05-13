import { faker } from "@faker-js/faker";
import type { IModel } from "../interfaces/sps-lite";

// export const entity = {
//   id: 2,
//   __component: "page-blocks.contact-section-block",
//   title: faker.lorem.sentence(),
//   subtitle: null,
//   description: faker.lorem.paragraph(),
//   anchor: null,
//   className: null,
//   variant: "centered",
//   media: null,
//   additionalMedia: null,
//   buttonsArrays: [],
//   form: {
//     id: 1,
//     className: null,
//     additionalAttributes: null,
//     variant: "simple",
//     uid: "question",
//     title: "Есть вопросы по продукту?",
//     createdAt: "2023-08-16T17:20:08.157Z",
//     updatedAt: "2023-08-16T17:20:24.420Z",
//     publishedAt: "2023-02-14T17:44:48.245Z",
//     locale: "en",
//     inputs: [
//       {
//         id: 10,
//         placeholder: faker.lorem.words(2),
//         variant: "text",
//         isRequired: true,
//         value: null,
//         name: "name",
//         label: faker.lorem.words(2),
//         className: "col-span-2",
//         type: null,
//         multiple: null,
//         min: null,
//         max: null,
//         step: null,
//         options: [],
//         media: [
//           {
//             id: 36,
//             name: "users group.png",
//             alternativeText: null,
//             caption: null,
//             width: 1920,
//             height: 1920,
//             formats: null,
//             hash: "users_group_0c1f92092c",
//             ext: ".png",
//             mime: "image/png",
//             size: 386.31,
//             url: faker.image.avatarGitHub(),
//             previewUrl: null,
//             provider: "aws-s3",
//             providerMetadata: null,
//             createdAt: "2023-08-16T17:20:15.377Z",
//             updatedAt: "2023-08-16T17:20:15.377Z",
//           },
//         ],
//         additionalMedia: null,
//         extraMedia: null,
//       },
//       {
//         id: 14,
//         placeholder: "Type your email",
//         variant: "text",
//         isRequired: true,
//         value: null,
//         name: "email",
//         label: "Email",
//         className: "col-span-2",
//         type: null,
//         multiple: null,
//         min: null,
//         max: null,
//         step: null,
//         options: [],
//         media: null,
//         additionalMedia: null,
//         extraMedia: null,
//       },
//       {
//         id: 18,
//         placeholder: "Choose target tier",
//         variant: "listbox",
//         isRequired: false,
//         value: null,
//         name: "tier",
//         label: "Tier",
//         className: "col-span-4",
//         type: null,
//         multiple: true,
//         min: null,
//         max: null,
//         step: null,
//         options: [
//           {
//             id: 6,
//             title: "Lite",
//             description: null,
//             media: [
//               {
//                 id: 37,
//                 name: "cloud storage.png",
//                 alternativeText: null,
//                 caption: null,
//                 width: 1920,
//                 height: 1920,
//                 formats: {
//                   large: {
//                     ext: ".png",
//                     url: "https://721511.selcdn.ru/sps-lite-lena/large_cloud_storage_9efee2e902.png",
//                     hash: "large_cloud_storage_9efee2e902",
//                     mime: "image/png",
//                     name: "large_cloud storage.png",
//                     path: null,
//                     size: 955.21,
//                     width: 1000,
//                     height: 1000,
//                   },
//                   small: {
//                     ext: ".png",
//                     url: "https://721511.selcdn.ru/sps-lite-lena/small_cloud_storage_9efee2e902.png",
//                     hash: "small_cloud_storage_9efee2e902",
//                     mime: "image/png",
//                     name: "small_cloud storage.png",
//                     path: null,
//                     size: 232.66,
//                     width: 500,
//                     height: 500,
//                   },
//                   medium: {
//                     ext: ".png",
//                     url: "https://721511.selcdn.ru/sps-lite-lena/medium_cloud_storage_9efee2e902.png",
//                     hash: "medium_cloud_storage_9efee2e902",
//                     mime: "image/png",
//                     name: "medium_cloud storage.png",
//                     path: null,
//                     size: 532.99,
//                     width: 750,
//                     height: 750,
//                   },
//                   thumbnail: {
//                     ext: ".png",
//                     url: "https://721511.selcdn.ru/sps-lite-lena/thumbnail_cloud_storage_9efee2e902.png",
//                     hash: "thumbnail_cloud_storage_9efee2e902",
//                     mime: "image/png",
//                     name: "thumbnail_cloud storage.png",
//                     path: null,
//                     size: 26.54,
//                     width: 156,
//                     height: 156,
//                   },
//                 },
//                 hash: "cloud_storage_9efee2e902",
//                 ext: ".png",
//                 mime: "image/png",
//                 size: 679.45,
//                 url: "https://721511.selcdn.ru/sps-lite-lena/cloud_storage_9efee2e902.png",
//                 previewUrl: null,
//                 provider: "aws-s3",
//                 providerMetadata: null,
//                 createdAt: "2023-08-16T17:20:16.625Z",
//                 updatedAt: "2023-08-16T17:20:16.625Z",
//               },
//             ],
//             additionalMedia: null,
//           },
//           {
//             id: 5,
//             title: "Pro",
//             description: null,
//             media: null,
//             additionalMedia: null,
//           },
//         ],
//         media: [
//           {
//             id: 38,
//             name: "eight ways.png",
//             alternativeText: null,
//             caption: null,
//             width: 1920,
//             height: 1920,
//             formats: {
//               large: {
//                 ext: ".png",
//                 url: "https://721511.selcdn.ru/sps-lite-lena/large_eight_ways_abc2aeb943.png",
//                 hash: "large_eight_ways_abc2aeb943",
//                 mime: "image/png",
//                 name: "large_eight ways.png",
//                 path: null,
//                 size: 838.27,
//                 width: 1000,
//                 height: 1000,
//               },
//               small: {
//                 ext: ".png",
//                 url: "https://721511.selcdn.ru/sps-lite-lena/small_eight_ways_abc2aeb943.png",
//                 hash: "small_eight_ways_abc2aeb943",
//                 mime: "image/png",
//                 name: "small_eight ways.png",
//                 path: null,
//                 size: 215.42,
//                 width: 500,
//                 height: 500,
//               },
//               medium: {
//                 ext: ".png",
//                 url: "https://721511.selcdn.ru/sps-lite-lena/medium_eight_ways_abc2aeb943.png",
//                 hash: "medium_eight_ways_abc2aeb943",
//                 mime: "image/png",
//                 name: "medium_eight ways.png",
//                 path: null,
//                 size: 477.86,
//                 width: 750,
//                 height: 750,
//               },
//               thumbnail: {
//                 ext: ".png",
//                 url: "https://721511.selcdn.ru/sps-lite-lena/thumbnail_eight_ways_abc2aeb943.png",
//                 hash: "thumbnail_eight_ways_abc2aeb943",
//                 mime: "image/png",
//                 name: "thumbnail_eight ways.png",
//                 path: null,
//                 size: 26.74,
//                 width: 156,
//                 height: 156,
//               },
//             },
//             hash: "eight_ways_abc2aeb943",
//             ext: ".png",
//             mime: "image/png",
//             size: 560.39,
//             url: "https://721511.selcdn.ru/sps-lite-lena/eight_ways_abc2aeb943.png",
//             previewUrl: null,
//             provider: "aws-s3",
//             providerMetadata: null,
//             createdAt: "2023-08-16T17:20:17.875Z",
//             updatedAt: "2023-08-16T17:20:17.875Z",
//           },
//         ],
//         additionalMedia: [
//           {
//             id: 39,
//             name: "chevron-down.svg",
//             alternativeText: null,
//             caption: null,
//             width: 24,
//             height: 24,
//             formats: null,
//             hash: "chevron_down_c2924cb19e",
//             ext: ".svg",
//             mime: "image/svg+xml",
//             size: 0.23,
//             url: "https://721511.selcdn.ru/sps-lite-lena/chevron_down_c2924cb19e.svg",
//             previewUrl: null,
//             provider: "aws-s3",
//             providerMetadata: null,
//             createdAt: "2023-08-16T17:20:18.053Z",
//             updatedAt: "2023-08-16T17:20:18.053Z",
//           },
//           {
//             id: 40,
//             name: "chevron-up.svg",
//             alternativeText: null,
//             caption: null,
//             width: 24,
//             height: 24,
//             formats: null,
//             hash: "chevron_up_5381e0d552",
//             ext: ".svg",
//             mime: "image/svg+xml",
//             size: 0.23,
//             url: "https://721511.selcdn.ru/sps-lite-lena/chevron_up_5381e0d552.svg",
//             previewUrl: null,
//             provider: "aws-s3",
//             providerMetadata: null,
//             createdAt: "2023-08-16T17:20:18.209Z",
//             updatedAt: "2023-08-16T17:20:18.209Z",
//           },
//         ],
//         extraMedia: null,
//       },
//       {
//         id: 17,
//         placeholder: "Select hosting type",
//         variant: "radio-group",
//         isRequired: false,
//         value: null,
//         name: "self_hosted",
//         label: "Self Hosted",
//         className: "col-span-4",
//         type: null,
//         multiple: null,
//         min: null,
//         max: null,
//         step: null,
//         options: [
//           {
//             id: 8,
//             title: "Yes",
//             description: null,
//             media: [
//               {
//                 id: 41,
//                 name: "three block.png",
//                 alternativeText: null,
//                 caption: null,
//                 width: 1920,
//                 height: 1920,
//                 formats: {
//                   large: {
//                     ext: ".png",
//                     url: "https://721511.selcdn.ru/sps-lite-lena/large_three_block_76e4f842ec.png",
//                     hash: "large_three_block_76e4f842ec",
//                     mime: "image/png",
//                     name: "large_three block.png",
//                     path: null,
//                     size: 1062.72,
//                     width: 1000,
//                     height: 1000,
//                   },
//                   small: {
//                     ext: ".png",
//                     url: "https://721511.selcdn.ru/sps-lite-lena/small_three_block_76e4f842ec.png",
//                     hash: "small_three_block_76e4f842ec",
//                     mime: "image/png",
//                     name: "small_three block.png",
//                     path: null,
//                     size: 290.24,
//                     width: 500,
//                     height: 500,
//                   },
//                   medium: {
//                     ext: ".png",
//                     url: "https://721511.selcdn.ru/sps-lite-lena/medium_three_block_76e4f842ec.png",
//                     hash: "medium_three_block_76e4f842ec",
//                     mime: "image/png",
//                     name: "medium_three block.png",
//                     path: null,
//                     size: 629.91,
//                     width: 750,
//                     height: 750,
//                   },
//                   thumbnail: {
//                     ext: ".png",
//                     url: "https://721511.selcdn.ru/sps-lite-lena/thumbnail_three_block_76e4f842ec.png",
//                     hash: "thumbnail_three_block_76e4f842ec",
//                     mime: "image/png",
//                     name: "thumbnail_three block.png",
//                     path: null,
//                     size: 33.46,
//                     width: 156,
//                     height: 156,
//                   },
//                 },
//                 hash: "three_block_76e4f842ec",
//                 ext: ".png",
//                 mime: "image/png",
//                 size: 414.59,
//                 url: "https://721511.selcdn.ru/sps-lite-lena/three_block_76e4f842ec.png",
//                 previewUrl: null,
//                 provider: "aws-s3",
//                 providerMetadata: null,
//                 createdAt: "2023-08-16T17:20:19.519Z",
//                 updatedAt: "2023-08-16T17:20:19.519Z",
//               },
//             ],
//             additionalMedia: null,
//           },
//           {
//             id: 7,
//             title: "No",
//             description: null,
//             media: null,
//             additionalMedia: [
//               {
//                 id: 42,
//                 name: "eight ways.png",
//                 alternativeText: null,
//                 caption: null,
//                 width: 1920,
//                 height: 1920,
//                 formats: {
//                   large: {
//                     ext: ".png",
//                     url: "https://721511.selcdn.ru/sps-lite-lena/large_eight_ways_506984a2a3.png",
//                     hash: "large_eight_ways_506984a2a3",
//                     mime: "image/png",
//                     name: "large_eight ways.png",
//                     path: null,
//                     size: 838.27,
//                     width: 1000,
//                     height: 1000,
//                   },
//                   small: {
//                     ext: ".png",
//                     url: "https://721511.selcdn.ru/sps-lite-lena/small_eight_ways_506984a2a3.png",
//                     hash: "small_eight_ways_506984a2a3",
//                     mime: "image/png",
//                     name: "small_eight ways.png",
//                     path: null,
//                     size: 215.42,
//                     width: 500,
//                     height: 500,
//                   },
//                   medium: {
//                     ext: ".png",
//                     url: "https://721511.selcdn.ru/sps-lite-lena/medium_eight_ways_506984a2a3.png",
//                     hash: "medium_eight_ways_506984a2a3",
//                     mime: "image/png",
//                     name: "medium_eight ways.png",
//                     path: null,
//                     size: 477.86,
//                     width: 750,
//                     height: 750,
//                   },
//                   thumbnail: {
//                     ext: ".png",
//                     url: "https://721511.selcdn.ru/sps-lite-lena/thumbnail_eight_ways_506984a2a3.png",
//                     hash: "thumbnail_eight_ways_506984a2a3",
//                     mime: "image/png",
//                     name: "thumbnail_eight ways.png",
//                     path: null,
//                     size: 26.74,
//                     width: 156,
//                     height: 156,
//                   },
//                 },
//                 hash: "eight_ways_506984a2a3",
//                 ext: ".png",
//                 mime: "image/png",
//                 size: 560.39,
//                 url: "https://721511.selcdn.ru/sps-lite-lena/eight_ways_506984a2a3.png",
//                 previewUrl: null,
//                 provider: "aws-s3",
//                 providerMetadata: null,
//                 createdAt: "2023-08-16T17:20:20.823Z",
//                 updatedAt: "2023-08-16T17:20:20.823Z",
//               },
//             ],
//           },
//         ],
//         media: null,
//         additionalMedia: null,
//         extraMedia: null,
//       },
//       {
//         id: 11,
//         placeholder: "Monthly visitors",
//         variant: "range",
//         isRequired: false,
//         value: null,
//         name: "visitors",
//         label: "Monthly visitors",
//         className: "col-span-4",
//         type: null,
//         multiple: null,
//         min: null,
//         max: 10000,
//         step: 100,
//         options: [],
//         media: null,
//         additionalMedia: null,
//         extraMedia: null,
//       },
//       {
//         id: 13,
//         placeholder: "Type your question",
//         variant: "text",
//         isRequired: false,
//         value: null,
//         name: "querstion",
//         label: "Question",
//         className: "col-span-4",
//         type: "textarea",
//         multiple: null,
//         min: null,
//         max: null,
//         step: null,
//         options: [],
//         media: null,
//         additionalMedia: null,
//         extraMedia: null,
//       },
//       {
//         id: 12,
//         placeholder: "Select release date",
//         variant: "date",
//         isRequired: false,
//         value: null,
//         name: "release",
//         label: "Release",
//         className: "col-span-4",
//         type: "date_inline",
//         multiple: null,
//         min: null,
//         max: null,
//         step: null,
//         options: [],
//         media: [
//           {
//             id: 43,
//             name: "catalog.png",
//             alternativeText: null,
//             caption: null,
//             width: 1920,
//             height: 1920,
//             formats: {
//               large: {
//                 ext: ".png",
//                 url: "https://721511.selcdn.ru/sps-lite-lena/large_catalog_a45208d579.png",
//                 hash: "large_catalog_a45208d579",
//                 mime: "image/png",
//                 name: "large_catalog.png",
//                 path: null,
//                 size: 1489.01,
//                 width: 1000,
//                 height: 1000,
//               },
//               small: {
//                 ext: ".png",
//                 url: "https://721511.selcdn.ru/sps-lite-lena/small_catalog_a45208d579.png",
//                 hash: "small_catalog_a45208d579",
//                 mime: "image/png",
//                 name: "small_catalog.png",
//                 path: null,
//                 size: 354.53,
//                 width: 500,
//                 height: 500,
//               },
//               medium: {
//                 ext: ".png",
//                 url: "https://721511.selcdn.ru/sps-lite-lena/medium_catalog_a45208d579.png",
//                 hash: "medium_catalog_a45208d579",
//                 mime: "image/png",
//                 name: "medium_catalog.png",
//                 path: null,
//                 size: 825.38,
//                 width: 750,
//                 height: 750,
//               },
//               thumbnail: {
//                 ext: ".png",
//                 url: "https://721511.selcdn.ru/sps-lite-lena/thumbnail_catalog_a45208d579.png",
//                 hash: "thumbnail_catalog_a45208d579",
//                 mime: "image/png",
//                 name: "thumbnail_catalog.png",
//                 path: null,
//                 size: 36.37,
//                 width: 156,
//                 height: 156,
//               },
//             },
//             hash: "catalog_a45208d579",
//             ext: ".png",
//             mime: "image/png",
//             size: 1046.94,
//             url: "https://721511.selcdn.ru/sps-lite-lena/catalog_a45208d579.png",
//             previewUrl: null,
//             provider: "aws-s3",
//             providerMetadata: null,
//             createdAt: "2023-08-16T17:20:23.376Z",
//             updatedAt: "2023-08-16T17:20:23.376Z",
//           },
//         ],
//         additionalMedia: [
//           {
//             id: 44,
//             name: "calendar.svg",
//             alternativeText: null,
//             caption: null,
//             width: 24,
//             height: 24,
//             formats: null,
//             hash: "calendar_0390d7e801",
//             ext: ".svg",
//             mime: "image/svg+xml",
//             size: 1.14,
//             url: "https://721511.selcdn.ru/sps-lite-lena/calendar_0390d7e801.svg",
//             previewUrl: null,
//             provider: "aws-s3",
//             providerMetadata: null,
//             createdAt: "2023-08-16T17:20:23.526Z",
//             updatedAt: "2023-08-16T17:20:23.526Z",
//           },
//         ],
//         extraMedia: null,
//       },
//       {
//         id: 15,
//         placeholder: "Upload design file",
//         variant: "file",
//         isRequired: false,
//         value: null,
//         name: "design",
//         label: "Design",
//         className: null,
//         type: null,
//         multiple: null,
//         min: null,
//         max: null,
//         step: null,
//         options: [],
//         media: [
//           {
//             id: 45,
//             name: "cloud.svg",
//             alternativeText: null,
//             caption: null,
//             width: 24,
//             height: 24,
//             formats: null,
//             hash: "cloud_8943365c63",
//             ext: ".svg",
//             mime: "image/svg+xml",
//             size: 1.03,
//             url: "https://721511.selcdn.ru/sps-lite-lena/cloud_8943365c63.svg",
//             previewUrl: null,
//             provider: "aws-s3",
//             providerMetadata: null,
//             createdAt: "2023-08-16T17:20:23.719Z",
//             updatedAt: "2023-08-16T17:20:23.719Z",
//           },
//         ],
//         additionalMedia: [
//           {
//             id: 46,
//             name: "trash.svg",
//             alternativeText: null,
//             caption: null,
//             width: 24,
//             height: 24,
//             formats: null,
//             hash: "trash_94796db405",
//             ext: ".svg",
//             mime: "image/svg+xml",
//             size: 0.92,
//             url: "https://721511.selcdn.ru/sps-lite-lena/trash_94796db405.svg",
//             previewUrl: null,
//             provider: "aws-s3",
//             providerMetadata: null,
//             createdAt: "2023-08-16T17:20:23.930Z",
//             updatedAt: "2023-08-16T17:20:23.930Z",
//           },
//         ],
//         extraMedia: null,
//       },
//       {
//         id: 16,
//         placeholder: null,
//         variant: "switch",
//         isRequired: true,
//         value: null,
//         name: "policy",
//         label: "I agree with Terms and Conditions",
//         className: "col-span-4",
//         type: null,
//         multiple: null,
//         min: null,
//         max: null,
//         step: null,
//         options: [],
//         media: null,
//         additionalMedia: null,
//         extraMedia: null,
//       },
//     ],
//     // button: {
//     //   id: 13,
//     //   url: null,
//     //   description: null,
//     //   variant: "primary",
//     //   title: "Send Request",
//     //   additionalAttributes: null,
//     //   className: null,
//     //   media: null,
//     //   additionalMedia: null,
//     //   flyout: null,
//     // },
//   },
// };

export const entity = {};
