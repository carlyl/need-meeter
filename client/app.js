var m = require('mithril')
var MyComponent = require('./components/MyComponent')
var numeral = require('numeral')


window.App = {}

var surveyQuestions = [   
  {group: 1, category: "Protection from the Elements", question: "I have a permanent place to live.", score:0},
  {group: 1, category: "Protection from the Elements", question: "I always have enough food to eat at least 3 meals a day.", score:0},
  {group: 1, category: "Protection from the Elements", question: "I always have enough clean water to drink.", score:0},
  {group: 1, category: "Protection from the Elements", question: "I always have plenty of clean clothing to wear.", score:0},
  {group: 1, category: "Protection from the Elements", question: "I always have enough money to pay for my housing, food, water, and clothing.", score:0},
  {group: 2, category: "Safety", question: "I always feel safe from danger in my own home.", score:0},
  {group: 2, category: "Safety", question: "I always feel loved and emotionally supported in my own home.", score:0},
  {group: 2, category: "Safety", question: "I always have access to mental and physical healthcare if something goes wrong.", score:0},
  {group: 2, category: "Safety", question: "I feel that I can recover from most healthcare problems.", score:0},
  {group: 2, category: "Safety", question: "I feel confident in my ability to access healthcare services in the future.", score:0},
  {group: 3, category: "Friendship and Family", question: "I have someone I trust whom I can tell anything.", score:0},
  {group: 3, category: "Friendship and Family", question: "I know I always have a place to go where I feel like I belong.", score:0},
  {group: 3, category: "Friendship and Family", question: "I know I have people I can talk to that genuinely care about me.", score:0},
  {group: 3, category: "Friendship and Family", question: "I always feel free to be myself in my own home.", score:0},
  {group: 4, category: "Know Yourself", question: "I typically feel empowered to be myself.", score:0},
  {group: 4, category: "Know Yourself", question: "I typically feel confident that the decisions I make are right for me.", score:0},
  {group: 4, category: "Know Yourself", question: "I feel confident tht my life has meaning to me.", score:0}
]


m.route.mode = 'pathname'
m.route(document.getElementById('app'), '/', {

  '/': {

    // controller: function(){
    //   this.question = question
    // }

    controller : function() {
      var ctrl = this;
      ctrl.score = 0;
      ctrl.totalPossible = 170;
      ctrl.percentOfNeedsMet = 0;
      // ctrl.totalScore =0;
    },
    view: function (ctrl) {

      // console.log(ctrl.surveyQuestions)

      return m('.app', [
        m('h1', 'Need Meeter'),
        m.component(MyComponent, { title: ctrl.percentOfNeedsMet + ' of your needs are met!' }),
        // m('p', ctrl.score),
        // m('p', ctrl.percentOfNeedsMet),
        // m("button", "Get Started"),
        // m("br"),
        m('div', 
          m('form', ""),

          surveyQuestions.map(function(question, index){
            // console.log(index);
            var totalScore = 0;
            // console.log(surveyQuestions[counter]),
            // counter++,
            // console.log(surveyQuestions[counter]),

            for (index in surveyQuestions) {
              // console.log("Queston: ", surveyQuestions[index].question)

            }
              return m("p", question.question, [
                // console.log(question.question),
                    
                    m("label", ""),
                    m("input[name=score]", {

                        onmousedown: function(e){
                          var curValue = Number(e.currentTarget.value)
                          ctrl.score -= curValue


                        },
                        onmouseup:function(e){
                          // return tempStorage.score = e.currentTarget.value
                          var thisValue = e.currentTarget.value

                          ctrl.score += Number(e.currentTarget.value);
                          console.log(thisValue)
                          console.log()
                          var percOfNeedsMet = Number(ctrl.score/ctrl.totalPossible)
                          ctrl.percentOfNeedsMet = numeral(percOfNeedsMet).format('0.0%')

                          },
                        type:"range", 
                        step:1,
                        defaultValue:0,
                        min:0, 
                        max:10, 
                        style: {width: "40px"}

                      }),


                ]) 
            })


          ),

        ])
    }
    
  }

})

