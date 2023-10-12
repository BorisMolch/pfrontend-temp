export function blog_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "slug",
      label: "slug",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
    {
      type: "string",
      name: "ctalink",
      label: "CTA Link",
    },
    {
      type: "string",
      name: "ctatext",
      label: "CTA text",
    },
  ];
}
export function job_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
  ];
}
export function patch_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "boolean",
      name: "featured_patch",
      label: "Featured Patch",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "video",
      label: "video",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "string",
      name: "location",
      label: "location",
    },
    {
      type: "string",
      name: "link1",
      label: "link1",
    },
    {
      type: "string",
      name: "link2",
      label: "link2",
    },
    {
      type: "string",
      name: "twitter",
      label: "twitter",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "bio",
      label: "Bio",
      ui: {
        component: "textarea",
      },
    },
  ];
}
export function worksFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "image",
      name: "videothumb",
      label: "videothumb",
    },
    {
      type: "string",
      name: "what",
      label: "what",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "description",
      required: true,
    },
    {
      type: "string",
      name: "platform",
      label: "platform",
      required: true,
    },
    {
      type: "string",
      name: "video",
      label: "video",
    },
    {
      type: "number",
      name: "year",
      label: "year",
      required: true,
    },
    {
      type: "string",
      name: "section1",
      label: "section1",
    },
    {
      type: "string",
      name: "title1",
      label: "title1",
    },
    {
      type: "string",
      name: "text1",
      label: "text1",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "section2",
      label: "section2",
    },
    {
      type: "string",
      name: "title2",
      label: "title2",
    },
    {
      type: "string",
      name: "text2",
      label: "text2",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image2",
      label: "image2",
    },
    {
      type: "image",
      name: "image3",
      label: "image3",
    },
    {
      type: "string",
      name: "text3",
      label: "text3",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image4",
      label: "image4",
    },
    {
      type: "string",
      name: "section4",
      label: "section4",
    },
    {
      type: "string",
      name: "title4",
      label: "title4",
    },
    {
      type: "string",
      name: "text4",
      label: "text4",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image5",
      label: "image5",
    },
    {
      type: "string",
      name: "quote",
      label: "quote",
    },
    {
      type: "string",
      name: "quoteauthor",
      label: "quoteauthor",
    },
    {
      type: "string",
      name: "role1",
      label: "role1",
    },
    {
      type: "string",
      name: "person1",
      label: "person1",
    },
    {
      type: "string",
      name: "role2",
      label: "role2",
    },
    {
      type: "string",
      name: "person2",
      label: "person2",
    },
    {
      type: "string",
      name: "role3",
      label: "role3",
    },
    {
      type: "string",
      name: "person3",
      label: "person3",
    },
    {
      type: "string",
      name: "role4",
      label: "role4",
    },
    {
      type: "string",
      name: "person4",
      label: "person4",
    },
    {
      type: "string",
      name: "role5",
      label: "role5",
    },
    {
      type: "string",
      name: "person5",
      label: "person5",
    },
    {
      type: "string",
      name: "role6",
      label: "role6",
    },
    {
      type: "string",
      name: "person6",
      label: "person6",
    },
    {
      type: "string",
      name: "role7",
      label: "role7",
    },
    {
      type: "string",
      name: "person7",
      label: "person7",
    },
    {
      type: "string",
      name: "role8",
      label: "role8",
    },
    {
      type: "string",
      name: "person8",
      label: "person8",
    },
  ];
}
