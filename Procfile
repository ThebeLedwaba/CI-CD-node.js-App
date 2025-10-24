# For platforms that support extended Procfile format
web: node app.js
worker: node worker.js
healthcheck: curl -f http://localhost:$PORT/health || exit 1
