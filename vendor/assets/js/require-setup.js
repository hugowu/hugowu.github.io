// file: js/require-setup.js
//
// Declare this variable before loading RequireJS JavaScript library
// To config RequireJS after it’s loaded, pass the below object into require.config();

var require = {
    // map: {
    //     '*': {
    //         'css': '//cdn.bootcss.com/require-css/0.1.8/css.min.js'
    //     }
    // },
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
        //"bootstrap" : { "deps" :['jquery','css!vendor/bootstrap-3.3.7/dist/css/bootstrap.min.css'] }
    },
    paths: {
        "jquery" : ["//ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.4.min","//apps.bdimg.com/libs/jquery/2.1.4/jquery.min","vendor/assets/js/jquery.min"],
        "bootstrap" :  ["//ajax.aspnetcdn.com/ajax/bootstrap/3.3.7/bootstrap.min","//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min","vendor/bootstrap-3.3.7/dist/js/bootstrap.min"],
        //"workaround" : "vendor/assets/js/ie10-viewport-bug-workaround"
    }
};
