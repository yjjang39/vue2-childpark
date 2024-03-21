<template>
    <div id="funny">
        <div class="funny_gnb">
            <h2>재미나라</h2>
            <ul>
                <li><a href="https://www.childrenpark.net/" target="_blank">놀이동산</a></li>
                <li><a href="https://www.kidsautopark.org/" target="_blank">키즈오토파크</a></li>
                <li><router-link to="/funny">놀이터</router-link></li>
                <li><a href="https://www.seoulchildrensmuseum.org/main.do" target="_blank">서울 상상나라</a></li>
                <!-- <li><router-link to="/funnyprogram">체험프로그램</router-link></li> -->
            </ul>
        </div>

        <div class="funny_wrap">
            <div class="btn_wrap">
                <button type="button" class="indoor_btn" :class="{ active: isIndoorActive }" @click="showIndoorContent">실내놀이터</button>
                <button type="button" class="child_btn" :class="{ active: !isIndoorActive }" @click="showChildContent">어린이놀이터</button>
            </div>
            <div class="funny_indoor" ref="indoorContent">
                <h3>실내놀이터</h3>

                <div class="introduction">
                    <h4><i class="material-icons">trip_origin</i>시설 소개</h4>
                    <ul>
                        <li>플레이짐, 볼풀, 낚시놀이, 클라이밍 등 다양한 놀이시설이 있는 어린이 전용 실내놀이터</li>
                        <li>네이버에서 '팔가강키즈카페' 검색 후 예약 시 편리하게 이용 가능</li>
                    </ul>
                </div>

                <div class="guide">
                    <h4><i class="material-icons">trip_origin</i>이용안내</h4>
                    <ul>
                        <li><span class="material-symbols-outlined">stat_0</span>운영시간 : 10:00 ~ 18:00</li>
                        <li><span class="material-symbols-outlined">stat_0</span>이용요금 : 어른 1,500원, 어린이 3,000원 *2시간 기준</li>
                        <li><span class="material-symbols-outlined">stat_0</span>접수방법 : 네이버 '팔각당키즈카페' 검색 후 사전예약 혹은 현장접수</li>
                    </ul>
                </div>

                <div class="guide_img_wrap">
                    <p>
                        <img ref="bigImg" src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/octagon_photo01.jpg" alt="실내놀이터 사진" id="big_img">
                    </p>

                    <p class="thumb_img">
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/octagon_photo01.jpg" alt="실내놀이터 사진1" @click="changeImage('https://www.sisul.or.kr/open_content/childrenpark/images/sub/octagon_photo01.jpg')">
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/octagon_photo02.jpg" alt="실내놀이터 사진2" @click="changeImage('https://www.sisul.or.kr/open_content/childrenpark/images/sub/octagon_photo02.jpg')">
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/octagon_photo03.jpg" alt="실내놀이터 사진3" @click="changeImage('https://www.sisul.or.kr/open_content/childrenpark/images/sub/octagon_photo03.jpg')">
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/octagon_photo04.jpg" alt="실내놀이터 사진4" @click="changeImage('https://www.sisul.or.kr/open_content/childrenpark/images/sub/octagon_photo04.jpg')">
                    </p>
                </div>

                <a href="https://map.naver.com/p/entry/place/1718677302?lng=127.08242307300964&lat=37.54982485007171&placePath=%2Fbooking%3Fac=0%26adm_lat=37.5424917%26adm_long=127.0856756%26debug=0%26lgl_lat=37.5424917%26lgl_long=127.0856756%26lgl_rcode=09215103%26ngn_country=KR%26nlu_query=%257B%2522nluQuery%2522%253A%2522%25ED%258C%2594%25EA%25B0%2581%25EB%258B%25B9%2520%25ED%2582%25A4%25EC%25A6%2588%25EC%25B9%25B4%25ED%258E%2598%2522%257D%26nqx_theme=%257B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522name%2522%253A%2522location%2522%252C%2522score%2522%253A%25220.682639%2522%257D%257D%257D%26query=%25ED%258C%2594%25EA%25B0%2581%25EB%258B%25B9%2520%25ED%2582%25A4%25EC%25A6%2588%25EC%25B9%25B4%25ED%258E%2598%26r1=%25EC%2584%259C%25EC%259A%25B8%25ED%258A%25B9%25EB%25B3%2584%25EC%258B%259C%26r2=%25EA%25B4%2591%25EC%25A7%2584%25EA%25B5%25AC%26r3=%25EA%25B5%25AC%25EC%259D%25981%25EB%258F%2599%26rcode=09215850%26rev=44%26sm=top_hty%26spq=1%26ssc=tab.nx.all%26where=nexearch%26deviceType=pc%26target=pc%26bizId=1718677302%26x=127.0856756%26y=37.5424917&c=15.00,0,0,0,dh" target="_blank">팔각당 실내놀이터 예약하기</a>
            </div>

            <div class="funny_child" ref="childContent">
                <h3>어린이놀이터</h3>

                <div class="free">
                    <h4><i class="material-icons">trip_origin</i>맘껏놀이터</h4>
                    <ul>
                        <li>기존의 '모험의나라 놀이터'가 '맘껏놀이터'로 2017년 7월 4일 새롭게 개장하였습니다.</li>
                        <li>'맘껏놀이터'는 놀이시설물에 의해 정형화되지 않고 어린이들이 맘껏 뛰어놀 수 있는 새로운 개념의 자유놀이 공간입니다. 다양하고 창의적으로 맘껏 즐겨보세요!</li>
                    </ul>

                    <div class="img_wrap">
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/playground13.jpg" alt="맘껏놀이터 사진1">
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/playground14.jpg" alt="맘껏놀이터 사진2">
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/playground15.jpg" alt="맘껏놀이터 사진3">
                    </div>
                </div>

                <div class="wiggle">
                    <h4><i class="material-icons">trip_origin</i>꿈틀꿈틀 놀이터</h4>
                    <ul>
                        <li>
                            꿈틀꿈틀 놀이터는 어린이의 꿈이 싹트는 곳, 꿈틀꿈틀 작은 움직임이 모여 큰 꿈으로 커나가는 열린 공간입니다. 장애에 대한 차별과 제한 없이 모든 어린이들이 마음껏 상상하고 활동하며 재미를 나누고, 기다리고 배려하며 건강하게 성장하길 바랍니다~
                        </li>
                        <li>
                            놀이시설 : 조합놀이대, 모래놀이벽, 유아조합놀이대, 그네, 시소 등
                        </li>
                    </ul>

                    <div class="img_wrap">
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/playground9.jpg" alt="꿈틀꿈틀 놀이터 사진1">
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/playground10.jpg" alt="꿈틀꿈틀 놀이터 사진2">
                    </div>
                </div>

                <div class="energy">
                    <h4><i class="material-icons">trip_origin</i>에너지 놀이터</h4>
                    <ul>
                        <li>운동과 놀이를 통해 발생된 전기 에너지의 사용 원리를 통하여 과학적 창의력 향상을 할 수 있는 교육을 연계한 차별화된 놀이터입니다.</li>
                        <li>놀이시설 : 에너지트리시소, 자가발전회전놀이대·시소 등 8개소</li>
                    </ul>

                    <div class="img_wrap">
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/playground16.jpg" alt="에너지놀이터 사진1">
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/playground17.jpg" alt="에너지놀이터 사진2">
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/playground18.jpg" alt="에너지놀이터 사진3">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() { 
        return {
            isIndoorActive: true
        }
    },
    methods: {
        changeImage(imgUrl){
            this.$refs.bigImg.src = imgUrl;
        },
        showIndoorContent() {
            this.isIndoorActive = true;
            // ref를 통해 실내놀이터 요소에 접근
            this.$refs.indoorContent.style.display = 'block';
            // 어린이놀이터는 숨김 처리
            this.$refs.childContent.style.display = 'none';
        },
        showChildContent() {
            this.isIndoorActive = false;
            // ref를 통해 실내놀이터 요소에 접근
            this.$refs.indoorContent.style.display = 'none';
            // 어린이놀이터는 숨김 처리
            this.$refs.childContent.style.display = 'block';
        },
    }
}
</script>

<style scoped>
#funny {
    margin: 50px auto 100px;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    gap: 100px;
}

.funny_gnb ul li:nth-child(3) {
    color: #34d330;
}


/* GNB */
.funny_gnb {
    padding-top: 30px;
    width: 120px;
}
.funny_gnb h2 {
    font-size: 24px;
    margin-bottom: 25px;
}
.funny_gnb h2:after {
    content: "";
    width: 70px;
    height: 3px;
    display: block;
    background: #0389d0;
    margin-top: 10px;
}
.funny_gnb li {
    margin-bottom: 10px;
    font-size: 17px;
    color: gray;
}
.funny_gnb li:hover {
    color: #34d330;
    /* font-weight: bold; */
}
.funny_gnb ul {
    margin-left: 8px;
}

/* CONTENT */
.funny_wrap {
    max-width: 980px;
    margin: auto;
}
i {
    color: #0389d0;
}
h3 {
    font-size: 28px;
    margin-bottom: 30px;
    padding-top: 10px;
    box-sizing: border-box;
}
h4 {
    font-size: 20px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 7px;
}

/* 탭메뉴 */
.btn_wrap {
    display: flex;
    justify-content: center;
    margin: 20px 0 50px;
}
.btn_wrap button {
    font-size: 20px;
    width: 50%;
    padding: 5px;
}
.indoor_btn {
    /* border: 1px solid #0389d0;
    color: #fff;
    background: #0389d0;
    border-bottom: #0389d0; */
    border: 1px solid #cbcbcb;
}
.child_btn {
    border: 1px solid #cbcbcb;
}

.funny_child {
    display: none;
}
.active {
    border: 1px solid #0389d0 ;
    color: #fff;
    background: #0389d0;
}

/* 실내놀이터 */
.introduction ul {
    background: #eee;
    padding: 20px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
}
.introduction {
    margin-bottom: 50px;
}
#big_img {
    width: 100%;
    margin-bottom: 20px;
}
.thumb_img img {
    width: 20%;
    margin-right: 10px;
    cursor: pointer;
}
.thumb_img {
    text-align: center;
}

/* 이용안내 */
.guide {
    margin-bottom: 50px;
}
.guide ul li {
    display: flex;
    align-content: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 7px;
    margin-top: 10px;
}
.guide ul li span {
    color: #005583;
}
.guide_img_wrap {
    /* display: flex; */
    margin-bottom: 50px;
}
/* .guide_img_wrap img {
    width: 100%;
} */
.funny_indoor a {
    display: block;
    border: 1.5px solid #0389d0;
    width: 250px;
    text-align: center;
    padding: 10px;
    font-size: 18px;
    margin: 0 auto;
    /* border-radius: 13px; */
}
.funny_indoor a:hover {
    color: #fff;
    background: #0389d0;
}

/* 어린이놀이터 */
.funny_child li {
    list-style: square;
    padding: 5px 10px;
    margin-left: 30px;
}
.funny_child ul {
    margin-bottom: 20px;
}
.funny_child div {
    margin-bottom: 50px;
}
.funny_child img {
    transition: all 0.2s linear;
}
.funny_child img:hover {
    transform: scale(1.3);
}

@media screen and (max-width: 1024px) {
    #funny {
        display: block;
    }
    .funny_gnb {
        text-align: center;
        margin-bottom: 80px;
        width: 100%;
    }
    .funny_gnb h2:after {
        margin: 10px auto;
    }
    .funny_gnb ul {
        display: flex;
        justify-content: center;
        gap: 70px;
    }

}
@media screen and (max-width: 767px) {
    .funny_gnb ul {
        gap: 40px;
        flex-wrap: wrap;
        width: 400px;
    }
    .img_wrap {
        text-align: center;
    }
}
</style>