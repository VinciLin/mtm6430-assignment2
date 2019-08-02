<template>
  <div class="signup" style=" width:40%; margin:0 auto; border: 1px solid #e5e9f2; padding: 30px; margin-top:8%; box-shadow: 13px 13px 26px -12px rgba(0,0,0,0.45);">
    <h1>Sign Up</h1>
    <div>
    <el-form :label-position="labelPosition" label-width="100px">
    <el-form-item label="NAME">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="EMAIL">
      <el-input v-model="ruleForm.email"></el-input>
    </el-form-item>
    <el-form-item label="PASSWORD">
      <el-input v-model="ruleForm.password"></el-input>
    </el-form-item>
    <el-form-item>
      <!-- direct to the dashboard -->
      <router-link :to="{name: 'dashboard'}"><el-button type="primary" @click="loginSubmit">SUBMIT</el-button></router-link>
    </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

// @ is an alias to /src
export default {
    data() {
      return {
        labelPosition: 'top',
        ruleForm:{
          name: '',
          email: '',
          password: ''
        }
      };
    },


    methods: {
      ...mapActions([
        'updateUser'
      ]),

      loginSubmit() {
        localStorage.name = this.ruleForm.name;
        localStorage.email = this.ruleForm.email;
        localStorage.password = this.ruleForm.password;


        this.updateUser({
          name: this.ruleForm.name,
          email: this.ruleForm.email,
          password: this.ruleForm.password
        })
      }
    }

  };
</script>

<style>
  /* h1{
    text-align: center;
  } */

</style>
