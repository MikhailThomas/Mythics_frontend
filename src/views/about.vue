<template>
    <section id="section1" class="">
        <div id="info">
            <h1>Our Mission</h1>
            <p>sfggerddddddddddddddddddddddddddddddddd</p>
            <a href="#section2"><span></span><h3>scroll</h3></a>
        </div>
    </section>
</template>
<style scoped>
#section1{
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.549),rgba(60, 60, 60, 0.66)),url(https://i.postimg.cc/c4WpDYR4/Landing.jpg) center / cover no-repeat;
}
h1{
    color: aliceblue;
}
#info p{
    color: white;
    padding-top: 10%;
    font-size: large;
}
#section1 a{
    position: absolute;
    bottom: 0;
    text-decoration: none;
    color: aliceblue;
}
#section1 a:hover{
    opacity: 0.5;
}
#section1 a span{
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    margin-top: -50px;
    color: aliceblue;
    border-left: 3px solid white;
    border-bottom: 3px solid white;
    transform: rotate(-45deg);
    animation: arrow 1.5s infinite;
    box-sizing: border-box;
}
@keyframes arrow {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}

</style>
