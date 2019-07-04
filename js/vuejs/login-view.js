Vue.component("login-view", {
    template: `
<div class="login_wrap">
    <div class="pos_fix">
        <div class="modal_wrap">
            <div class="title">
                <h3>LOGIN</h3>
                <div class="line">line</div>
            </div>

            <form>
                <p>ID</p>
                <input type="text" name="ID" v-model="sEmail">
                <br>
                <p class="margin-top">PW</p>
                <input type="text" name="PW" v-model="sPassword">
                <input class="enter" type="button" name="enter" value="ENTER" @click="login()">
            </form>
        </div>
    </div>
</div>`,
    data() {
        return {
            sEmail : "",
            sPassword: "",
        }
    },
    created: function() {

    },
    methods: {
        login() {
            $.ajax({
                type: "post",
                url: "/admin/login",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify({
                    "email": this.sEmail,
                    "password": this.sPassword
                }),
                success: function (result) {
                    if( result.message !== "2222") {
                        return;
                    }
                    Cookies.set("JWTCookie", result.token, {expires: 1, path: ''});
                    this.$emit("login-success");
                }.bind(this),
                error: function (result) {
                    alert("비 정상적인 접근입니다.");
                }
            })
        }
    }
});