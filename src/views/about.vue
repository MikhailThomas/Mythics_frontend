<template>
    <section id="section1" class="">
        <div id="info">
            <h1>About Us</h1>
            <p>Mythics Sanctuary has One enormous Sanctuary across three provinces in Southern Africa. The Sanctuary started in the year after the red eclipse,we grew from five Monsters to 12 and now we look for suitable homes for the varius monstes. These monsters have been domesticated through positive reinforcement animal management principles, and as a result, provide us with the unique opportunity to interact with them.

Our Sanctuary visitors are taken on a journey into the world of the monsters. The  Sanctuary is unique in that it offers visitors the incredible opportunity to walk hand-in-hand with the monsters. Enter the world of the monsters. Understand the height at which the monsters stands and experience their environment from a monsters perspective.

The monsters Sanctuary offers experiences/tours/programs monthly. The sanctuary has different time slots and these vary slightly.. The close encounter with monsters you experience at The Sanctuary truly is one of a kind. When meeting them you will discover that each one has a different character, personality and temperament.</p>
            <!-- <a href="#section2"><span></span><h3>scroll</h3></a> -->
        </div>
    </section>
</template>
<style scoped>
#section1{
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.549),rgba(60, 60, 60, 0.66)),url(https://i.postimg.cc/c4WpDYR4/Landing.jpg) center / cover no-repeat;
    display: flex;
    justify-content: center;
}
h1{
    color: aliceblue;
    text-decoration: underline;
}
#info{
    margin: auto;
    max-width: 1200px;
    
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
