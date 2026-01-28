#!/usr/bin/env bash
# exit on error
set -o errexit

# 1. Build the React Frontend
echo "Building React Frontend..."
cd frontend/frontend
npm install
npm run build
cd ../..

# 2. Setup Django
echo "Installing Python Dependencies..."
pip install -r requirements.txt

echo "Collecting Static Files..."
python manage.py collectstatic --no-input

echo "Running Migrations..."
python manage.py migrate