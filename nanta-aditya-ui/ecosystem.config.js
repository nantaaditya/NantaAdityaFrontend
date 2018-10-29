module.exports = {
  apps : [{
    name: 'Nanta-Aditya-Dev',
    script: 'npm run dev',
  },
  {
    name: 'Nanta-Aditya-Prod',
    exec_mode: 'cluster',
    instances: 'max',
    cwd: './',
    script:'./node_modules/nuxt/bin/nuxt-start',
  }
]};