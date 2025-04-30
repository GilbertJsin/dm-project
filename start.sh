#!/bin/sh
set -e

# Echo commands for debugging
set -x

# Prevent browser opening attempts by setting BROWSER environment variable
export BROWSER="none"

echo "Starting Storybook..."
npm run storybook -- --port 6006 --host 0.0.0.0 --no-open > /tmp/storybook.log 2>&1 &
STORYBOOK_PID=$!

echo "Starting Vite..."
npm run dev -- --host 0.0.0.0 &
VITE_PID=$!

# Check if Storybook is running using a compatible ps command for Alpine
sleep 5
if ! cat /proc/$STORYBOOK_PID/status >/dev/null 2>&1; then
  echo "Storybook failed to start. Logs:"
  cat /tmp/storybook.log
  exit 1
fi

# Monitor both processes
wait $STORYBOOK_PID $VITE_PID