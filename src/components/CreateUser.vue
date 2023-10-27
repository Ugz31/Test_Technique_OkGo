<template>
  <div class="container">
    <section class="section">
      <div class="columns is-centered">
        <div class="column is-half">
          <h2 class="title" style="text-decoration: underline">Ajouter un Nouvelle Utilisateur</h2>
          <div style="height: 1px; background-color: gray; margin-bottom: 10px"></div>
          <!-- preventDefault pour ne pas propager l'evenement et recharger la page -->
          <form @submit.prevent="createUser">
            <div class="field">
              <label class="label" for="email">Email : </label>
              <div class="control">
                <input class="input" v-model="user.email" type="email" required />
              </div>
            </div>

            <div class="field">
              <label class="label">Nom :</label>
              <div class="control">
                <input class="input" v-model="user.name" type="text" required />
              </div>
            </div>

            <div class="field">
              <label class="label">Prénom :</label>
              <div class="control">
                <input class="input" v-model="user.firstname" type="text" required />
              </div>
            </div>
            <div style="height: 1px; background-color: gray; margin-bottom: 10px"></div>
            <div class="field">
              <label class="label">Adresse</label>
              <div class="control">
                <input style="margin-bottom: 15px" class="input" v-model="user.address.line" type="text" required placeholder="123 rue..." />
              </div>
              <label class="label">Code postal</label>
              <div class="control">
                <input style="margin-bottom: 15px" class="input" v-model="user.address.zipcode" type="text" placeholder="12345" />
              </div>
              <label class="label">Ville</label>
              <div class="control">
                <input style="margin-bottom: 15px" class="input" v-model="user.address.city" type="text" required placeholder="Toulouse" />
              </div>
              <label class="label">Pays</label>
              <div class="control">
                <input style="margin-bottom: 15px" class="input" v-model="user.address.country" type="text" placeholder="France" />
              </div>
            </div>
            <div>
              <label class="label">Mot de passe</label>
              <div class="control">
                <input style="margin-bottom: 15px" class="input" v-model="user.password" type="text" />
              </div>
            </div>
            <div style="height: 1px; background-color: gray; margin-bottom: 10px"></div>
            <div class="control">
              <button class="button is-link" type="submit">Envoyé</button>
            </div>
          </form>
          <div v-if="errorMessage" class="notification is-danger">{{ errorMessage }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import apiService from '../service/ApiService';
export default {
  data() {
    return {
      errorMessage: null,
      user: {
        name: '',
        firstname: '',
        email: '',
        address: {
          line: '',
          zipcode: '',
          city: '',
          country: '',
        },
        password: '',
        role: 'user',
        isActive: 'Oui',
      },
    };
  },
  methods: {
    async createUser() {
      this.errorMessage = null;
      try {
        await apiService.postUser(this.user);
        this.$router.push('/users/');
      } catch (error) {
        // Je ne suis pas arrivé a gerer les erreurs, dans certain cas j'obtient un objet avec (error) dans d'autre des undifined si je vais chercher la data/message... etc
        this.errorMessage =
          "Une erreur est survenue lors de la création de l'utilisateur. Veuillez svp remplir tous les champs, en respectant un mot de passe de 8 caractère avec 1 majuscule/1 minuscule/un symbole/1 chiffre...";
      }
    },
  },
};
</script>
