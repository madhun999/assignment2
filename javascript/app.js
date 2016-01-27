///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//   Code for Default page.
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//
// USAGE: resultString = ReplaceQuotes(quoteString, param1, param2, ... paramN);
//
//  Replaceable params in a string are specified by "%<param-num><optional-placeholder>%".  <param-num> should start with 1 and increment by 1.
//  i.e., "Now is the %1time% for all %2good% %3men% to come to the %4aid% of their %5country%."
//
function ReplaceQuotes() {
    var result = arguments[0];
    for (var iArg = 1; iArg < arguments.length; iArg++) {       // Start at second arg (first arg is the pattern)
        var pattern = new RegExp('%' + iArg + '\\w*%');
        result = result.replace(pattern, arguments[iArg]);
    }
    return result;
}



//
// onclick handler for submit button.
//
function HandleSubmit() {
    var param1 = $("#Param1").val();
    var param2 = $("#Param2").val();
    var param3 = $("#Param3").val();
    var param4 = $("#Param4").val();
    var param5 = $("#Param5").val();

    var result = ReplaceQuotes("Now is the %1time% for all %2good% %3men% to come to the %4aid% of their %5country%.",
        param1, param2, param3, param4, param5 );

    // Display the new text on the webpage
    $("#Sentence").text(result);

    // Also log it to the debug console
    console.log(result);
}


