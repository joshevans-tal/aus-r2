// import { death2 } from './main.js';
import {subTest} from './sub-sub-test.js';

function buildDeath() {

    subTest();

    return `<div id='test-div'>test</div>`; // creates test which is given a listener in main.js

  }

function triggerDeath(){

    // OUTER DEATH/TPD COVER CARD
            // card header - Title, sub, onclick js, style, element id, action
            createCardHeader(
                "Death cover",
                "About Deathcover",
                "window.alert('Education about DEAATH')",
                "default",
                "card-container",
                "Reset"
            );

    return `<div id='test-div'>test trigger</div>`; // creates test which is given a listener in main.js

}
  



  // Export the functions
  export { buildDeath, triggerDeath };

  
// card-container