module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: process.env.NODE_ENV === 'development' ? process.env.MONGO_URI_DEVELOP : process.env.MONGO_URI
      },
      options: {
        ssl: true,
      },
    },
  },
});
