<template>
  <div class="page">
    <div class="layout ">
      <el-card class="card">
        <h5 class="title">
          账号登录
        </h5>
        <el-form ref="postForm" :model="postForm" :rules="postFormRules">
          <el-form-item prop="phone">
            <el-input v-model="postForm.phone" :maxlength="11" class="login-input" auto-complete="on" placeholder="手机号">
              <i slot="prefix" class="el-input__icon icon-user" />
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="postForm.password"
              :maxlength="20"
              class="login-input"
              type="password"
              auto-complete="on"
              placeholder="密码"
              show-message
              @keyup.enter.native="handleLogin"
            >
              <i slot="prefix" class="el-input__icon icon-password" />
            </el-input>
            <nuxt-link class="forget" to="/forget">
              忘记密码
            </nuxt-link>
          </el-form-item>
          <div class="button-group">
            <el-button :loading="loading" type="primary" class="w-100" round @click="handleLogin">
              登录
            </el-button>
            <nuxt-link to="/register" class="register">
              注册
            </nuxt-link>
          </div>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import { isPassword, isPhone } from '@/utils/validate'

export default {
  name: 'Login',
  layout: 'simple',
  components: {},
  scrollToTop: true,
  // nuxt 异步数据设置方式
  asyncData (context) {
  },
  data () {
    const validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入手机号'))
      } else if (!isPhone(value)) {
        callback(new Error('手机号格式错误'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'))
      } else if (!isPassword(value)) {
        callback(new Error('密码为长度6-20位的数字、字母或"_"'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      postForm: {
        phone: '13200000002',
        password: '123456'
      },
      postFormRules: {
        phone: [{ required: true, trigger: 'blur', validator: validatePhone }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      }
    }
  },
  computed: {},
  created () {
  },
  beforeDestroy () {
  },
  mounted () {

  },
  methods: {
    handleLogin () {
      this.$refs.postForm.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.postForm).then(() => {
            this.loading = false
            // header中的accesstoken无法直接使用 所以reload
            // window.location.reload()
            this.$router.push({ path: '/' })
          }).catch((err) => {
            console.error(err)
            this.loading = false
          })
        } else {
          return false
        }
      })
    }
  },
  head () {
    return {
      title: '登录'
    }
  }
}

</script>

<style lang="scss" type="text/scss">
  .card{
    .el-input{
      .el-input__inner{
        border-radius: 20px;
        padding-left: 50px;

      }
    }
  }
</style>
<style lang="scss" type="text/scss" scoped>
  @import "../../assets/sass/variables";
  @import "../../assets/sass/variables";
  @media (min-width: 750px) {
    .page {
      height: 600px;
      /*background-image: url(../../assets/images/login/bg.png);*/
      background-size: cover;
      background-position: center center;
    }
    .title {
      text-align: center;
      font-size: 22px;
      color: #333;
      /*font-weight: 700;*/
      padding: 20px 0 30px;
    }
    .card {
      margin-top: 110px;
      width: 360px;

      .el-input {
        width: 100%;

        .icon-user {
          float: left;
          margin-top: 10px;
          margin-left: 10px;
          width: 20px;
          height: 20px;
          /*background: url(../../assets/images/login/icon_user.png);*/
          background-size: cover;
        }

        .icon-password {
          float: left;
          margin-top: 10px;
          margin-left: 10px;
          width: 20px;
          height: 20px;
          /*background: url(../../assets/images/login/icon_password.png);*/
          background-size: cover;
        }
      }

      .forget {
        position: absolute;
        right: 0;
      }

      .button-group {
        margin-top: 50px;
        text-align: center;

        .register {
          display: inline-block;
          line-height: 40px;
        }
      }

      a:hover {
        color: $theme;
      }
    }
  }

  @media (max-width: 750px) {
    .page {
      height: 600px;
      /*background-image: url(../../assets/images/login/bg.png);*/
      background-size: cover;
      background-position: center center;
    }
    .title {
      text-align: center;
      font-size: 22px;
      color: #333;
      /*font-weight: 700;*/
      padding: 20px 0 30px;
    }
    .card {
      margin-top: 110px;
      .el-input {
        width: 100%;

        .icon-user {
          float: left;
          margin-top: 10px;
          margin-left: 10px;
          width: 20px;
          height: 20px;
          /*background: url(../../assets/images/login/icon_user.png);*/
          background-size: cover;
        }

        .icon-password {
          float: left;
          margin-top: 10px;
          margin-left: 10px;
          width: 20px;
          height: 20px;
          /*background: url(../../assets/images/login/icon_password.png);*/
          background-size: cover;
        }
      }

      .forget {
        position: absolute;
        right: 0;
      }

      .button-group {
        margin-top: 50px;
        text-align: center;

        .register {
          display: inline-block;
          line-height: 40px;
        }
      }

      a:hover {
        color: $theme;
      }
    }
  }

</style>
