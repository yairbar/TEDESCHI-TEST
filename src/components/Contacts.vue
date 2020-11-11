<template>
  <div class="contacts">
         
      <div class="contacts-list">
         <contact v-for="(contact, idx) in contactsList" :key="idx" 
         
        :name="contact.name"
        :profileImg="contact.profileImg"
        :jodTitle="contact.jodTitle"
        :companyName ="contact.companyName"
        :address ="contact.address"
        :phone ="contact.phone"
        :location="contact.location"
        :contactId="contact.id"

         /> 
      </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import contact from './Contact';

export default {

    computed : {
        ...mapGetters(['contactsList']),   
    },

    components : {
        contact
    },

    data(){
        return {
            imgUrl : ''
        }
    },

    methods : {}

}
</script>

<style scoped>

.contacts {
position: relative;

}

.contacts-list{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

@media only screen and (max-width: 600px) {
    .contacts-list{
        display: grid;
        grid-template-columns: 1fr;
    }
}

</style>