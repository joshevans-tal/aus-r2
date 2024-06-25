var healthCount = 0;
// FUNC --- POPULATE CONTENT OF REVEALED 
        function errorMsg(){
            return(
                "<div class='margin-btm-x4 '><p>Unfortunately you will not be able to transfer existing cover to us, however, you may still be able to apply for new cover with us by providing some additional information. </p><div class='buttonbar'><button class='btn-primary btn-medium'>Apply for new cover</button><button class='btn-secondary btn-medium'>Cancel & exit this application</button></div></div>"
            )
        }

        // FUNC --- ENABLE SUBMIT BUTTONS IF CORRECT QUESTIONS HAVE BEEN ANSWER
        function enableBtns(){
            var submitbtn = document.getElementById("submit-btn");
            var cancelbtn = document.getElementById("cancel-btn");

            if(healthCount >= 6){
                submitbtn.disabled = false;
                cancelbtn.disabled = false;
            } else {
                submitbtn.disabled = true;
                cancelbtn.disabled = true;
            }
        }

        // FUNC --- ENSURE ANSWER CAN'T PUSH COUNT TO NEGATIVE NUMBERS ------
        function fixNegativeNum(){
            if (healthCount < 0) { healthCount = 0 };
        }

        // FUNC --- HANDLE CALLS FROM QUESTION ANSWERS
        function changeHealthCount(a,q){
            // q - check which question is calling this function
            if (q < 5) {
                healthCount = (a === "no") ? healthCount + 1 : healthCount - 1;
                // make sure healthCount isn't a negative number
                fixNegativeNum();
                // check submit button state change?
                enableBtns();
            } 
            if (q === "5a") {
                healthCount = (a === "no") ? healthCount + 1 : healthCount - 1;
                fixNegativeNum()
                // check submit button state change?
                enableBtns(); 
            } 
            // HANDLE DIFFERENT CONDITIONAL QUESTIONS
            else if (q==="5b"){
                
                if(healthCount==6){
                    // occurs in scenario where "no" is entered before "yes"
                    healthCount = (a === "no") ? healthCount + 1 : healthCount-1;
                    fixNegativeNum()
                }else{
                    healthCount = (a === "no") ? healthCount + 1 : healthCount;
                    fixNegativeNum()
                }
                // check submit button state change?
                enableBtns(); 
            } 
            else if (q==="5c"){
                healthCount = (a === "no") ? healthCount + 1 : healthCount;
                fixNegativeNum()
                // check submit button state change?
                enableBtns(); 
            }
            else if (q==="5d"){
                healthCount = (a === "no") ? healthCount : healthCount + 1;
                fixNegativeNum()
                // check submit button state change?
                enableBtns(); 
            }

        }

        // FUNC --- RADIO BUTTON QUESTIONS IN HTML WILL SEND "yes" OR "no" ANSWERS
        function toggleHiddenDiv(id) {
            var hiddenDiv = document.getElementById("hiddenDiv-" + id);

            if(id === "5a"){
                document.getElementById("container-5b").style.display = (this.value === "no") ? "block" : "none";
                hiddenDiv.innerHTML = errorMsg();
                changeHealthCount(this.value, "5a");
            }
            else if(id === "5b"){
                document.getElementById("container-5c").style.display = (this.value === "yes") ? "block" : "none";
                changeHealthCount(this.value, "5b");
            }
            else if(id === "5c"){
                document.getElementById("container-5d").style.display = (this.value === "yes") ? "block" : "none";
                changeHealthCount(this.value);
            } 
            else if(id === "5d"){
                changeHealthCount(this.value, "5d");
                // document.getElementById("container-5d").style.display = (this.value === "yes") ? "block" : "none";
            } 
            else {
                // standard question handler
                // populate hidden div with error html content
                hiddenDiv.innerHTML = errorMsg();
                // show/hide error message below question if 'yes'(being unhealthy answer)
                hiddenDiv.style.display = (this.value === "yes") ? "block" : "none";
                // count questions answered – if healthCount reaches 6, enable buttons
                changeHealthCount(this.value, id);
            }
        }