app

.directive('sampleLink', function() {
    return {
        restrict: "E",
        template: "<div>...loaded template (div) through <strong> sample-link </strong> directive!...</div>",
        // templateUrl: path/to/file/template.html
        link: function(scope, element, attrs){
        	console.log("<sample-link> link executing")

       		element.addClass("sampleLinkLinked")

           	element.bind("mouseenter", function(){

           		// Do things after mouseenter...
        		console.log("<sample-link> mouseenter triggered.")

           		// Add a class...
           		element.addClass("mouseenterEntered")
 				// addClass()
				// after()
				// append()
				// detach()
				// empty()
				// eq()
				// hasClass()
				// html()
				// prepend()
				// prop()
				// text()
				// toggleClass()
				// val()

           });

        }
    };
})
.directive('sampleCompile', function() {
    return {
        restrict: "E",
        template: "<div>...loaded template (div) through <strong> sample-compile </strong> directive!...</div>",
        // templateUrl: "path/to/file/template.html",   
        compile: function(element, attrs){
			// return function Link(scope, element, attrs){
			//	...code here...
			// }
			// or
			return {
				pre: function(scope, element, attrs){
					// Not safe - for dom transformations 
					// Executed BEFORE child elements are linked
        			console.log("<sample-compile> PRE (link) executing.")

					element.bind("mouseenter", function(){
						console.log("<sample-compile> PRE - mouseenter triggered");
					})
				},
				post: function(scope, element, attrs){ // Same as link *
					// Safe - for dom transformation
					// Executed AFTER child elements are linked
        			console.log("<sample-compile> POST (link) executing.")

					element.bind("mouseenter", function(){
						console.log("<sample-compile> POST - mouseenter triggered");
					})
				}
			}
        }
    };
})
.directive('sampleScope', function() {
    return {
        restrict: "E",
        template: "<div>...loaded template (div) through <strong>sample scope</strong> directive!...</div>"+
        		  "<button ng-click='addCustomer()'>Add</button>"+
        		  "<li ng-repeat='customer in customers'>{{customer.name}}</li>",
        scope: { // name: "Isolated Scope ", 
        	name: "@", // or name: "@name" || This is the same as scope.name = attrs.name;
        	customer: "=", // binds the local scope property to a parent scope property having same name as the value of the 
        	click: "&" // binds the local scope property to the output of an expression defined in the DOM attribute. It's like a function-wrapper.
        }, 
        controller: function($scope){
        	function initialize(){
        		// $scope.customers = angular.copy($scope.datasource)
        		$scope.customers = [
        			{ name:"A"},
        			{ name:"B"},
        			{ name:"C"}
        		]
        	}
        	initialize();

        	$scope.addCustomer = function(){
        		// $scope.add(); // call external function from a controller
        		$scope.customers.push({ name:"Added" })
        	}

        },
        link: function(scope, element, attrs){ 
        	console.log("<sample-scope> link executing.")
        	element.addClass("sampleScopeLinked")
        }
    };
})

.directive('draggable', function(){
	return {
		link: function(scope, element, attrs){
			element.draggable();
			element.bind("click", function(){
				console.log("draggable item was clicked!")
			})
		}
	}
})

.directive('colors', function(){
	return {
        restrict: "AE",
		link: function(scope, element, attrs){
			element.css("background-color", "yellow")

			element.bind('mouseenter', function(){
				element.css("background-color", "red")
			})
			element.bind('mouseleave', function(){
				element.css("background-color", "green")
			})
		}
	}
})


.directive('myDialog', function() {
	return {
		restrict: 'E',
		transclude: true, // Controllers are available to the template/templateUrl
		template: '<div class="alert" ng-transclude></div>'
		// templateUrl: 'my-dialog.html'
	};
})

.directive( "addBookButton", [ 'Book', function( Book ) {
	return {
		restrict: "A",
		link: function( scope, element, attrs ) {
			element.bind( "click", function() {
				Book.addBook( { title: "Star Wars", author: "George Lucas" } );
			});
		}
	}
}])

.directive('smThread', [ function(){
	return {
		restrict: "E",
		template: "<div ng-include='getContent(x)'></div>",
		scope: { 
			myValue: "&myAttribute"
		},
		link: function ( scope, element, attrs ){
			// console.log(scope.myValue());
			// console.log(scope.myValue().thread);
			scope.x = scope.myValue().thread;
			
			scope.currentPage = 0;
		    scope.pageSize = 5;
		    scope.data = [];
		    scope.numberOfPages=function(){
			 	return Math.ceil(scope.data.length/scope.pageSize);                
		    }
		    // scope.numberOfPages();
			scope.posts = [
				{
					id: 1,
					rating: 5,
					title: "Post title"
				},
				{
					id: 1,
					rating: 5,
					title: "Post title"
				}

			];
			scope.data = scope.posts;
			// function getGeneralThreads(){
			// 	forumFactory.getGeneralThreads(function(posts){
			// 		$scope.posts = posts;
			// 		console.log(posts)
			// 		$scope.data = posts;
			// 	})
			// }

			// getGeneralThreads();

			scope.getContent = function(data){
				scope.sample = "sample!";
				return "/templates/thread.html";
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


















