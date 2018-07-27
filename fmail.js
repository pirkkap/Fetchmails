$(document).ready(function() {
    $.ajax({
		type: "GET",
        url: "https://avosetdemo.atlassian.net/rest/api/2/project/PT",
		contentType: "application/javascript",
		dataType: "jsonp",
		crossDomain: true,
		async: false,
		headers: {"Access-Control-Allow-Origin": "*"},
		headers: {"X-Atlassian-Token" : "nocheck"},
		headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"},
		success: function (issuedata) {

			if (issuedata.issues.length == 1)  {

                                // do something
                                alert("Success!");
			} else {

				return 0;
			}
		},
		error: function(data, status, error) {
            console.log('error: ', data, status, error);
			return 0;
		}
	});
});

