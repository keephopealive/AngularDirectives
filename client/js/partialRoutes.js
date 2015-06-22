app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: '/partials/main.partial.html',
        controller: "MainController",
        controllerAs: "main"
    })
    .when('/forums', {
        templateUrl: '/partials/forums.partial.html',
        controller: 'ForumController',
        controllerAs: 'formCtrl'
    })
    .when('/post/:id', {
        templateUrl: '/partials/post.partial.html',
        controller: 'PostController',
        controllerAs: 'postCtrl'
    })
    .otherwise({
        redirectTo: '/',
    });
});