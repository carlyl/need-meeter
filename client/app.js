var m = require('mithril')
var MyComponent = require('./components/MyComponent')

//
// Global variable for global state (e.g. currentUser)
//
window.App = {}

var test = "oh hey thaar";

//
// Client-side routing
//
m.route.mode = 'pathname'
m.route(document.getElementById('app'), '/', {

  '/': {

    controller: function() {

     this.surveyQuestions = [   
      {group: 1, category: "Protection from the Elements", question: "I have a permanent place to live.", highest: 10, lowest:0},
      {group: 1, category: "Protection from the Elements", question: "I always have enough food to eat at least 3 meals a day.", highest: 10, lowest:0},
      {group: 1, category: "Protection from the Elements", question: "I always have enough clean water to drink.", highest: 10, lowest:0},
      {group: 1, category: "Protection from the Elements", question: "I always have plenty of clean clothing to wear.", highest: 10, lowest:0},
      {group: 1, category: "Protection from the Elements", question: "I always have enough money to pay for my housing, food, water, and clothing.", highest: 10, lowest:0},
      {group: 2, category: "Safety", question: "I always feel physically safe from danger in my own home.", highest: 10, lowest:0},
      {group: 2, category: "Safety", question: "I always feel loved and emotionally supported in my own home.", highest: 10, lowest:0},
      {group: 2, category: "Safety", question: "I always have access to mental and physical healthcare if something goes wrong.", highest: 10, lowest:0},
      {group: 2, category: "Safety", question: "I feel that I can recover from most healthcare problems.", highest: 10, lowest:0},
      {group: 2, category: "Safety", question: "I feel confident in my ability to access healthcare services in the future.", highest: 10, lowest:0},
      {group: 3, category: "Friendship and Family", question: "I have someone I trust whom I can tell anything.", highest: 10, lowest:0},
      {group: 3, category: "Friendship and Family", question: "I know I always have a place to go where I feel like I belong.", highest: 10, lowest:0},
      {group: 3, category: "Friendship and Family", question: "I know I have people I can talk to that genuinely care about me.", highest: 10, lowest:0},
      {group: 3, category: "Friendship and Family", question: "I always feel free to be myself in my own home.", highest: 10, lowest:0},
      {group: 4, category: "Know Yourself", question: "I typically feel empowered to be myself.", highest: 10, lowest:0},
      {group: 4, category: "Know Yourself", question: "I typically feel confident that the decisions I make are right for me.", highest: 10, lowest:0},
      {group: 4, category: "Know Yourself", question: "I feel confident tht my life has meaning to me.", highest: 10, lowest:0}
    ]

    },
  

    view: function (ctrl) {

      console.log(test);
      console.log(ctrl.surveyQuestions)
      return m('.app', [
        m('h1', 'Need Meeter'),
        m.component(MyComponent, { title: 'Find out if all your needs met!' }),
        m("br"),
        m('div', 

           ctrl.surveyQuestions.map(function(x){
              return m("p", x.question);
            })
          )
        ])
    }
    
  }

})

