<template>
    <div>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="12"><div class="grid-content ">State Manager</div></el-col>
        <el-col :span="3">
            <div class="grid-content ">
            <router-link to="/" > Sign Up</router-link>
            </div>
        </el-col>
        <el-col :span="3">
            <div class="grid-content ">
            <router-link to="/dashboard"> Dashboard</router-link>
            </div>
        </el-col>
  </el-row>
    </div>
</template>

<script>
export default {
    name:'Header'
};
</script>

<style>
.el-col:first-child{
   color: darkblue;
   font-size: 2em;
}
.row-bg {
    padding: 15px 0;
    background-color: #e5e9f2;
    /* align text vertically */
    align-items: center;
  }

</style>
