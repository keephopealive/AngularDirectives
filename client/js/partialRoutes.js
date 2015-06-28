angular.module('app')
.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: '/partials/main.partial.html'
    })
    .when('/forums', {
        templateUrl: '/partials/forums.partial.html',
        controller: 'ForumController',
        controllerAs: 'formCtrl'
    })
    .when('/loginReg', {
        templateUrl: '/partials/loginReg.partial.html'
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