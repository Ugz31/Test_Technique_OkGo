import Vue from 'vue'

Vue.filter('roles', value => {
  if (value === 'user') return 'Utilisateur'
  if (value === 'admin') return 'Administrateur'
  return value
})

Vue.filter('boolean', value => {
  if (value === true) return 'Oui'
  if (value === false) return 'Non'
  return value
})