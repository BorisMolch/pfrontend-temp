import { defineConfig } from "tinacms";
import { blog_postFields } from "./templates";
import { job_postFields } from "./templates";
import { patch_postFields } from "./templates";
import { worksFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: '3153250d-2486-4960-a481-aef050f6351e', // Get this from tina.io
  token: 'd020f1e50fb20f4a0de1cd36fe16ae6b7b37d08c', // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "yml",
        label: "Homepage",
        name: "homepage",
        path: "data/en",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "homepage",
        },
        fields: [
          {
            type: "object",
            name: "scroller",
            label: "Scroller",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              { name: "speed", label: "Speed", type: "string" },
              { name: "autohide", label: "Auto Hide", type: "boolean" },
              { name: "link", label: "Link", type: "string" },
              { name: "text", label: "Text", type: "string" },
            ],
          },
          {
            type: "object",
            name: "alert",
            label: "Alert",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              { name: "type", label: "Type", type: "string" },
              { name: "title", label: "Title", type: "string" },
              { name: "text", label: "Text", type: "string" },
              { name: "link", label: "Link", type: "string" },
            ],
          },
          {
            type: "object",
            name: "banner",
            label: "Banner",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              { name: "title", label: "Title", type: "string" },
              { name: "logotype", label: "Logotype", type: "image" },
              { name: "content", label: "Content", type: "string" },
              { name: "bannertext", label: "Banner Text", type: "string" },
              { name: "videourl", label: "Video URL", type: "string" },
              { name: "gif", label: "GIF", type: "string" },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { name: "text", label: "Text", type: "string" },
              { name: "link", label: "Link", type: "string" },
              { name: "linktext", label: "Link Text", type: "string" },
            ],
          },
          {
            type: "object",
            name: "intro",
            label: "Intro",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "description", label: "Description", type: "string" },
            ],
          },
          {
            type: "object",
            name: "awards",
            label: "Awards",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              {
                type: "object",
                name: "award_item",
                label: "Award Items",
                list: true,
                fields: [
                  { name: "logo_name_base", label: "Logo Name Base", type: "string" },
                  { name: "logo_alt", label: "Logo Alt Text", type: "string" },
                  { name: "quote", label: "Quote", type: "string" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "feature",
            label: "Features",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              {
                type: "object",
                name: "feature_item",
                label: "Feature Items",
                list: true,
                fields: [
                  { name: "title", label: "Title", type: "string" },
                  { name: "image_base_path", label: "Image Base Path", type: "string" },
                  { name: "image_alt", label: "Image Alt Text", type: "string" },
                  { name: "content", label: "Content", type: "string" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "testimonial",
            label: "Testimonials",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              {
                type: "object",
                name: "testimonial_item",
                label: "Testimonial Items",
                list: true,
                fields: [
                  { name: "name", label: "Name", type: "string" },
                  { name: "content", label: "Content", type: "string" },
                  { name: "date", label: "Date", type: "string" },
                  { name: "rating", label: "Rating", type: "number" },
                ],
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
              },
            ],
          },
          {
            type: "object",
            name: "company",
            label: "Company",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              { name: "address1title", label: "Address Title", type: "string" },
              { name: "address1street", label: "Street", type: "string" },
              { name: "address1extra", label: "Additional Info", type: "string" },
              { name: "address1city", label: "City", type: "string" },
              { name: "address1country", label: "Country", type: "string" },
              { name: "email", label: "Email", type: "string" },
            ],
          },
          {
            type: "object",
            name: "feature_slider",
            label: "Feature Slider",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              {
                type: "object",
                name: "slider_item",
                label: "Slider Items",
                list: true,
                fields: [
                  { name: "feature_title", label: "Feature Title", type: "string" },
                  { name: "feature_text", label: "Feature Text", type: "string" },
                  { name: "feature_image", label: "Feature Image", type: "string" },
                  { name: "feature_image_alt", label: "Feature Image Alt Text", type: "string" },
                ],
                ui: {
                  itemProps: (item) => {
                    return { label: item?.feature_title };
                  },
                },
              },
            ],
          },
          {
            type: "object",
            name: "quote_slider",
            label: "Quote Slider",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              {
                type: "object",
                name: "slider_item",
                label: "Slider Items",
                list: true,
                fields: [
                  { name: "quote", label: "Quote", type: "string" },
                  { name: "quote_by", label: "Quote By", type: "string" },
                ],
                ui: {
                  itemProps: (item) => {
                    return { label: item?.quote };
                  },
                },
              },
            ],
          },
          {
            type: "object",
            name: "discord_banner",
            label: "Discord Banner",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              { name: "image_base_path", label: "Image Base Path", type: "string" },
              { name: "image_alt", label: "Image Alt Text", type: "string" },
              { name: "label", label: "Label", type: "string" },
              { name: "text", label: "Text", type: "string" },
            ],
          },
          {
            type: "object",
            name: "download",
            label: "Download Section",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              {
                type: "object",
                name: "download_buttons",
                label: "Download Buttons",
                list: true,
                fields: [
                  { name: "label", label: "Label", type: "string" },
                  { name: "logo", label: "Logo Path", type: "string" },
                  { name: "link", label: "Link", type: "string" },
                ],
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                },
              },
            ],
          },
          {
            type: "object",
            name: "promo_video",
            label: "Promo Video",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              { name: "title", label: "Title", type: "string" },
              { name: "content", label: "Content", type: "string" },
              { name: "bg_image", label: "Background Image", type: "string" },
              { name: "video_embed_url", label: "Video Embed URL", type: "string" },
            ],
          },
          {
            type: "object",
            name: "usp",
            label: "USP Section",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              { name: "image", label: "Image", type: "string" },
              {
                type: "object",
                name: "usp_item",
                label: "USP Items",
                list: true,
                fields: [
                  { name: "name", label: "Name", type: "string" },
                  { name: "icon", label: "Icon", type: "string" },
                  { name: "image", label: "Image", type: "string" },
                  { name: "content", label: "Content", type: "string" },
                ],
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
              },
            ],
          },
          {
            type: "object",
            name: "community",
            label: "Community Section",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
            ],
          },
          {
            type: "object",
            name: "blog",
            label: "Blog Section",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
            ],
          },
          {
            type: "object",
            name: "patchworld",
            label: "Patchworld Section",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              { name: "heading", label: "Heading", type: "string" },
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
              {
                type: "object",
                name: "download_buttons",
                label: "Download Buttons",
                list: true,
                fields: [
                  { name: "label", label: "Label", type: "string" },
                  { name: "icon", label: "Icon", type: "string" },
                  { name: "link", label: "Link", type: "string" },
                ],
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                },
              },
            ],
          },
          {
            type: "object",
            name: "patchathon",
            label: "Patchathon Section",
            fields: [
              { name: "enable", label: "Enable", type: "boolean" },
              { name: "title", label: "Title", type: "string" },
              { name: "subtitle", label: "Subtitle", type: "string" },
            ],
          },
        ],
      },
      {
        format: "yml",
        label: "Blog settings",
        name: "blog_settings",
        path: "data/en",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "blog",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "md",
        label: "Community",
        name: "community",
        path: "content/community",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...patch_postFields(),
        ],
      },
      {
        format: "yml",
        label: "Community Info",
        name: "community_info",
        path: "data/en",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "community",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "md",
        label: "Works",
        name: "works",
        path: "content/works",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...worksFields(),
        ],
      },
      {
        format: "md",
        label: "Works/Info",
        name: "works_info",
        path: "content/info",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "yml",
        label: "Patchathon",
        name: "patchathon",
        path: "data/en",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "patchathon",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "yml",
        label: "Patchathon Live Stream",
        name: "patchathon_live_stream",
        path: "data/en",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "livepatchathon",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "yml",
        label: "About",
        name: "about",
        path: "data/en",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "md",
        label: "Blog",
        name: "blog",
        path: "content/blog",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
            templates: [ // Add this template array
                   {
                     name: 'youtube',
                     label: 'YouTube video',
                     match: {
                       start: '{{<',
                       end: '>}}',
                     },
                     fields: [
                       {
                         name: 'id',
                         label: 'YouTube Video ID',
                         type: 'string',
                         required: true,
                       },
                     ],
                   }, // Ensure closing brace for the template object
                 ], // Ensure closing square bracket for the templates array
               },
          ...blog_postFields(),
        ],
      },
      {
        format: "yml",
        label: "Team",
        name: "team",
        path: "data/en",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "team",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "md",
        label: "Jobs",
        name: "jobs",
        path: "content/jobs",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "yml",
        label: "FAQ",
        name: "faq",
        path: "data/en",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "faq",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "md",
        label: "Contact",
        name: "contact",
        path: "content/contact",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Presskit",
        name: "presskit",
        path: "content/presskit",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "License",
        name: "license",
        path: "content/license",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "yml",
        label: "Japanese",
        name: "japanese",
        path: "data/en",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "japanese",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "yml",
        label: "Linktree",
        name: "linktree",
        path: "data/en",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "links",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "yaml",
        label: "i18n Strings",
        name: "i18n_strings",
        path: "i18n",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "en",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
    ],
  },
});
