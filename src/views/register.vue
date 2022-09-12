<template>
    <div class="box">
    <div class="title-text">
        <div class="form-container">
            <div class="slide-controls">
                <input type="radio" name="slider" id="login" checked />
                <label for="signup" class="slide login">Register</label>
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
            <button id="button" type="button" class="btn btn-primary" value="signup" @click="register()">Register</button>
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
  min-height: 100vh;
  background: linear-gradient(black,black);display: flex;
  justify-content: center;
  margin: 0;
}
.form-container{
  margin: auto;
  padding-top: 3em;
  min-width: 300px;
  border-radius: 10px;
  border-radius: 0px 15px 20px rgba(0, 0, 0, 0.1);
}
.title {
  width: 50%;
  font-size: 25px;
  font-weight: 400;
  text-align: center;
}
.slide-controls {
  position: relative;
  display: flex;
  height: 50px;
  width: 100%;
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
}
.slide-tab {
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(to left, rgb(230, 117, 117), rgb(75, 75, 145));
}
input[type="radio"] {
  display: none;
}
.form-inner {
  display: flex;
  width: 100%;
}
form {
  width: 100%;
}
.field {
  height: 50px;
  margin-top: 20px;
}
.field input {
  height: 100%;
  width: 100%;
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
#button{
  min-width: 100px;
  border-radius: 10px;
  background: linear-gradient(to left, rgb(230, 117, 117), rgb(75, 75, 145));
  color: rgb(255, 255, 255);
  height: 3rem;
  border: 2px solid lightblue;
}
</style>