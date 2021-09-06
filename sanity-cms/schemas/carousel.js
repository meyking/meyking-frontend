// carousel.js

export default {
  title: "Carousel",
  name: "carousel",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "Title of the product",
    },
    {
      title: "Thumbnail",
      name: "thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Product",
      name: "product",
      type: "reference",
      to: [{ type: "product" }],
    },
  ],
};
