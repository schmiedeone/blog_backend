module.exports = ({ env }) => ({
  kind: "collectionType",
  collectionName: "messages",
  info: {
    name: "Message"
  },
  options: {
    increments: true,
    timestamps: true
  },
  attributes: {
    name: {
      type: "string"
    },
    description: {
      type: "richtext"
    },
    image: {
      collection: "file",
      via: "related",
      allowedTypes: [
        "images"
      ],
      plugin: "upload",
      path : process.env.NODE_ENV === "develop" ? "" : process.env.IMAGE_BUCKET,
      required: true
    }
  }
});
