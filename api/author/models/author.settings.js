module.exports = ({ env }) => ({
  kind: "collectionType",
  collectionName: "authors",
  info: {
    name: "Author"
  },
  options: {
    increments: true,
    timestamps: true
  },
  attributes: {
    articles: {
      collection: "article",
      via: "author"
    },
    name: {
      type: "string"
    },
    image: {
      collection: "file",
      via: "related",
      allowedTypes: [
        "images"
      ],
      plugin: "upload",
      path: process.env.NODE_ENV === "develop" ? "" : process.env.IMAGE_BUCKET,
      required: true
    },
    description: {
      type: "richtext"
    }
  }
});
