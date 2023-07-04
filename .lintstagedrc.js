module.exports = {
  '*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}': () => ['pnpm lint', 'pnpm format'],
  '*.json': 'pnpm format'
}
