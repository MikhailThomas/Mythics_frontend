<template>
<div class="box">
    <div class="title-text">
        <div id="Login" class="title login">
            login form
        </div>
        <div class="title signup">
            signup form
        </div>
    </div>
    <div class="form-container">
            <div class="slide-controls">
                <input type="radio" name="slider" id="login" checked>
                <input type="radio" name="slider" id="signup">
                <label for="login" class="slide login">Login</label>
                <label for="signup" class="slide signup">Signup</label>
                <div class="slide-tab">

                </div>
            </div>
            <div class="form-inner">
                <form action="#" class="login-form">
                    <div class="field">
                        <input type="text" placeholder="Emailadress" required>
                    </div>
                    <div class="field">
                        <input type="text" placeholder="password" required>
                    </div>
                    <div class="field">
                        <input type="submit" value="login">
                    </div>
                    <div class="signup-link">don't have an account?<a href="signup">signup now</a></div>
                </form>
                <!-- sign up -->
                <form action="#" class="signup">
                    <div class="field">
                        <input type="text" placeholder="Emailadress" required>
                    </div>
                    <div class="field">
                        <input type="text" placeholder="password" required>
                    </div>
                    <div class="field">
                        <input type="text" placeholder="confirm password" required>
                    </div>
                    <div class="field">
                        <input type="submit" value="signup">
                    </div>
                    <div class="signup-link">don't have an account?<a href="signup">signup now</a></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
const loginForm = document.getElementsByClassName(".login");
const signupForm = document.getElementsByClassName(".signup");
const loginBtn = document.getElementsByClassName(".login");
const signupBtn = document.getElementsByClassName(".signup");
const signupLink = document.getElementsByClassName(".signup-link a");
const loginText = document.getElementsByClassName(".title-text .login");
const signupText = document.getElementsByClassName(".title-text .signup");
signupBtn.onclick = (() =>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() =>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() =>{
    signupBtn.click();
    return false;
});
</script>

<style scoped>
.box{
    max-width: 400px;
    border-radius: 10px;
    border-radius: 0px 15px 20px rgba(0,0,0,0.1);
    overflow: hidden;
}
.title-text{
    display: flex;
    width: 200%;
}
.title{
    width: 50%;
    font-size: 25px;
    font-weight: 400;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.form-container{
width: 100%;
overflow: hidden;
}
.slide-controls{
    position: relative;
    display: flex;
    height: 50px;
    width: 100%;
    overflow: hidden;
    border-radius: 5px;
    margin: 30px 0 10px 0;
    justify-content: space-between;
    border: 2px solid lightblue;
}
.slide{
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
.signup{
    color: black;
}
.slide-tab{
    position: absolute;
    height: 100%;
    width: 50%;
    left: 0;
    z-index: 0;
    border-radius: 4px;
    /* slide transition */
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    background: linear-gradient(to left,rgb(230, 117, 117), rgb(75, 75, 145));
}
input[type="radio"]{
    display: none;
}
#signup:checked ~ .slide-tab{
    left: 50%;
}
#signup:checked ~ .signup{
    color: white;
}
#signup:checked ~ .login{
    color: black;
}
.form-inner{
    display: flex;
    width: 200%;
}
form{
    width: 50%;
}
.field{
    height: 50px;
    width: 100%;
    margin-top: 20px;
}
.field input{
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
.input:focus{
    border-color: aqua;
}
.signup-link{
    margin-top: 30px;
}
.signup-link a{
    text-decoration: none;
    color: lightblue;
}
.signup-link a:hover{
    text-decoration: underline;
}
input[type="submit"]{
    background: linear-gradient(to left,rgb(230, 117, 117), rgb(75, 75, 145));
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 600;
    border: none;
    cursor: pointer;
}
</style>