

// ------------------------------------------------------------------------
// ITEM SUB :: PURPOSE - Display currency items. Eg. benefits
// ------------------------------------------------------------------------

/*
  Use this cover item to display currency based items - eg. Benefits
*/

function createCoverItemDefault(product, coverType, valueNum, dictionary, id) {
  /* DISPLAYS HINT:
    string  string    string                        int/float
    Product covertype (dictionary)..................$value
    Death Fixed (alert education)...................$261,000
  */

  switch (valueNum) {
    // case 0:
    //   return `<div class="row">
    //     <span class="label">
    //     <span>${product}</span> 
    //     <a class="dictionary" onclick="myTooltip(this,'${dictionary}')">${coverType}</a>
    //     </span>
    //     <span id="${id}-item-value" class="cover-value">no cover</span>
    //     </div>`;
    //   break;


    case 0:
      return `<div class="row">
        <span class="label">
        <span>${product}</span> 
        <a class="dictionary" onclick="myTooltip(this,'${dictionary}')">${coverType}</a>
        </span>
        <span id="${id}-item-value" class="cover-value">${formatCurrency(valueNum,2)}</span>
        </div>`;
      break;
    default:
      return `<div class=" row">
        <span class="label">
        <span>${product}</span> 
        <a class="dictionary" onclick="myTooltip(this,'${dictionary}')">${coverType}</a>
        </span>
        <span id="${id}-item-value" class="cover-value">${formatCurrency(valueNum,0)}</span>
        </div>`;
  }

}


// ------------------------------------------------------------------------
// ITEM SUB :: PURPOSE - SUB ITEM – CURRENCY
// ------------------------------------------------------------------------

/*
  Use this cover item to display currency based items - eg. Benefits
*/

function createCoverItemSub(product, coverType, valueNum, dictionary) {
  /* DISPLAYS HINT:
    createCoverItemTotal("Death", "Fixed", 261000, "/mth");

    string  string    string                        int/float
    Product covertype (dictionary)..................$value
    > Death Fixed (alert education)...................$261,000
  */

  // }
  switch (valueNum) {
    // case 0:
    //   return `<div class="row bglight ">
    //       <span class="label">
    //       <img src="images/icons/indent-arrow.svg" class="sub-icon" />
    //       <span>${product}</span> 
    //       <a class="dictionary" onclick="myTooltip(this,'${dictionary}')">${coverType}</a>
    //       </span>
    //       <span class="cover-value">no cover</span>
    //       </div>`; // set as <span class="cover-value">no cover</span> if not changing this.
    //   break;
    case 0:
      return `<div class="row bglight ">
          <span class="label">
          <img src="images/icons/indent-arrow.svg" class="sub-icon" />
          <span>${product}</span> 
          <a class="dictionary" onclick="myTooltip(this,'${dictionary}')">${coverType}</a>
          </span>
          <span class="cover-value">${formatCurrency(valueNum,2)}</span>
          </div>`; 
      break;
    default:
      return `<div class="row bglight ">
          <span class="label">
          <img src="images/icons/indent-arrow.svg" class="sub-icon" />
          <span>${product}</span> 
          <a class="dictionary" onclick="myTooltip(this,'${dictionary}')">${coverType}</a>
          </span>
          <span class="cover-value">${formatCurrency(valueNum,0)}</span>
          </div>`;
  }

}




// ----------------------------------------------------------------------------
// ITEM SUB :: PURPOSE - Display flexible text items. Eg. waiting period values
// ----------------------------------------------------------------------------

/*
  Use this cover item to display text information - this won't be coverted to currency
*/
function createCoverItemDefaultText(product, coverType, valueText, dictionary) {
  /* DISPLAYS HINT:
    string  string    string                        int/float
    Product covertype (dictionary)..................$value
    Death Fixed (alert education)...................$261,000
  */

  return `<div class="row">
        <span class="label">
        <span>${product}</span> 
        <a class="dictionary" onclick="myTooltip(this,'${dictionary}')">${coverType}</a>
        </span>
        <span class="cover-value">${valueText}</span>
        </div>`;

}


// ----------------------------------------------------------------------------
// ITEM SUB :: PURPOSE - SUB ITEM - Display flexible text items. Eg. waiting period values
// ----------------------------------------------------------------------------
/*
  Use this cover item to display text information - this won't be coverted to currency
*/
function createCoverItemSubText(product, coverType, valueText, dictionary) {

  /* DISPLAYS HINT:
    createCoverItemSubText('Income Protection', 'Waiting period', ipData["Waiting period"], tooltips['waiting period']);

    string  |  string     |  string  ................. string
    –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    Product |  covertype  |  text value .............. tooltip content
    _______________________________________________________________________
    ```````````````````````````````````````````````````````````````````````
  
  */
  return `<div class="row bglight ">
          <span class="label">
          <img src="images/icons/indent-arrow.svg" class="sub-icon" />
          <span>${product}</span> 
          <a class="dictionary" onclick="myTooltip(this,'${dictionary}')">${coverType}</a>
          </span>
          <span class="cover-value">${valueText}</span>
          </div>`;

}


// ------------------------------------------------------------------------
// ITEM SUB :: PURPOSE - Display premium total
// ------------------------------------------------------------------------

/*
  Use this cover item to display currency based items - eg. Benefits
*/
function createCoverItemTotal(lineTitle, value, valueSuffix,valueId) {
  /* DISPLAYS HINT:
    createCoverItemTotal("Total premium", 82.52, "/mth");

    string                               int/float string
    lineTitle............................ value, valueSuffix
    Total premium.........................$82.52/mth
  */
  return `<div class="row  cover-item-total">
        <span class="label">
        <span>${lineTitle}</span> 
        </span>
        <span id="${valueId}"class="cover-value">${formatCurrency(value,2)}${valueSuffix}</span>
        </div>`;

}

function createCoverItemSubTotal(lineTitle, value, valueSuffix,valueId) {
  /* DISPLAYS HINT:
    createCoverItemTotal("Total premium", 82.52, "/mth");

    string                               int/float string
    lineTitle............................ value, valueSuffix
    Total premium.........................$82.52/mth
  */
  return `<div class="row  cover-item-sub-total">
        <span class="label">
        <span>${lineTitle}</span> 
        </span>
        <span id="${valueId}"class="cover-value">${formatCurrency(value,2)}${valueSuffix}</span>
        </div>`;

}