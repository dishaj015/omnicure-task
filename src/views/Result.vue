<template>
    <div>
    <h2 class="mb-3 text-center">
    Quiz finished
  </h2>
    <p>
      <b>Total score:</b> {{ this.countValue }} / {{ questionLength }}
    
      <br><b>Attempted question:</b> {{this.$store.state.attemptedQues}}
    </p>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>

export default {
  name: 'result-page',
  data(){
    return{
items:this.$store.state.data,
questionLength:this.$route.params.questionLength,
countValue:0
    }
  },
  created(){
 this.$store.state.data.map((data)=>{
          if(data.answer == 'Correct'){
              this.countValue++
          }
      }) 
  },
  methods:{

  }
}
</script>

