// category.js

export default {
  title: "Category",
  name: "category",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Title of the category (Bags)",
    },
    // add a unique slug field for queries, permalinks etc
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        // auto generates a slug from the title field
        source: "title",
        auto: true,
      },
    },
    {
      title: "Thumbnail",
      name: "thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
