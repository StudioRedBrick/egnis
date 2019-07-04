Vue.component("subs-list", {
    template: `
<div class="list_wrap">
    <div class="firstwrap">
        <h3>SUBSCRIBER LIST</h3>
        <ul >
            <!--메일 주소 가져올때 뒤에 , 하나씩 붙여서 넣어주세요-->
            <li v-for="subs, index in subsList" :key="index"><p>{{subs.Email}},</p><input class="_subsId" type="checkbox" :value="subs.Id"></li>
        </ul>
        <input @click="deleteSubs()" class="buttons delete_btn" type="button" value="DELETE" name="delete">
    </div>
    <div class="secwrap clearfix">
        <h3>GET All LIST</h3>
        <textarea readonly name="textbox" class="txtbox"></textarea>
        <input class="buttons floating getlist" type="button" name="listup" value="GET LIST">
        <input class="buttons floating clearlist" type="button" name="clearlist" value="CLEAR">
    </div>
</div>`,
    data() {
        return {
            subsList: [],
        }
    },
    created: function() {
        $.ajax({
            type: "get",
            url: "/subscriber/all",
            dataType:"json",
            success: function(result) {
                this.subsList = result["subs-list"];
                console.log("Completed loading the Subscriber List. ");
            }.bind(this)
        });
    },
    methods: {
        deleteSubs() {
        }
    }
});