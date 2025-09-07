#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting deployment process..."

# Generate Prisma client
echo "📦 Generating Prisma client..."
npx prisma generate

# Build TypeScript
echo "🔨 Building TypeScript..."
npm run build

# Push database schema (only if DATABASE_URL is available)
if [ -n "$DATABASE_URL" ]; then
    echo "🗄️  Pushing database schema..."
    npx prisma db push
else
    echo "⚠️  No DATABASE_URL found, skipping database push"
fi

# Start the application
echo "🎯 Starting application..."
npm start
