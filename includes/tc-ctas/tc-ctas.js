// -----------------------------------------------------------------------------------------------------------------
// CTA COMPONENT - By josh evans
// -----------------------------------------------------------------------------------------------------------------
/*
// -----------------------------------------------------------------------------------------------------------------
// HOW DOES IT WORK?
// -----------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------
00 || This is a return function. ###
--------------------------------------------------------------------

The tcCTA function is looking for 2 things:
    1.   A layout decision 'fullwidth' or any other value
    2.   A 2D array that defines the buttons

tcCTA( 'fullwidth' , [  [button1 array], [button2 array], [etc...]  ]  );

--------------------------------------------------------------------
01 || LAYOUT CHOICE
--------------------------------------------------------------------
The default layout parameter should be 'fullwidth' - which set makes the buttons fill 100% of the container
Any other parameter will collapse the buttons to the text width. 

--------------------------------------------------------------------
02 || CREATE THE BUTTONS YOU WANT
--------------------------------------------------------------------
The cta script looks for a multi-dimensional array as shown in the usage example below. 
It uses a forEach loop to loop through each of the outer arrays, using the inner array elements to build desired buttons

// -----------------------------------------------------------------------------------------------------------------
// ????????|----  USAGE EXAMPLE - copy this into your js script to call  ----|?????????????
// -----------------------------------------------------------------------------------------------------------------

content += tcCTA(
    // Set cta layout DEFAULT should be 'fullwidth' - any other value will collaps the buttons
    'fullwidth',
    // Define 2D array of buttons
    [
        [
            'primary', 
            'large',
            'Get started',
            `location.href='02-work-details.html';`
        ],
        [
            'tertiary',
            'large',
            'Cancel & exit',
            `location.href='index.html';`
        ]
    ]
    
);
-----------
*/

function tcCTA(layout, btnContent){
    
    // Get the 2D array into the 'myButton' variable.
    let myButton;
    myButton = btnContent;

    let content = ``;

    // Add a flex container to make the buttons full width. 
    content += `<div class="ctas">`; 
    // Add inner div to collapse full width if not desired    
    if(layout !== 'fullwidth'){
        content += `<div>`; 
    }
    // Loop through 2D array and create buttons
   myButton.forEach(button => {
        content +=`<button class='${button[0]} btn-${button[1]} btn-width-auto' onclick='${button[3]}'>${button[2]}</button>`;
    });

    // close collapsed inner div
    if(layout !== 'fullwidth'){
        content += `</div>`; 
    }
    // close flex box div
    content += `</div>`;
    
    return content;
}





// ###########!!!!!!!!!!!!##############!!!!!!!!!!!!!!##############!!!!!!!!!!!!!
// -----------------------------------------------------------------------------------------------------------------
// !!!!! DEPRECATED - DO NOT USE !!!!!!!
// -----------------------------------------------------------------------------------------------------------------

function createPrimaryBtn(btnlabel,url){
    document.write("<button class='primary btn-large btn-width-auto' onclick='location.href='"+url+"';'>Get started</button>");
}

function createSecondaryBtn(btnlabel,url){
    document.write("<button class='secondary btn-large btn-width-auto' onclick='location.href='"+url+"';'>Get started</button>");
}

function createTertiaryBtn(btnlabel,url){
    document.write("<button class='tertiary btn-large collapse' onclick='location.href='"+url+"';'>Get started</button>");
}

// <!-- START CTAs -->
// <div class="ctas">
// <!-- To collapse button width to normal text defined size, surround btns with divs -->
// <button class="primary btn-large btn-width-auto" onclick="location.href='02-work-details.html';">Get started</button>
// <button class="tertiary btn-large collapse" onclick="url('/page2.html')">Cancel & Exit</button>     
// <!-- <a class="link" href="#">Cancel & exit</a> -->
// </div>
// <!-- END CTAs -->