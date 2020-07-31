module.exports = ({ env }) => ({
  kind: "collectionType",
  collectionName: "articles",
  info: {
    name: "article"
  },
  options: {
    increments: true,
    timestamps: true
  },
  attributes: {
    title: {
      type: "string",
      required: true
    },
    content: {
      type: "richtext",
      required: true
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
    published_at: {
      required: true,
      type: "date"
    },
    category: {
      via: "articles",
      model: "category"
    },
    author: {
      via: "articles",
      model: "author"
    }
  }
});
