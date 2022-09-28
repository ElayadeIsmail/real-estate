#! /bin/sh

# Apply database migrations
echo "Apply database migrations"
yarn migrate

# Start server
echo "Starting server"
yarn dev