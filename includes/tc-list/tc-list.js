// Initialise the array
var listArray = ["List not loaded"]

// Function will update the array and create html items from it
function createList(items, id) {
    // update array to items from html page script call
    listArray = items;

    // str is a string that is added to, to build out the full html. 
    // str is then sent to the page with one innerHTML call
    
    var str = '<div class="list">'

        listArray.forEach(function (listitem) {
            str += '<div>' + listitem + '</div>';
        });

    str += '</div>';

    // Find element in DOM and update it
    // document.getElementById("slideContainer").innerHTML = str;
    document.getElementById(id).innerHTML = str;
}


// ADD THIS TO YOUR HTML
{
    /* 
    <!-- START LIST -->
        
              <div id="listContainer1"></div>
              <script>
                    createList(
                    // Write list as array
                    [
                        "First, confirm some basic personal and emplyment information.",
                        "Next, discover cover options.",
                        "Find cover you like? Answer some health questions to apply.",
                        "<img src='https://www.tal.com.au/-/media/490b2a5a335f432f93776132c98c27e4.ashx' /> an html logo!"
                    ], 
                    // identify container div id
                    "listContainer1");
              </script>

        <!-- END LIST -->

*/
}


// <!-- ORIGINAL HTML REF -->
// <div class="list">
// <div>First, confirm some basic personal and emplyment information.</div>
// <div>Next, discover cover options.</div>
// <div>Find cover you like? Answer some health questions to apply.</div>
// </div>
// <!-- END LIST -->