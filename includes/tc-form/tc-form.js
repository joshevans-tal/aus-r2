// TEST FUNC

function tcForm(question){
    let type = formType[0];
    let label = formLabel;
    let content = ``;
    console.log(`
    tcForm type: ${question.formType}
    \n
    `);
    // content += tcLabel(formType[1], formType[1], formType[1]);

    switch(type) {
        case 'select':
            // console.log('case select');

            content += tcformSelect(formType, formLabel);
        break;
        default:
            content += `<input type="text" id="fname" name="fname">`;
    }

    return content;
    
}





function tcFormSelect(question){
    /* ------------------------------------------------
    ////// FORM SELECT 
    ---------------------------------------------------
    
    This function takes a js object as a paramater and returns a form question containing:
    - Form label with optional tooltip education
    - Select input with variable options
    
    */
    
    //  <select class="tc-select" id="question1" name="occupation">
    //      <option value="full-time">Full-time</option>
    //      <option value="part-time">Part-time</option>
    //      <option value="casual">Casual</option>
    //      <option value="home-duties">Home duties</option>
    //  </select>
    
        let formReturn = `<div class="form-element">`;
        
        // ADD LABEL
        if(question.label != ''){
            formReturn += tcLabel(question.label,question.inputName,question.tooltip);
        }
        // START SELECT
        formReturn += `<select class="tc-select" id="${question.inputName}" name="${question.inputName}">`;
        // CREATE SELECT OPTIION LIST
        for (let i = 0; i < question.selectOptions.length; i++) {
            formReturn += `<option value="${question.selectOptions[i]}">${question.selectOptions[i]}</option>`;
          }
        
        formReturn += `</select>`;
        // ADD CAPTION
        if(question.caption != ``){
            formReturn += `<div class="caption">${question.caption}</div>`;
        }
        
        formReturn += `</div>`;
        
        return formReturn;
    
    }


function tcFormQuestion2(question){
// Assumes param is javascript data object with form elements 
// E.G.
/*
    "question1": [
          {
            "inputType": `select`, // form input type - accepts 'text', 'email', 'select', 'select-multiple','radio', 'checkbox'
            "label": `This is question1 label`, // text label above form element
            "inputName": `question1`, // name used as an id for the form element
            "tooltip": ``, // displays a tooltip if the value is a string other than empty
            "caption": `This email will only be used for this insurance application.`, // displays a caption, if string is other than empty
            "initValue": `q1 placeholder`, // if added, sets initial value of form input
            "selectOptions": [ // array of option values
                'Full-time', 
                'Part-time',
                'Casual',
                'Home duties',
                'unemplyed',
                'retired'
                ]
            }
        ],
*/
    console.log(`
    tcFormQuestion2 Label: ${question.label}\n
    tcFormQuestion2 inputType: ${question.inputType}\n
    tcFormQuestion2 inputName: ${question.inputName}\n
    tcFormQuestion2 tooltip: ${question.tooltip}\n
    tcFormQuestion2 caption: ${question.caption}\n
    tcFormQuestion2 initValue: ${question.initValue}\n
    tcFormQuestion2 selectOptions: ${question.selectOptions}\n
    `);
    
};


function tcFormText(question){
    // Assumes param is javascript data object with form elements 
    // E.G.
    
        console.log(`
        tcFormText Label: ${question.label}\n
        tcFormText inputType: ${question.inputType}\n
        tcFormText inputName: ${question.inputName}\n
        tcFormText tooltip: ${question.tooltip}\n
        tcFormText caption: ${question.caption}\n
        tcFormText initValue: ${question.initValue}\n
        tcFormText selectOptions: ${question.selectOptions}\n
        `);

        // ADD LABEL
        let formReturn = `<div class="form-element">`;
        // ADD LABEL
        if(question.label != ''){
            formReturn += tcLabel(question.label,question.inputName,question.tooltip);
        }
        // formReturn += tcLabel(question.label,question.inputName,question.tooltip);
        formReturn += `<input type="${question.inputType}" class="tc-select" id="${question.inputName}" name="${question.inputName}">`;
        if(question.caption != ''){
            formReturn += `<div class="caption">${question.caption}</div>`;
        }
        formReturn += `</div>`;

        return formReturn;
        
    };


    function tcFormRadio(question){
        /*
        <div id="container-2" class="form-element">
            <p class="my-label">
                <span class="num">2.</span>
                Do you have an illness or injury which your doctor has advised may lead to having a limited time to live?
            </p>
            <div>
                <label class="radio-item"><input type="radio" name="choice-2" value="yes" onclick="toggleHiddenDiv.call(this, '2')">
                Yes</label>
                <label class="radio-item"><input type="radio" name="choice-2" value="no" onclick="toggleHiddenDiv.call(this, '2')">
                No</label>
            </div>
            <div id="hiddenDiv-2" class="hidden sub">
                <p>This paragraph is hidden by default.</p>
            </div>
        </div>
        */
        console.log(`
        tcFormRadio Label: ${question.label}\n
        tcFormRadio inputType: ${question.inputType}\n
        tcFormRadio inputName: ${question.inputName}\n
        tcFormRadio tooltip: ${question.tooltip}\n
        tcFormRadio initValue: ${question.initValue}\n
        tcFormRadio radioOptions: ${question.radioOptions}\n
        `);
        // ADD LABEL
        let formReturn = `<div class="form-element">`;
        // ADD LABEL
        if(question.label != ''){
            // formReturn += tcLabel(question.label,question.inputName,question.tooltip);
            formReturn += tcLabel(question.label,'',question.tooltip);
        }
        // formReturn += tcLabel(question.label,question.inputName,question.tooltip);
        formReturn += `<div class="radio-container">`;
        // CREATE SELECT OPTIION LIST
        for (let i = 0; i < question.radioOptions.length; i++) {
            formReturn += `<label class="radio-item"><input id="${question.inputName}" type="radio" name="${question.inputName}" onclick="toggleHiddenDiv.call(this, '2')">
            ${question.radioOptions[i]}</label>`;
        }
        
        // formReturn += `<input type="${question.inputType}" class="tc-select" id="${question.inputName}" name="${question.inputName}">`;
        formReturn += `</div>`;
        if(question.caption != ''){
            formReturn += `<div class="caption">${question.caption}</div>`;
        }
        formReturn += `</div>`;

        return formReturn;

    }
    

    function tcFormEmail(question){
        // Assumes param is javascript data object with form elements 
        // E.G.
        
            console.log(`
            tcFormText Label: ${question.label}\n
            tcFormText inputType: ${question.inputType}\n
            tcFormText inputName: ${question.inputName}\n
            tcFormText tooltip: ${question.tooltip}\n
            tcFormText placeholder: ${question.placeholder}\n
            tcFormText initValue: ${question.initValue}\n
            tcFormText selectOptions: ${question.selectOptions}\n
            `);
    
            // ADD LABEL
            let formReturn = `<div class="form-element">`;
            // ADD LABEL
            if(question.label != ''){
                formReturn += tcLabel(question.label,question.inputName,question.tooltip);
            }
            // formReturn += tcLabel(question.label,question.inputName,question.tooltip);
            formReturn += `<input type="${question.inputType}" class="tc-select" id="${question.inputName}" name="${question.inputName}" placeholder="${question.placeholder}">`;
            if(question.caption != ''){
                formReturn += `<div class="caption">${question.caption}</div>`;
            }
            formReturn += `</div>`;
    
            return formReturn;
            
        };

        function tcFormCurrencyCycle(question) {
            let formReturn = `<div class="form-element">`;
        
            // Add label
            if (question.label != '') {
                formReturn += tcLabel(question.label, question.inputName, question.tooltip);
            }
            // Currency input and select dropdown with inline event handlers
            formReturn += `<div class="radio-container">
                            <span class="currency-container">
                                <span class="input-prefix">$</span>
                                <input type="number" class="currency-text-input" id="${question.inputName}-number" name="${question.inputName}" oninput="updateSalaryTotal('${question.inputName}')">
                            </span>
                            <select class="tc-select" id="${question.inputName}-select" name="${question.inputName}" onchange="updateSalaryTotal('${question.inputName}')">`;
        
            // Create select option list
            for (let i = 0; i < question.selectOptions.length; i++) {
                formReturn += `<option value="${question.selectOptions[i]}">${question.selectOptions[i]}</option>`;
            }
        
            formReturn += `</select></div>`;
            // Div for displaying total
            formReturn += `<div id="${question.inputName}-total" hidden><span>$</span>0</div>`;
            // Add caption
            if (question.caption != ``) {
                formReturn += `<div class="caption">${question.caption}</div>`;
            }
            
            formReturn += `</div>`;
            
            return formReturn;
        }
        
        // Assuming tcLabel is defined elsewhere in your code
        
        // Global function to be called by the inline event handlers
        function updateSalaryTotal(inputName) {
            var salaryInput = document.getElementById(`${inputName}-number`).value;
            var selectedOption = document.getElementById(`${inputName}-select`).value;
            var totalDiv = document.getElementById(`${inputName}-total`);
        
            // Assuming salaryTotal function is adjusted or you have access to calculate the total salary
            var salaryDisplay = salaryTotal(selectedOption, parseFloat(salaryInput));
            totalDiv.innerHTML = salaryDisplay;
            totalDiv.hidden = false; // Make the div visible
        }
        
        // Adjusted salaryTotal function (assumed to return HTML content correctly now)
        function salaryTotal(selectedOption, salary) {
            switch (selectedOption) {
                case 'per week':
                    return `<div class="salary-annual-total">
                            <span>Total salary: </span>${formatCurrency((salary * 52),0)} /year
                            </div>`;
                case 'per fortnight':
                    return `<div class="salary-annual-total">
                            <span>Total salary: </span>${formatCurrency((salary * 26),0)} /year
                            </div>`;
                case 'per month':
                    return `<div class="salary-annual-total">
                            <span>Total salary: </span>${formatCurrency((salary * 12),0)} /year
                            </div>`;
                case 'per year':
                    return `<div class="salary-annual-total">
                            <span>Total salary: </span>${formatCurrency((salary),0)} /year
                            </div>`;
                default:
                    return `<div class="salary-annual-total">
                            <span>Total salary: </span>${formatCurrency(0,0)}
                            </div>`;
            }
        }
        
        // function tcFormCurrencyCycle(question){
        //     /* ------------------------------------------------
        //     ////// FORM SELECT 
        //     ---------------------------------------------------
            
        //     This function takes a js object as a paramater and returns a form question containing:
        //     - Form label with optional tooltip education
        //     - Select input with variable options
            
        //     */
            
        //     //  <select class="tc-select" id="question1" name="occupation">
        //     //      <option value="full-time">Full-time</option>
        //     //      <option value="part-time">Part-time</option>
        //     //      <option value="casual">Casual</option>
        //     //      <option value="home-duties">Home duties</option>
        //     //  </select>
            
        //         let formReturn = `<div class="form-element">`;
                
        //         // ADD LABEL
        //         if(question.label != ''){
        //             formReturn += tcLabel(question.label,question.inputName,question.tooltip);
        //         }
        //         formReturn += `<div class="radio-container ">`;
        //         formReturn += `<span class="currency-container">
        //                         <span class="input-prefix">$</span>
        //                         <input type="number" class="currency-text-input" id="${question.inputName}-number" name="${question.inputName}">
        //                        </span>`;
        //         // START SELECT
        //         formReturn += `<select class="tc-select" id="${question.inputName}-select" name="${question.inputName}" width="auto" change="salaryTotal(this.selectedOption)">`;
        //         // CREATE SELECT OPTIION LIST
        //         for (let i = 0; i < question.selectOptions.length; i++) {
        //             formReturn += `<option value="${question.selectOptions[i]}">${question.selectOptions[i]}</option>`;
        //           }
                
        //         formReturn += `</select></div>`;


        //         formReturn += `<div id="${question.inputName}-total" hidden><span>$</span>0/mth</div>`;

        //         // ADD CAPTION
        //         if(question.caption != ``){
        //             formReturn += `<div class="caption">${question.caption}</div>`;
        //         }
                
        //         formReturn += `</div>`;
                
        //         return formReturn;


        //         function salaryTotal(selectedOption, salary){

        //             switch(selectedOption){
        //                 case 'per week':
        //                     return `<span>total salary: $</span>${salary*52} /wk`;
        //                 break;
        //                 case 'per fortnight':
        //                     return `<span>total salary: $</span>${salary*26} /wk`;
        //                 break;
        //                 case 'per month':
        //                     return `<span>total salary: $</span>${salary*12} /mth`;
        //                 break;
        //                 case 'per year':
        //                     return `<span>total salary: $</span>${salary}/yr`;
        //                 break;
        //             }

        //         }
            
        //     }

function tcFormKnockout(message, id, actions){
        let content = ``;

        content += `<div id="${id}" class="knockout">${message}</div>`;

        return content;
    }






    // ///////// ARCHIVE:

    function tcFormSelect_archive(formArray){
        /* ------------------------------------------------
        ////// FORM SELECT 
        ---------------------------------------------------
        
        This function works with the child function formSelectOptions(options){}
        To build a select input form element. 
        
        It takes a 2D array as a paramater and returns a form question containing:
        - Form label with optional tooltip education
        - Select input with variable options
        
        */
        
        //  <select class="tc-select" id="question1" name="occupation">
        //      <option value="full-time">Full-time</option>
        //      <option value="part-time">Part-time</option>
        //      <option value="casual">Casual</option>
        //      <option value="home-duties">Home duties</option>
        //  </select>
        
            // SET UP VARS
            let inputType = formArray[0];
            let formLabel = formArray[1];
            let inputParams = formArray[2];
            let formReturn = ``;
        
            // console.log(`2D Array function formArray[0]:`+formArray[0]+
            //     `\n2D Array function formArray[1]:`+formArray[1]+
            //     `\n2D Array function formArray[2]:`+formArray[2]+
            //     `\n2D Array function formArray[2][0]:`+formArray[2][0]+
            //     `\n2D Array function formArray[2][1]:`+formArray[2][1]+
            //     `\n2D Array function formArray[2][2]:`+formArray[2][2]+
            //     `\n2D Array function inputParams[0]:`+inputParams[0]+
            //     `\n2D Array function inputParams[1]:`+inputParams[1]+
            //     `\n2D Array function inputParams[2]:`+inputParams[2]
            //     );
            
            // ADD LABEL
            formReturn += tcLabel(formLabel[0],formLabel[1],formLabel[2]);
            formReturn += `<select class="tc-select" id="${formArray[2][0]}" name="${formArray[2][0]}">`;
            // CREATE SELECT OPTIION LIST
            for (let i = 0; i < inputParams[2].length; i++) {
                formReturn += `<option value="${inputParams[2][i]}">${inputParams[2][i]}</option>`;
              }
            formReturn += `</select>`;
            
            return formReturn;
        
        }