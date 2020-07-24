docker build --tag blog_backend:0.1.0 .

docker rm -f blog_backend
docker run -p 8000:1337 -d --name blog_backend blog_backend:0.1.0