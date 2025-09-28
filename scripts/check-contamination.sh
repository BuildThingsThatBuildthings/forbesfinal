#!/bin/bash
echo "🧹 Webpack Contamination Prevention Script"
echo "Checking for cross-project contamination..."
if find . -name "*.ts" -o -name "*.tsx" | xargs grep -l "osgv2\|osg3" 2>/dev/null; then
  echo "❌ Cross-project imports detected!"
  exit 1
else
  echo "✅ No cross-project imports found"
fi
echo "✅ Environment clean - ready for development"
