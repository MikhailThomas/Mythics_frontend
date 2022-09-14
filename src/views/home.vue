<template>
  <div id="landing" class=" d-flex justify-content-center">
    <div class="sp-container">
      <div class="sp-content">
        <div class="sp-globe"></div>
        <h2 class="frame-1">WELCOME TO...</h2>
        <h1 class="frame-2"><span>MYTHICS SANCTUARY</span></h1>
		<div id="para">
        <p class="frame-3">We are here to rescue and rehabilitate injured monsters found in the wild. We try our best to find safe homes so they can live their best life in peace.</p>
		</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');
#landing{
  background:linear-gradient(rgba(128, 128, 128, 0.481),rgba(0, 0, 0, 0.701)), url(https://i.postimg.cc/0Qj8r6q4/Home.jpg) no-repeat center/ cover;
  height: 100vh;
  color: white;
  font-family: 'Aboreto', cursive;
}

.sp-container {
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.7));
}
.sp-content {
	position: absolute;
	width: 100%;
	height: 100%;
}
h2, h1 {
	position: absolute;
	top: 50%;
	height: 90px;
	margin-top: -50px;
	width: 100%;
	font-weight: 800;
	text-align: center;
	color: transparent;
	animation: blurFadeInOut 3s ease-in backwards;
}

.frame-1 {
	animation-delay: 0s;
}
.frame-2 {
	animation: none;
	color: transparent;
	text-shadow: 0px 0px 1px #fff;
}
.frame-2 span {
	animation: blurFadeIn 3s ease-in 3s backwards;
  color: lightblue;
	text-shadow: 0px 0px 1px #fff;
}
.frame-3 {
	text-shadow: 0px 0px 1px #fff;
  animation: blurFadeIn 2s ease-in 4s backwards;
  padding-top: 4rem;
	max-width: 600px;
	font-weight: 300;
}
#para{
	display: flex;
	justify-content: center;
	
}
.sp-globe {
	position: absolute;
	width: 282px;
	height: 273px;
	left: 50%;
	top: 50%;
	margin: -137px 0 0 -141px;
	background: transparent url(http://web-sonick.zz.mu/images/sl/globe.png) no-repeat top left;
	filter: alpha(opacity=30);
	opacity: 0.3;
	transform: scale(5);
}
.sp-circle-link {
	position: absolute;
	left: 50%;
	bottom: 100px;
	margin-left: -50px;
	text-align: center;
	line-height: 100px;
	width: 100px;
	height: 100px;
	background: #fff;
	color: #3f1616;
	font-size: 25px;
	border-radius: 50%;
	animation: fadeInRotate 1s linear 16s backwards;
	transform: scale(1) rotate(0deg);
}
.sp-circle-link:hover {
	background: #85373b;
	color: #fff;
}

@keyframes blurFadeInOut {
	0% {
		opacity: 0;
		text-shadow: 0px 0px 40px #fff;
		transform: scale(1.3);
	}
	20%, 75% {
		opacity: 1;
		text-shadow: 0px 0px 1px #fff;
		transform: scale(1);
	}
	100% {
		opacity: 0;
		text-shadow: 0px 0px 50px #fff;
		transform: scale(0);
	}
}
@keyframes blurFadeIn {
	0% {
		opacity: 0;
		text-shadow: 0px 0px 40px #fff;
		transform: scale(1.3);
	}
	50% {
		opacity: 0.5;
		text-shadow: 0px 0px 10px #fff;
		transform: scale(1.1);
	}
	100% {
		opacity: 1;
		text-shadow: 0px 0px 1px #fff;
		transform: scale(1);
	}
}
@keyframes fadeInBack {
	0% {
		opacity: 0;
		transform: scale(0);
	}
	50% {
		opacity: 0.4;
		transform: scale(2);
	}
	100% {
		opacity: 0.6;
		transform: scale(4);
	}
}
@keyframes fadeInRotate {
	0% {
		opacity: 0;
		transform: scale(0) rotate(360deg);
	}
	100% {
		opacity: 1;
		transform: scale(1) rotate(0deg);
	}
}

/* button */
.button {
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #BFC0C0;
  margin: 20px 20px 20px 20px;
  color: #BFC0C0;
  text-decoration: none;
  font-size: .8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

a {
  color: #BFC0C0;
  text-decoration: none;
  letter-spacing: 1px;
}
#dub-arrow {
  width: 100%;
  height: 100%;
  background: #BFC0C0;
  left: -200px;
  position: absolute;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .35s ease-Out;
  bottom: 0;
}
</style>
