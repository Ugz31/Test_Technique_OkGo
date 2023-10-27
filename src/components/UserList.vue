<template>
  <div class="px-5">
    <h1 class="title">OKGO CRM</h1>
    <div class="is-flex">
      <h2 class="title">Liste des utilisateurs</h2>
      <router-link to="/create-user" class="button is-info ml-2"> Créer un utilisateur </router-link>
    </div>
    <div style="max-width: 850px" class="column">
      <div class="filter-section" style="border: 1px solid #e0e0e0; padding: 10px; margin-bottom: 20px; max-width: 100%">
        <h3 class="has-text-weight-bold" style="text-decoration: underline">Filtrer les Users :</h3>
        <div>
          <input v-model="filter.name" placeholder="Nom" />
          <input v-model="filter.firstname" placeholder="Prénom" />
          <input v-model="filter.email" placeholder="Email" />
          <select v-model="filter.isActive">
            <option value="">Actif ?</option>
            <option value="true">Oui</option>
            <option value="false">Non</option>
          </select>
          <select v-model="filter.role">
            <option value="">Role ?</option>
            <option value="admin">Administrateur</option>
            <option value="user">Utilisateur</option>
          </select>
        </div>
      </div>
      <table class="table is-bordered is-striped is-narrow is-hoverable">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Utilisateur</th>
            <th>Email</th>
            <th>Adresse</th>
            <th>Actif</th>
            <!-- Nouvelle Colonne Ajouté -->
            <th>Rôle</th>
          </tr>
        </thead>
        <tbody>
          <!-- Changement de "users" par le résultat de la méthode computed "filteredUser()" -->
          <tr v-for="user in filteredUsers" :key="user.id" @click="goToDetail(user.id)" class="is-clickable">
            <td>{{ user.name }}</td>
            <td>{{ user.firstname }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.address.line }}, {{ user.address.city }}</td>
            <td>{{ user.isActive | boolean }}</td>
            <!-- Définition du role -->
            <td>{{ user.role === 'admin' ? 'Administrateur' : 'Utilisateur' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Div de Filtrage des Utilisateurs/Admin  -->
  </div>
</template>

<script>
import apiService from '@/service/ApiService';
export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      filter: {
        name: '',
        firstname: '',
        email: '',
        role: '',
        isActive: '',
      },
    };
  },
  async created() {
    this.users = await apiService.getUsers();
  },
  computed: {
    // Methode de filtrage, création d'une liste de user en fonction des filtrages / Liste recharger dans le DOM après modification du v-for (plus haut)
    filteredUsers() {
      return this.users.filter((user) => {
        // .filter parcourt le tableau users, et retourn le user si toutes les conditions sont respectées (condition de filtrage)
        return (
          user.name.includes(this.filter.name) &&
          user.firstname.includes(this.filter.firstname) &&
          user.email.includes(this.filter.email) &&
          // Présence d'une valeur? => si oui Filtrage
          (this.filter.role ? user.role === this.filter.role : true) &&
          (this.filter.isActive ? user.isActive === JSON.parse(this.filter.isActive) : true)
        );
      });
    },
  },
  methods: {
    goToDetail(id) {
      this.$router.push('/users/' + id);
    },
  },
};
</script>

<style scoped></style>
