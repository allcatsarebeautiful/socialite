
var instragram = { 
	igPost: igPost	
}


	/* ---------- OBJECTS ----------*/

	// $scope.feed = [
	// 	{
	// 		photoUrl: "",
	// 		title: "",
	// 		author: "",
	// 		source: "instagram",
	// 	}
	// ]

	// $scope.instagram = [
	// 	{

	// 	}
	// ]

	var igPost = {
		photoUrl: "",
		title: "",
		author: "",
		source: "instagram",
		id: "",
	}


	/*----------- CONSTRUCTORS -------------*/

	function newPost (post){
		var newPost = Object.create(igPost),
			url = post.images.standard_resolution.url;
			title = post.caption.text,
			author = post.caption.from.username;
		newPost.photoUrl = url;
		newPost.title = title;
		newPost.author = author;
	}
	/* ---------- FUNCTIONS ----------*/

	function getUpdates(fullFeed,newFeed,number){
		// newFeed = foreach.
		// feed.foreach ( function (post){
		// 	var newIG = newPost(jsonlist.photourl,title,author,source);
		// 	$scope.feed.unshift(newIG);
		// });
	}

	//https://api.instagram.com/v1/tags/fuckyeah/media/recent?client_id=4a21d77050354080b0269479931553ad
	function getFeed (hashtag){
		var igTagURL = 'https://api.instagram.com/v1/tags/',
			recentTags = '/media/recent?',
			tagName = 'fuckyeah',
			clientID = 'client_id=4a21d77050354080b0269479931553ad',
			igPostFeed = '',
			request = '';
		request = new XMLHttpRequest();
		request.open('GET', igTagURL+hashtag+recentTags+clientID, true);

		request.onload = function() {
		  if (request.status >= 200 && request.status < 400){
		    // Success!
		    igPostFeed = JSON.parse(request.responseText);
		    return igPostFeed;
		  } else {
		    // We reached our target server, but it returned an error

		  }
		};
		request.onerror = function() {
		  // There was a connection error of some sort
		};
		request.send();
	}

	function getIGstream (){
		console.log("helloworld");
		hashtag = 'fuckyeah';
		var feed = getFeed(hashtag);
		console.log(feed);

		// store result in variable
		// translate the feed to an array of our type of objects
		// push our objects onto the top of the array
		// translate that array
	}
console.log("hello world");
getIGstream();


	// var module = (function(){
	//     var privateFuncs = {
	//         privateMethod: function(val) {
	//             console.log(val);
	//         }
	//     };
	//     var publicMethod = function() {
	//         var functionString = "privateMethod";
	//         privateFuncs[functionString]('test');
	//     };
	//     return {
	//         init: publicMethod
	//     };
	// })();

	function newPost (post){
		var newPost = Object.create(igPost),
			url = post.images.standard_resolution.url;
			title = post.caption.text,
			author = post.caption.from.username;
		newPost.photoUrl = url;
		newPost.title = title;
		newPost.author = author;
	}


