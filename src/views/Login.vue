<template>
<div  class="bg">
  
  <el-form :model="ruleForm2" status-icon  label-position="right" ref="ruleForm2" label-width="100px" class="demo-ruleForm form-format">


    <h3  class="title">认证登录</h3>
    <el-form-item label="用户名" prop="account">
    <el-input v-model.number="ruleForm2.account"></el-input>
  </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
    </el-form-item>
 

    <el-checkbox  v-model="checked" style="margin:0 0 20px 100px">记住密码</el-checkbox>

  <el-form-item>
    <el-button type="primary" @click="handleSubmit2" :loading="logining" style="width:140px;margin-left: 60px">登录</el-button>
  </el-form-item>
</el-form>
<Loading  style="position:relative;top:100px"></Loading>
</div>
  
  


</template>


<script>
  import axios from 'axios'
  import { requestLogin } from '../api/api';
  export default {
    data() {
    
      return {
        ruleForm2: {
          pass: 'admin',
          account: 'admin'
        },
        checked:true,
        logining: false,

      };
    },
    methods: {

      handleSubmit2(ev) {
        var _this = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
  
            this.logining = true;
            let base='';
            var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.pass };

            


             requestLogin(loginParams).then(data=>{


              this.logining = false;
              //NProgress.done();
              if (data.code !== 200) {
                this.$message({
                  message: data.msg,
                  type: 'error'
                });
              } else {
                this.$message({
                  message:'登录成功',
                  type:'success'
                })
                sessionStorage.setItem('user', JSON.stringify(data.user));  //会把登录信息加载到sessionStorage中
                this.$router.push({ path: '/' });
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }


    }
  }
</script>

<style lang="scss" scoped>
  .form-format{
    width:400px;
    // margin:180px auto;
    border-radius: 6px;
    position:fixed;
    left:1200px;
    bottom:200px;
    padding: 20px 40px 20px 0;
    box-shadow: 0 0 25px  #cac6c6;
  }
  .title{
    margin:20px auto 20px auto;
    text-align: center;
  }
  .bg{
    background-image: url('../assets/login_bg.jpg');
    width:100%;
    height:9  00px;
    border:1px solid black;
  }
</style> 





