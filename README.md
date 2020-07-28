# Blog backend

## To run
- yarn develop
- bash build_run.sh
or from previous folder
- docker-compose up

## To deploy to AWS
- create a .env file and fill in the relevant details including the password in MONGO_URI
- add contents of .ecs.config to your ~/.ecs/config file
- bash deploy_to_aws.sh


