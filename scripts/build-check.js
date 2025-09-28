#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log('🔍 Checking build environment...')

// Check if Sanity project ID is configured
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const hasValidSanity = projectId &&
  projectId !== 'placeholder-project-id' &&
  projectId !== 'your_project_id_here' &&
  projectId.trim() !== ''

if (!hasValidSanity) {
  console.log('⚠️  Sanity not configured - using fallback data for build')
  console.log('📝 To enable Sanity CMS:')
  console.log('   1. Create a Sanity project at https://www.sanity.io/manage')
  console.log('   2. Set NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
  console.log('   3. Set NEXT_PUBLIC_SANITY_DATASET environment variable')
} else {
  console.log('✅ Sanity configuration found')
}

// Check for analytics configuration
const gaId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID
const gtmId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID

if (!gaId && !gtmId) {
  console.log('📊 Analytics not configured (optional)')
} else {
  console.log('✅ Analytics configuration found')
}

console.log('🚀 Proceeding with build...')
process.exit(0)