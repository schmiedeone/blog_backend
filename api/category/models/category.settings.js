module.exports = ({ env }) => ({
  kind: "collectionType",
  collectionName: "categories",
  info: {
    name: "category"
  },
  options: {
    increments: true,
    timestamps: true
  },
  attributes: {
    name: {
      type: "string"
    },
    articles: {
      collection: "article",
      via: "category"
    },
    image: {
      collection: "file",
      via: "related",
      allowedTypes: [
        "images"
      ],
      plugin: "upload",
      path: process.env.NODE_ENV === "develop" ? process.env.IMAGE_BUCKET_DEVELOPMENT : process.env.IMAGE_BUCKET,
      required: true
    },
    description: {
      type: "richtext"
    }
  }
});
