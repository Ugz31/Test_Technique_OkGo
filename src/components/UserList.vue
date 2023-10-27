/* eslint-disable no-console */
<template>
  <div class="px-5">
    <h1 class="title">OKGO CRM</h1>
    <div class="is-flex">
      <h2 class="title">Liste des utilisateurs</h2>
      <router-link to="" class="button is-info ml-2"> Créer un utilisateur </router-link>
    </div>
    <table class="table is-bordered is-striped is-narrow is-hoverable">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Utilisateur</th>
          <th>Email</th>
          <th>Adresse</th>
          <th>Actif</th>
          <th>Rôle</th>
          #Nouvelle Colonne Ajouté
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" @click="goToDetail(user.id)" class="is-clickable">
          <td>{{ user.name }}</td>
          <td>{{ user.firstname }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address.line }}, {{ user.address.city }}</td>
          <td>{{ user.isActive | boolean }}</td>
          <td>{{ user.role === 'admin' ? 'Administrateur' : 'Utilisateur' }}</td>
          #Définition du role
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import apiService from '@/service/ApiService';
export default {
  name: 'UserList',
  data() {
    return {
      users: [],
    };
  },
  async created() {
    this.users = await apiService.getUsers();
  },
  methods: {
    goToDetail(id) {
      this.$router.push('/users/' + id);
    },
  },
};
</script>

<style scoped></style>
