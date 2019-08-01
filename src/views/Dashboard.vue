<template>
  <div class="dashboard">
    <br>
    <h1>Dashboard</h1>
    <div class="dashboard-container" >
      <h2>Welcome {{ userData.name }} !</h2>
      <p>Your sign up email is: {{ userData.email }}</p>   
      <br>
      <br>
      <br>
      <el-button type="primary" @click="clearData">Clear Data</el-button> 
  </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      userData: {
      name: '',
      email: ''
    }
    }  
  },
  
  computed: mapGetters(["getUserName", "getUserEmail"]),

  created() {
    this.userData.name = this.getUserName,
    this.userData.email = this.getUserEmail
  
  },

  mounted() {
  if (localStorage.getItem("name")) {
    this.name = localStorage.ruleForm.name;
  }
  if (localStorage.getItem("email")){
    this.email = localStorage.ruleForm.email;
  }
  if (localStorage.getItem("password")){
    this.password = localStorage.ruleForm.password;
  }
},

  methods: {
    // Delete data of localStorage
    clearData() {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      
    }
  }


};
</script>
<style scope>

  .dashboard {
    width:40%; 
    margin:0 auto; 
    margin-top:5%; 
  }
  .dashboard-container {
     border: 1px solid #e5e9f2; 
     padding: 30px; 
     box-shadow: 13px 13px 26px -12px rgba(0,0,0,0.45);
     min-height: 300px;
     text-align: center;
  }
</style>
