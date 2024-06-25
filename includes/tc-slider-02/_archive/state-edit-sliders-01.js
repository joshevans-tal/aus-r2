// ----------------------------------------------------------------
//   SLIDER + TEXT INPUT LISTENERS
// ----------------------------------------------------------------

/* 
        CALL script to load data and return array into slider1 variable
        Array returns: HTML content, range slider id, tooltip id, text input id, text input units label id
        To use returned array, reference array position
        Slider HTML.......... slider1[0]
        Slider id............ slider1[1]
        Tooltip id........... slider1[2]
        Text input id........ slider1[3]
        Text input label id.. slider1[4]
*/
// Function found in "custom-cover-main.js"
createDeathTPDSliders();

function createDeathTPDSliders(id){

        let sliderDivs = `<div id="slider-container-death-fixed"></div>
        <div id="slider-container-death-aged"></div>
        <div id="slider-container-tpd-fixed"></div>`

        document.getElementById('slider-test').innerHTML = sliderDivs;

        // CREATE Death fixed slider
        let slider1 = dataImport01('death-fixed');
        // Add slider html to document
        document.getElementById('slider-container-death-fixed').innerHTML = slider1[0];
        // Add listeners using slider id and tooltip id
        sliderListener(slider1[1], slider1[2], slider1[3], slider1[4]);

        // CREATE Death age-based slider
        let slider2 = dataImport01('death-age-based');
        // add slider to the page
        document.getElementById('slider-container-death-aged').innerHTML = slider2[0];
        // Add listeners using slider id and tooltip id
        sliderListener(slider2[1], slider2[2], slider2[3], slider2[4]);

        // CREATE TPD flixed slider
        let slider3 = dataImport01('tpd-fixed');
        // add slider to the page
        document.getElementById('slider-container-tpd-fixed').innerHTML = slider3[0];
        // Add listeners using slider id and tooltip id
        sliderListener(slider3[1], slider3[2], slider3[3], slider3[4]);

}
        


// ----------------------------------------------------------------
//   RESET TOOLTIP POS ON WINDOW RESIZE
// ----------------------------------------------------------------


        var x = 0;
        function sliderWindowResizeReset() {
            // var txt = x += 1;
            // document.getElementById("demo").innerHTML = txt;

            // RESIZE SLIDER 01 ****
            let resizeSlider = document.getElementById(slider1[1]);
            let resizeTooltip = document.getElementById(slider1[2]);
            // run update
            updateTooltipPosition(resizeSlider, resizeTooltip);

            // RESIZE SLIDER 02 ****
            resizeSlider = document.getElementById(slider2[1]);
            resizeTooltip = document.getElementById(slider2[2]);
            // run update
            updateTooltipPosition(resizeSlider, resizeTooltip);
        }
            