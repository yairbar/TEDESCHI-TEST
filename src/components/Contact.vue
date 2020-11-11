<template>
  <div class="contact-container">

    <div class="left">
        <img src="../imgs/alex jonathan.jpg" alt="" class="contanct__img">
        <div class="contact__job-title">{{jodTitle}}</div>
    </div>

    <div class="right">
        <div class="contact__name">{{name}}</div>
         <div class="contact__location">{{location}}</div>
        <div class="contact__company-name">{{companyName}}</div>
        <div class="contact__address mb-5">{{address}}</div>
        <div class="contact__phone">
            <span>
              <span class="pb-3">
                P:
              </span>
            </span>
             {{phone}}
        </div>
    </div>

    <div class="contact__control">
        <div class="contact__edit" @click="editContact()">E</div>
        <div class="contact__delete" @click="deleteContact(contactId)">D</div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props : [ 'name', 'profileImg', 'jodTitle', 'companyName', 'address', 'phone', 'location', 'contactId'],

    methods : {
        ...mapActions(['deleteContact']),

        editContact(){

        }

    },
}

</script>

<style scoped>

.contact-container {
    background-color: #ffffff;
    border: 1px solid #e7eaec;
    padding: 20px;
    display: flex;
    margin: 20px;
    position: relative;
}

.left, .right{
    padding: 0 15px;
}

.contanct__img {
    border-radius: 50%;
}

.contact__job-title {
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
}

.contact__name {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
}

.contact__location {
    margin-bottom: 10px;
}

.contact__phone {
    display: flex;
}

.contact__phone >>> span {
    border-bottom: 1px dotted #777;
}

.pb-3 {
        padding-bottom: 3px;
}

.contact__company-name {
    font-weight: bold;
    margin-bottom: 5px;
}

.mb-5 {
    margin-bottom: 5px;
}

.contact__control {
    position: absolute;
    right: 15px;
    bottom: 15px;
    display: flex;
    font-weight: bold;
}

.contact__edit {
    padding: 0 5px;
    cursor: pointer;
}

.contact__delete {
    cursor: pointer;
}


</style>