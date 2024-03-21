<template>
    <div id="login">
        <h2>로그인</h2>
        <div class="id_pwd">
            <p>
                <label for="uid">아이디</label><br>
                <input type="text" id="uid">
            </p>

            <p>
                <label for="upwd">비밀번호</label><br>
                <input type="password" id="upwd">
            </p>
        </div>

        <div class="save_id_wrap">
            <input type="checkbox" id="save_id">
            <label for="save_id">아이디 저장</label>
        </div>

        <div class="find">
            <button type="button" class="find_id">아이디 찾기</button> 
            <button type="button" class="find_pwd">비밀번호 찾기</button>
        </div>

        <button type="submit" class="login_btn">로그인</button>

        <p>SNS 간편 로그인</p>
        <!-- <ul>
            <li><button type="button" class="kakao">카카오 로그인</button></li>
            <li><button type="button" class="naver">네이버 로그인</button></li>
            <li><router-link to="/login/naver">네이버로그인</router-link></li>
        </ul> -->
        <div id="naverIdLogin">
            <a id="naverIdLogin_loginButton" href="#" role="button">
                <img src="https://static.nid.naver.com/oauth/big_g.PNG" width="320" />
                <!-- 네이버 로그인 -->
            </a>
        </div>

        <!-- <div class="googleLogin">
            <div v-on:click="GoogleLoginBtn">구글 로그인</div>
            <div id="google-login" style="display: none"></div>
        </div> -->
        
        <div class="join">
            <p class="join_txt1">아직 회원이 아니신가요?</p>
            <p class="join_txt2">회원이 되시면 홈페이지에서 제공하는 온라인 서비스를 이용하실 수 있습니다.</p>
            <button type="button" class="join_btn">회원가입</button>
        </div>
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
        this.naverLogin = new window.naver.LoginWithNaverId({
				clientId: "_hTGcCQe4JQxWiWYZruD",
				callbackUrl: 'http://localhost:8080/park/',
				isPopup: true,
				loginButton: {color: "green", type: 3, height: 60}
        })
        
        this.naverLogin.init()

        /* (4-1) 임의의 링크를 설정해줄 필요가 있는 경우 */
        // $("#gnbLogin").attr("href", naverLogin.generateAuthorizeUrl());

        document.getElementById('naverIdLogin_loginButton').addEventListener('click', () => {
            this.naverLogin.getLoginStatus((status) => {
                if(status) {
                    console.log(this.naverLogin.user.getEmail())
                    console.log(this.naverLogin.user.getNickName())
                    console.log(this.naverLogin.user.getGender())
                    this.email = this.naverLogin.user.getEmail()
                }
            })
        })
        
    },
    unmounted() {},
    methods: {
        naverLogout(event) {
            event.preventDefault()
            this.naverLogin.logout()
        },
        GoogleLoginBtn: function(){
            var self = this;

            window.gapi.signin2.render('google-login', {
                scope: 'profile email',
                width: 240,
                height: 50,
                longtitle: true,
                theme: 'dark',
                onsuccess: this.GoogleLoginSuccess,
                onfailure: this.GoogleLoginFailure,
            });

            setTimeout(function () {
                if (!self.googleLoginCheck) {
                const auth = window.gapi.auth2.getAuthInstance();
                auth.isSignedIn.get();
                document.querySelector('.abcRioButton').click();
                }
            }, 1500)

            },

        async GoogleLoginSuccess(googleUser) {
            const googleEmail = googleUser.getBasicProfile().getEmail();
            if (googleEmail !== 'undefined') {
                console.log(googleEmail);
            }
        },

        //구글 로그인 콜백함수 (실패)
        GoogleLoginFailure(error) {
            console.log(error);
        },
    }

}
</script>

<style>
#naverIdLogin {
    text-align: center;
    margin: 20px 0 50px;
}




#login {
    width: 600px;
    margin: 80px auto;
}
.id_pwd {
    margin: 55px auto 0;
}
.id_pwd input {
    border: none;
    border-bottom: 1px solid gray;
    width: 600px;
    height: 30px;
    outline: none;
    margin-bottom: 20px;
}
.id_pwd input:hover, .id_pwd input:focus {
    border-bottom: 1px solid #0389d0;
}
.id_pwd label {
    color: gray;
}
.save_id_wrap {
    margin-bottom: 50px;
}
.find button {
    font-size: 18px;
}
.find {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}
.find_id:after {
    content: "|";
    margin: 0 15px;
    color: gray;
}
.find_id:hover, .find_pwd:hover {
    color: #0389d0;
}
.login_btn {
    background: #000;
    width: 600px;
    height: 50px;
    border-radius: 5px;
    font-size: 20px;
    color: #fff;
    margin-bottom: 40px;
}
.kakao {
    border: 1px solid gray;
    width: 600px;
    height: 50px;
    border-radius: 5px;
    font-size: 20px;
    margin: 10px 0;
    color: gray;
}
.naver {
    border: 1px solid gray;
    width: 600px;
    height: 50px;
    border-radius: 5px;
    font-size: 20px;
    margin-bottom: 50px;
    color: gray;
}
.join {
    background: #f5f5f5;
    padding: 30px;
    text-align: center;
}
.join_txt1 {
    font-size: 18px;
    margin-bottom: 5px;
}
.join_txt2 {
    font-size: 13px;
    color: #aaa;
    margin-bottom: 20px;
}
.join_btn {
    background: #fff;
    border: 1px solid #cbcbcb;
    border-radius: 3px;
    width: 80%;
    height: 40px;
}

@media screen and (max-width: 767px) {
    #login {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .id_pwd input {
        width: 300px;
    }
    .login_btn {
        width: 300px;
    }
    .kakao {
        width: 300px;
    }
    .naver {
        width: 400px;
    }
    .join_btn {
        width: 300px;
    }
    .join {
        width: 300px;
    }
}
</style>