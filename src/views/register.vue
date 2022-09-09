<template>
    <div class="box">
    <div class="title-text">
        <div class="form-container">
            <div class="slide-controls">
                <input type="radio" name="slider" id="login" checked />
                <label for="signup" class="slide login">Signup</label>
                <div class="slide-tab"></div>
            </div>
            <form action="#" class="signup">
                <div class="field">
                    <input type="text" placeholder="name" v-model="name" required />
          </div>
          <div class="field">
            <input type="text" placeholder="surname" v-model="surname" required />
          </div>
          <div class="field">
            <input type="text" placeholder="emaill" v-model="email" required />
          </div>
          <div class="field">
            <input type="text" placeholder="password" v-model="password" required />
          </div>
          <div class="field">
            <input type="text" placeholder="confirm password" v-model="password" required />
          </div>
          <div class="field">
            <button type="button" class="btn btn-primary" value="signup" @click="register()">Sign UP</button>
          </div>
        </form>
    </div>
</div>
</div>
</template>

<script>
export default {
    data() {
    return {
      name: "",
      surname:"",
      email: "",
      password: "",
    };
  },
  methods:{
    register(){
        const user = {
            name: this.name,
            surname: this.surname,
            email: this.email,
            password: this.password
        }
        this.$store.dispatch("register", user);
    }
  }
    

}
</script>

<style>
.box {
  max-width: 400px;
  border-radius: 10px;
  border-radius: 0px 15px 20px rgba(0, 0, 0, 0.1);
  /* overflow: hidden; */
  margin: auto;
  padding-top: 3em;
}
.title-text {
  display: flex;
}
.title {
  width: 100%;
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.form-container {
  width: 100%;
  /* overflow: hidden; */
}
.slide-controls {
  position: relative;
  display: flex;
  height: 50px;
  width: 100%;
  /* overflow: hidden; */
  border-radius: 5px;
  margin: 30px 0 10px 0;
  justify-content: space-between;
  border: 2px solid lightblue;
}
.slide {
  height: 100%;
  width: 100%;
  z-index: 1;
  color: aliceblue;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  transition: all 0.6s ease;
}
.slide-tab {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  z-index: 0;
  border-radius: 4px;
  /* slide transition */
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background: linear-gradient(to left, rgb(230, 117, 117), rgb(75, 75, 145));
}
input[type="radio"] {
  display: none;
}
.form-inner {
  display: flex;
  width: 200%;
}
form {
  width: 100%;
}
.field {
  height: 50px;
  width: 100%;
  margin-top: 20px;
}
.field input {
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 15px;
  font-size: 17px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  border-bottom-width: 3px;
  transition: all 0.8s ease;
}
.input:focus {
  border-color: aqua;
}
input[type="submit"] {
  background: linear-gradient(to left, rgb(230, 117, 117), rgb(75, 75, 145));
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}
</style>