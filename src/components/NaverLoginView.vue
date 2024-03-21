<template>
    <div>
        <div id="naverIdLogin">
            <a id="naverIdLogin_loginButton" href="#" role="button">
                <img src="https://static.nid.naver.com/oauth/big_g.PNG" width="320" />
            </a>
        </div>
        <button class="btn btn-danger" @click="naverLogout($event)">
            로그아웃
        </button>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            email: '',
            naverLogin: null
        }
    },
    setup() {},
    created() {},
    mounted() {
        this.naverlogin = new window.naver.LoginWithNaverId({
				clientId: "_hTGcCQe4JQxWiWYZruD",
				callbackUrl: 'http://localhost:8080/park/login',
				isPopup: true,
				loginButton: {color: "green", type: 3, height: 60}
        })
        
        this.naverLogin.init()

        /* (4-1) 임의의 링크를 설정해줄 필요가 있는 경우 */
        // $("#gnbLogin").attr("href", naverLogin.generateAuthorizeUrl());

        this.naverLogin.getLoginStatus((status) => {
            if(status) {
                console.log(this.naverLogin.user.getEmail())
                console.log(this.naverLogin.user.getNickName())
                console.log(this.naverLogin.user.getGender())
                this.email = this.naverLogin.user.getEmail()
            }
        })
    },
    unmounted() {},
    methods: {
        naverLogout(event) {
            event.preventDefault()
            this.naverLogin.logout()
        }
    }


}
</script>

<style>

</style>