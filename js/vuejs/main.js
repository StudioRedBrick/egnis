new Vue({
    el: "#app",
    data() {
        return {
            isLoggedIn: false,
        }
    },
    created : function() {
        console.log("Vue component created");

        var jwtCookie = Cookies.get("JWTCookie");
        if( typeof jwtCookie == 'undefined' || jwtCookie == '') {
            console.log("login required")
            return ;
        }
        this.isLoggedIn = true;
    },
    methods: {
        doLogin: function() {
            this.isLoggedIn = true;
        }
    }
})