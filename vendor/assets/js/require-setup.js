// file: js/require-setup.js
//
// Declare this variable before loading RequireJS JavaScript library
// To config RequireJS after it’s loaded, pass the below object into require.config();

var require = {
     //baseUrl:'.',
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },
    paths: {
        "jquery" : "//cdn.bootcss.com/jquery/2.1.4/jquery.min1",
        "bootstrap" :  "//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min1",
        "workaround" : "vendor/assets/js/ie10-viewport-bug-workaround"
    }
};
