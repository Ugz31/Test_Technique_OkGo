<template>
  <div>
    <h2>Ajouter un Nouvelle Utilisateur</h2>
    <!-- preventDefault pour ne pas propager l'evenement et recharger la page -->
    <form @submit.prevent="createUser">
      <div>
        <label for="email">Email : </label>
        <input v-model="user.email" type="email" required />
      </div>
      <div>
        <label>Nom :</label>
        <input v-model="user.name" type="text" required />
      </div>
      <div>
        <label>Prénom :</label>
        <input v-model="user.firstname" type="text" required />
      </div>
      <div>
        <h4>Adresse :</h4>
        <label>Adresse</label>
        <input v-model="user.adress.line" type="text" required placeholder="123 rue..." />
        <label>Code postal</label>
        <input v-model="user.adress.zipcode" type="text" placeholder="12345" />
        <label>Ville</label>
        <input v-model="user.adress.city" type="text" required placeholder="Toulouse" />
        <label>Pays</label>
        <input v-model="user.adress.country" type="text" placeholder="France" />
      </div>
      <div>
        <select v-model="user.role" required>
          <option value="admin">Administrateur</option>
          <option value="user">Utilisateur</option>
        </select>
      </div>
      <button type="submit">Envoyé</button>
    </form>
  </div>
</template>

<script>
import apiService from '../service/ApiService';
export default {
  data() {
    return {
      user: {
        name: '',
        firstname: '',
        email: '',
        adress: {
          line: '',
          zipcode: '',
          city: '',
          country: '',
        },
        role: '',
        isActive: true,
      },
    };
  },
  methods: {
    async createUser() {
      try {
        await apiService.postUser(this.user);
        this.$router.push('/users/');
      } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur:", error);
      }
    },
  },
};
</script>
