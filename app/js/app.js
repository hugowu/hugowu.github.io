// File: /js/app.js

// 'jquery' returns the jQuery object into '$'
//
// 'bootstrap' does not return an object. Must appear at the end

//
// require(['jquery', 'bootstrap','workaround'], function($){
//
//     // DOM ready
//     $(function(){
//
//         // Twitter Bootstrap 3 carousel plugin
//         //$("#element").carousel();
//     });
// });


//Later
require(['jquery', 'bootstrap','workaround'], function ($) {

}, function (err) {
    //jquery
    var failedId = err.requireModules && err.requireModules[0];
    if (failedId === 'jquery') {
        requirejs.undef(failedId);
        requirejs.config({
            paths: {
                "jquery" : "vendor/assets/js/jquery.min"
            }
        });
        require(['jquery'], function () {});
    } else {

    }
    //bootstrap
    var failedId = err.requireModules && err.requireModules[1];
    if (failedId === 'bootstrap') {
        requirejs.undef(failedId);
        requirejs.config({
            paths: {
                "bootstrap" :  "vendor/bootstrap-3.3.7/dist/js/bootstrap.min"
            }
        });
        require(['bootstrap'], function () {});
    } else {

    }
    
});