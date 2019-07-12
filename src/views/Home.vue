<template>
<!-- home page -->
  <div class="home"> 
  <div v-if="isIntro">
    <h1>Welcome to the {{title}} :</h1>
    <p>
      Omnicuris Task
    </p>
    <b-button variant="success" @click="startQuiz">START</b-button>
  </div>
  <!-- question -->
  <Questions :userResponse="userResponse" :QuizList='QuizList' :currentQuestion="currentQuestion" :questions="questions"  :isQuestion='isQuestion'></Questions>
  <!-- question ends-->
</div>
  <!-- home page ends -->
</template>

<script>
import {QuizList} from '../json/question.js';
import Questions from '../components/Questions';
export default {
  name: 'home-page',
  //components
  components:{
Questions
  },
  //data
  data(){
    return{
      currentQuestion:0,
      title:QuizList.title,
      isIntro:true,
      resultData:false,
      QuizList:QuizList,
      questions:QuizList.questions,
      isQuestion:false,
      count:0,
      attemptedQues:0,
      userResponse:Array(QuizList.questions.length).fill(false)
    }
  },
//methods
  methods:{
    startQuiz(){
      this.isIntro = false;
      this.isQuestion = true;
    }
  }
}
</script>

