<template> 
<!-- questions -->
<div>
<div v-for="(question, index) in questions" :key="index">
    <div v-show="index == currentQuestion && isQuestion" >
      <h2>{{ question.text }}</h2>
      <ol>
        <li v-for="(response,i) in question.answers" :key="i">
          <label>
            <input type="radio" 
                   :value="response.correct" 
                   :name="index" 
                   @click="checkResult(response.correct,question,index)"
                   v-model="userResponse[index]"> {{response.text}}
          </label>       
        </li>
      </ol>
      <!-- btn -->
      <b-button class="mr-4" variant="primary" v-if="currentQuestion > 0" v-on:click="prev">
        Previous
      </b-button>
      <b-button v-if="currentQuestion != lastIndex" variant="success"   @click="next">
        Next
      </b-button>      
     <router-link :to="{
                      name: 'result-page',
                      params: {  questionLength:questions.length}
                    }"> <b-button  v-if="currentQuestion == lastIndex" variant="success" class="submit-btn">
         Submit
      </b-button>
      </router-link>
       <!-- btn -->
      </div>
    </div>
  </div>
  <!-- questions ends-->
</template>
<script>
import {QuizList} from '../json/question.js';
export default{
    name:'question-page',
    //props
    props:['questions','isQuestion','QuizList','userResponse'],
  //data
  data() {
     return {
             isResult:false,
             currentQuestion:0,
             resultData:false,
             visit:Array(QuizList.questions.length).fill(false),
             isVisit:false,
             totalData:[],
             lastIndex:QuizList.questions.length -1
     }
  },
	methods:{
    //next
        // eslint-disable-next-line
		  next(){
        this.currentQuestion++;
        this.isResult= false; 
    },
    // prev
    prev(){
   this.currentQuestion--;
   this.isResult= false; 
    },
    // result
    result(res,i){
   this.userResponse[i].push(res);
    },
    // check result
    checkResult(res,ques,i){ 
      
      if(res == true){
        // eslint-disable-next-line
      console.log("response is",res);
      }else{
        // eslint-disable-next-line
        console.log("response is",false);
      }
  this.isResult= true; 
// check res
//when res is true
if(res== true){
this.resultData = res;

if(this.visit[i] == false){
  this.pushData(res,ques,i);
this.$store.dispatch('getAttemptedQues');
   this.isVisit = true;
   this.visit[i] = this.isVisit;
}else{
  this.totalData[i].answer = res?'Correct':'False';
}
}
//when res is false
else if(res == undefined){
this.resultData = false;
if(this.visit[i] == false){
this.pushData(res,ques,i);
this.$store.dispatch('getAttemptedQues');
     this.isVisit = true;
   this.visit[i] =this.isVisit;

}else{
 this.totalData[i].answer = res?'Correct':'False';
}
}
},
//pushData
pushData(res,ques,i){
   this.totalData.push({
    questionNumber:i+1,
    question:ques.text,
    answer:res?'Correct':'False'
})
this.$store.dispatch('getData',this.totalData);
}
}
}
</script>