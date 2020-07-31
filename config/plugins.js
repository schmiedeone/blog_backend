module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: 'eu-central-1',
        params: {
          Bucket: process.env.NODE_ENV === 'develop' ? 'schmiede-blog-images-development' : 'schmiede-blog-images',
        },
      },
    },
  });