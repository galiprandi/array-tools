#!/usr/bin/env node

import prompts from 'prompts'
import { execSync } from 'child_process';

// Preguntar qué tipo de versión se quiere aumentar
(async () => {
  const response = await prompts({
    type: 'select',
    name: 'versionType',
    message: '📦 What type of version bump do you want?',
    choices: [
      { title: 'Patch (e.g. 1.0.0 → 1.0.1)', value: 'patch' },
      { title: 'Minor (e.g. 1.0.0 → 1.1.0)', value: 'minor' },
      { title: 'Major (e.g. 1.0.0 → 2.0.0)', value: 'major' }
    ]
  })

  if (!response.versionType) {
    console.log('❌ Release cancelled.')
    process.exit(1)
  }

  const versionType = response.versionType
  console.log(`🚀 Bumping ${versionType} version...`)

  try {
    // Aumentar la versión en package.json
    execSync(`npm version ${versionType} --no-git-tag-version`, {
      stdio: 'inherit'
    })

    // Publicar en npm
    console.log('📦 Publishing to npm...')
    execSync('npm publish --access public', { stdio: 'inherit' })

    console.log('🎉 Release completed successfully!')
  } catch (error) {
    console.error('❌ Error during release:', error.message)
    process.exit(1)
  }
})()
