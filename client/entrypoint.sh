#!/bin/sh

sed -i "s|DEFAULT_VALUE|$VITE_BASE_URL|g" /app/dist/config.js
serve -s dist
