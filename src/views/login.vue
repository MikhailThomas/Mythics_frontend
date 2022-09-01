<template>
  <div class="container">
    <div class="form-wrapper" id="wrapper-login">
        <div class="content-wrapper" id="content-signin">
            <h1>Hello!</h1>
            <form class="form-login">
                <input type="text" name="username" placeholder="Username" class="input-username" />
                <input type="password" name="password" placeholder="Password" class="input-password" />
                <button type="submit" class="btn-login">LOGIN</button>
            </form>
            <p>No account? <a href="#wrapper-signup">Sign up</a></p>
        </div>
    </div>
    <div class="form-wrapper" id="wrapper-signup">
        <div class="content-wrapper" id="content-signin">
            <h1>Join us!</h1>
            <form class="form-login">
                <input type="email" name="email" placeholder="Email address" class="input-email" />
                <input type="text" name="username" placeholder="Username" class="input-username" />
                <input type="password" name="password" placeholder="Password" class="input-password" />
                <button type="submit" class="btn-login">SIGN UP</button>
            </form>
            <p>Got account? <a href="#wrapper-login">Sign in</a></p>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .container{
        background: linear-gradient(black, blue);
    }
.form-wrapper {
    border-radius: 4px;
    background: #2F366D;
    color: #FDF3F8;
    box-shadow: 0px 1px 10px 3px rgba(145, 125, 160, 1);
    position: absolute;
    left: 50%;
    transform: translate( -50%);
    overflow: hidden;
}


.form-wrapper .content-wrapper {
    opacity: 1;
    width: 320px;
    height: 500px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}

.form-login {
    margin: 4rem auto;
}

.form-login input {
    margin: 5px auto;
    display: block;
    border-radius: 4px;
    background: none;
    color: rgba(253, 243, 248, 1);
    border: 2px solid rgba(85, 112, 172, .8);
    padding: 10px;
    width: 200px;
    font-weight: bolder;
    transition: all .3s ease;
}

.form-login button {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    display: block;
    font-weight: bolder;
    color: #FDF3F8;
    background: #ec6838;
    border: none;
    border-radius: 4px;
    transition: all .3s ease;
}

.form-login input:focus {
    outline: none;
    color: rgba(253, 243, 248, 1);
    background: rgba(85, 112, 172, .8);
    border-width: 2px;
    border-style: solid;
    border-color: rgba(85, 112, 172, .8);
}

.form-login input:hover {
    color: rgba(253, 243, 248, 1);
    background: rgba(85, 112, 172, .8);
    border-width: 2px;
    border-style: solid;
    border-color: rgba(85, 112, 172, .8);
}

.form-login button:hover {
    cursor: pointer;
    box-shadow: 0px 1px 10px 1px rgba(236, 104, 56, .6);
}

.form-wrapper .content-wrapper p {
    font-size: .7rem;
    color: rgba(223, 214, 217, .6);
}

.form-wrapper .content-wrapper a {
    color: #FDF3F8;
    text-decoration: none;
}

#wrapper-signup {
    opacity: 0;
    pointer-events: none;
}

#wrapper-signup:target {
    display: block;
    opacity: 1;
    pointer-events: all;
}

#wrapper-signup:target #wrapper-login,
#wrapper-signin:target #wrapper-signup {
    opacity: 0;
    pointer-events: none;
}

#wrapper-signup,
#wrapper-login {
    transition: .2s linear all;
}
</style>