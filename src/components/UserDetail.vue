<template>
  <div class="has-text-centered">
    <router-link to="/users" class="button is-info mb-2">
      Retour
    </router-link>
    <h2 class="title">Détails de l'utilisateur</h2>
    <div v-if="user">
      <p><strong>Nom:</strong> {{ user.name }}</p>
      <p><strong>Utilisateur:</strong> {{ user.firstname }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Adresse:</strong> {{ user.address.line }}, {{ user.address.zipcode }}, {{ user.address.city }}</p>
      <p><strong>Actif:</strong> {{ user.isActive | boolean }}</p>
    </div>
  </div>
</template>

<script>
import apiService from '@/service/ApiService';

export default {
  name: 'UserDetail',
  props: {
    id: String,
  },
  data() {
    return {
      user: null,
    };
  },
  async created() {
    this.user = await apiService.getUserById(this.id);
  },
};
</script>