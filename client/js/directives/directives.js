app


.directive('smThread', [ 'ForumFactory', function(ForumFactory){
	return {
		restrict: "E",
		template: "<div ng-include='getContent(threadName)'></div>",
		scope: { 
			myValue: "&myAttribute"
		},
		link: function ( scope, element, attrs ){
			scope.threadName = scope.myValue().thread;
			
			scope.currentPage = 0;
		    scope.pageSize = 5;
		    scope.data = [];
		    scope.numberOfPages=function(){
			 	return Math.ceil(scope.data.length/scope.pageSize);                
		    }

			ForumFactory.getThread( {threadName: scope.threadName}, function(posts){
				scope.posts = posts;
				scope.data = posts;
			})

			scope.getContent = function(data){
				scope.sample = "sample!";
				return "/templates/thread.template.html";
			}
			
		}

	}
}])

.filter('startFrom', function() {

    return function(input, start) {
        start = +start; //parse to int
        if(start)
        	return input.slice(start);
        else
        	return input
    }
});


















