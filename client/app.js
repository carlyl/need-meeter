var m = require('mithril')
var MyComponent = require('./components/MyComponent')

//
// Global variable for global state (e.g. currentUser)
//
window.App = {}

//
// Client-side routing
//
m.route.mode = 'pathname'
m.route(document.getElementById('app'), '/', {

  '/': {
    // Controllers are optional
    // Select = {

    //   controller: function (data) {

    //       this.value = m.prop(data.value);
    //       this.options = data.options || {};
    //       return this;
    //   },

    

    view: function (ctrl) {

      return m('.app', [
        m('h1', 'Node Catapult'),
        m.component(MyComponent, { title: 'Welcome to my app!' }),
        m("label", "Do you have a place to sleep?"),
        m("input", {type: "checkbox"}, "housing"),
        m("br"),

        m("select", [
          m("option", {value: 01}, "Alabama"),
          m("option", {value: 02}, "Alaska"),
          m("option", {value: 04}, "Arizona"),
          m("option", {value: 05}, "Arkansas"),
          m("option", {value: 06}, "California"),
          // m("option", {value: 08}, "Colorado"),
// m("option", {value: 08}, "Colorado"),
// m("option", {value: 09}, "Connecticut"),

          m("option", {value: 10}, "Delaware"),
          m("option", {value: 11}, "DC"),
          m("option", {value: 12}, "Florida"),
          m("option", {value: 13}, "Georgia"),
          m("option", {value: 15}, "Hawaii"),
          m("option", {value: 16}, "Idaho"),
          m("option", {value: 17}, "Illinois"),
          m("option", {value: 18}, "Indiana"),
          m("option", {value: 19}, "Iowa"),
          m("option", {value: 20}, "Kansas"),
          m("option", {value: 21}, "Kentucky"),
          m("option", {value: 22}, "Louisiana"),
          m("option", {value: 23}, "Maine"),
          m("option", {value: 24}, "Maryland"),
          m("option", {value: 25}, "Massachusetts"),
          m("option", {value: 26}, "Michigan"),
          m("option", {value: 27}, "Minnesota"),
          m("option", {value: 28}, "Mississippi"),
          m("option", {value: 29}, "Missouri"),
          m("option", {value: 30}, "Montana"),
          m("option", {value: 31}, "Nebraska"),
          m("option", {value: 32}, "Nevada"),
          m("option", {value: 33}, "New Hampshire"),
          m("option", {value: 34}, "New Jersey"),
          m("option", {value: 35}, "New Mexico"),
          m("option", {value: 36}, "New York"),
          m("option", {value: 37}, "North Carolina"),
          m("option", {value: 38}, "North Dakota"),
          m("option", {value: 39}, "Ohio"),
          m("option", {value: 40}, "Oklahoma"),
          m("option", {value: 41}, "Oregon"),
          m("option", {value: 42}, "Pennsylvania"),
          m("option", {value: 44}, "Rhode Island"),
          m("option", {value: 45}, "South Carolina"),
          m("option", {value: 46}, "South Dakota"),
          m("option", {value: 47}, "Tennessee"),
          m("option", {value: 48}, "Texas"),
          m("option", {value: 49}, "Utah"),
          m("option", {value: 50}, "Vermont"),
          m("option", {value: 51}, "Virginia"),
          m("option", {value: 53}, "Washington"),
          m("option", {value: 54}, "West Virginia"),
          m("option", {value: 55}, "Wisconsin"),
          m("option", {value: 56}, "Wyoming"),

          '']
         

          ),
        m('button','Submit')
      ])
    }
  }

})
