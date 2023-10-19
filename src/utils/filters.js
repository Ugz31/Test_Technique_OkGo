import Vue from 'vue'

Vue.filter('boolean', value => {
  if (value === true) return 'Oui'
  if (value === false) return 'Non'
  return value
})