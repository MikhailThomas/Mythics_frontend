<template>
    <div class="modal fade" :id="`editMonster`+ monster.id" tabindex="-1" :aria-labelledby="monster.id+ `EditLabel`" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" :id="`editMonsterLabel`+monster.id">Edit monster</h5>
                  <button type="button" :id="`editMonsterClose`+monster.id" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form method="PUT" @submit="editMonster">
                      <label class="form-label">ID</label>
                      <input type="number" class="form-control" :value="monster.monsterID" readonly>
                      <label class="form-label">Treatment Name</label>
                      <input type="text" class="form-control" v-model="monster.species">
                      <label class="form-label">Treatment Image</label>
                      <input type="text" class="form-control" v-model="monster.img">
                      <label class="form-label">Description</label>
                      <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="monster.description"></textarea>
                      <label class="form-label">size</label>
                      <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="monster.size"></textarea>
                      <label class="form-label">difficulty</label>
                      <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="monster.difficulty"></textarea>
                      <label class="form-label">habitat</label>
                      <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="monster.habitat"></textarea>
                      <label class="form-label">delivery</label>
                      <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="monster.delivery"></textarea>
                      <label class="form-label">Description</label>
                      <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="monster.description"></textarea>
                      <label class="form-label">Price</label>
                      <input type="number" class="form-control" v-model="monster.price">
                      <button type="submit" class="btn btn-primary">Save Changes</button>
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
              </div>
          </div>
      </div>
    </div>
  </template>
  <script>
  export default {
      props:['monster'],
      methods:{
          editMonster(e){
              e.preventDefault();
              let newmonster = {
                  monsterID: this.monster.monsterID,
                  species: this.monster.species,
                  img: this.monster.img,
                  description: this.monster.description,
                  location: this.monster.location ,
                  size: this.monster.size,
                  difficulty: this.monster.difficulty,
                  habitat: this.monster.habitat,
                  delivery: this.monster.delivery,
                  price: this.monster.price
              }
              this.$store.dispatch('editMonster',newmonster);
              document.getElementById(`editMonsterClose`+this.monster.monsterID).click();
          }
      }
  }
  </script>
  <style scoped>
  
  
  </style>