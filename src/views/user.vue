<template>
  <div id="page" class="text-start">
        <div class="content row">
          <div class="col-md-8">
            <img id="user" src="https://i.postimg.cc/SNKbFjKs/Mountain-landscape.jpg" alt="">
          </div>
          <div class="col-md-4">
            <h3>User info</h3>
            <p>this is where the user gives a personal letter so the process for getting to know them is easier</p>
          </div>
          <div class="col-md-8">
            <p>this is a photo area of creatures the user likes</p>
          </div>
          <div id="edit" class="col-md-4">
            <h3>edit using this quick links</h3>
            this is where the user can edit their profile
          </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#page{
    min-height: 100vh;
    background: linear-gradient(rgba(179, 179, 179, 0.533),black),url(https://i.postimg.cc/3RtnN3zr/desert-landscape.jpg) center/cover;
    display: flex;
    justify-content: center;
  }
 .content{
  max-width: 1000px;
  min-height: 600px;
  margin: auto;
  padding: 3rem;
  color: white;
  background: linear-gradient(rgba(255, 255, 255, 0.319), rgba(0, 0, 0, 0.226));
  border-radius: 30px;
  border-top: 1px solid whitesmoke;
  border-left: 1px solid white;
  border-bottom: 4px solid black;
  box-shadow: 2px 2px 2px 2px black;
 }
 #user{
  max-width: 500px;
 }
 #edit{
  border-top: 1px solid;
 }
</style>