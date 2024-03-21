<template>
    <div id="home">
        <!-- <div class="main_ad">
            <h2 class="hide">메인 광고</h2>
            <ul>
                <li class="main_ad1"><a href="#none"><img src="../assets/main0.jpg" alt="서울어린이대공원 겨울방학 동물학교 헬로우 몽키 패밀리 프로그램 접수"></a></li>
                <li class="main_ad2"><a href="#none"><img src="../assets/main2.jpg" alt="꼬마동물마을과 함께하는 행동풍부화 프로그램 영상 보러가기"></a></li>
                <li class="main_ad3"><a href="#none"><img src="../assets/main3.jpg" alt="VR로 만나는 서울어린이대공원 보러가기"></a></li>
            </ul>
            <button type="button" class="prev"><img src="../assets/prev.png" alt="이전"></button>
            <button type="button" class="next"><img src="../assets/next.png" alt="다음"></button>
        </div> -->
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide><img src="../assets/main0.jpg" alt="서울어린이대공원 사진전 '공원의 사계' 개최" class="main_img1"></swiper-slide>
            <swiper-slide><img src="../assets/main2.jpg" alt="꼬마동물마을과 함께하는 행동풍부화 프로그램 영상 보러가기" class="main_img2"></swiper-slide>
            <swiper-slide><img src="../assets/main3.jpg" alt="VR로 만나는 서울어린이대공원 보러가기" class="main_img3"></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>

        <div class="time">
            <img src="../assets/clock.png" alt="">
            <h2>이용시간</h2>
            <div class="time_txt">
                <p>오전 5시 ~ 오후 10시<span class="norest">(연중무휴)</span></p>
                <p>동물원 관람시간 10:00~17:00</p>
            </div>
        </div>

        <div class="shortcut">
            <h2 class="hide">바로가기 메뉴</h2>
            <ul>
                <li><router-link to="/funny"><img src="../assets/animal.png" alt="">동물나라</router-link></li>
                <li><router-link to="/"><img src="../assets/nature.png" alt="">식물나라</router-link></li>
                <li><router-link to="/citizen"><img src="../assets/funny2.png" alt="">재미나라</router-link></li>
                <li><router-link to="/use"><img src="../assets/guide.png" alt="">이용안내</router-link></li>
                <li><a href="https://www.sisul.or.kr/open_content/childrenpark/map_ko.jsp" target="_blank"><img src="../assets/map.png" alt="">공원지도</a></li>
                <li><router-link to="/money"><img src="../assets/money.png" alt="">이용요금</router-link></li>
                <li><router-link to="/parking"><img src="../assets/parking.png" alt="">주차안내</router-link></li>
                <li><router-link to="/location"><img src="../assets/road.png" alt="">찾아오시는길</router-link></li>
            </ul>
        </div>

        <div class="info_notice_wrap">
            <div class="info_img">
                <h2 class="hide">안내 이미지</h2>
                <ul>
                    <li><a href="#none"><img src="../assets/info_img1.jpg" alt="서울어린이대공원 출입금지대상 안내"></a></li>
                    <!-- <li><a href="#none"><img src="../assets/info_img2.jpg" alt="서울어린이대공원 찾아오시는 길"></a></li> -->
                </ul>
                <!-- <button type="button" class="btn1">1</button>
                <button type="button" class="btn2">2</button> -->
            </div>

            <div class="notice">
                <h2>안내사항</h2>
                <ul>
                    <li><a href="#none">서울어린이대공원「도심공원 숲속무대(실외) 공공행사공연 (문화예술) 현장전문가 육성」참여자 모집 공고</a></li>
                    <li><a href="#none">[안내] 2023 대한민국 어린이박람회 서울어린이대공원 부스 운영 (12/8(금)~9(토))</a></li>
                    <li><a href="#none">서울시설공단「언택트 시대 동행(동물과 인간 모두 행복한 동물원) 전문가」참여자 추가모집 공고</a></li>
                    <li><a href="#none">[안내] 11월 월간대공원 및 숲 속 도서관에 참여하세요!</a></li>
                </ul>
                <a href="#none" class="notice_more">더보기</a>
            </div>
        </div>

        <!-- <div class="money_weather_wrap">
            <div class="money">
                <h2>이용 요금</h2>
                <p>공원입장료 : 무료</p>
                <p>재미나라 이용요금 <span><a href="#none">요금표 바로가기</a></span></p>
            </div>

            <div class="weather">
                <h2>어린이대공원 날씨</h2>
                <p>4도씨 해</p>
                <p>맑음</p>
                <p>최고 7도씨 / 최저 영하 1도씨</p>
            </div>
        </div> -->

        <div class="program">
            <h2>프로그램</h2>
            <ul>
                <li><a href="#none"><img src="../assets/program1.jpg" alt=""><p>[동물학교] 코끼리 행동풍부화</p></a></li>
                <li><a href="#none"><img src="../assets/program2.jpg" alt=""><p>[서울어린이대공원] 체험프로그램 SNS 후기 이벤트</p></a></li>
                <li><a href="#none"><img src="../assets/program3.gif" alt=""><p>[동물학교] 서울어린이대공원 동물원 '코리와 과일가게'</p></a></li>
                <li><a href="#none"><img src="../assets/program4.jpg" alt=""><p>[자연생태] 체험교실 '봄을 기다리는 동식물'</p></a></li>
                <li><a href="#none"><img src="../assets/program5.jpg" alt=""><p>[자연생태] 체험교실 '볏짚 빗자루 만들기'</p></a></li>
                <li><a href="#none"><img src="../assets/program6.jpg" alt=""><p>[동물학교] 코리 혼자하는 올림픽</p></a></li>
            </ul>
            <button type="button" class="program_prev">&lt;</button>
            <button type="button" class="program_next">&gt;</button>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

// import Vue from "vue";
// import VueAwesomeSwiper from "vue-awesome-swiper";
// Vue.use(VueAwesomeSwiper);

export default {
    name: 'home',
    // title: 'Loop mode / Infinite loop',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                speed: 500,
                loop: true,
                touchRatio: 0.2,
                observer: true,
                observeParents: true,
            },
            currentSlideIndex: 0,
        }
    }
}
</script>

<style scoped>

#home{
    margin: 0 auto;
}

/* 메인 광고 */
.main_ad {
    position: relative;
}
.main_ad ul {
    max-width: 100%;
}
.main_ad img {
    max-width: 100%;
}
.main_ad2, .main_ad3 {
    display: none;
}
.prev {
    width: 4%;
    position: absolute;
    top: 46%;
    left: 25px;
}
.next {
    width: 4%;
    position: absolute;
    top: 46%;
    right: 25px;
}

.main_img1, .main_img2, .main_img3 {
    width: 100%;
}
.swiper-button-prev, .swiper-button-next {
    color: #000;
}
.swiper-pagination {
    --swiper-theme-color: #fff;
}

/* 이용시간 */
.time {
    background: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    margin-bottom: 60px;
}
.time img {
    width: 40px;
}
.time h2 {
    margin: 0 40px 0 10px; 
    font-size: 20px;
    font-weight: normal;
}
.time_txt {
    text-align: center;
}
.time_txt p:first-child {
    font-weight: bold;
    font-size: 18px;
}
.time_txt p:last-child {
    margin-top: 5px;
    font-size: 16px;
    color: gray;
}

/* 바로가기 메뉴 */
.shortcut {
    margin-bottom: 100px;
}
.shortcut img {
    width: 85px;
    display: block;
    margin-bottom: 15px;
}
.shortcut ul {
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 70px;
    text-align: center;
    margin: auto
}

/* 서브이미지+안내사항 */
.info_img img{
    max-width: 550px;
}
/* .info_img ul li:last-child {
    display: none;
} */
.info_img {
    position: relative;
}
.btn1 {
    width: 7px;
    height: 7px;
    background: #000;
    border-radius: 50%;
    text-indent: -9999px;
    position: absolute;
    bottom: 4%;
    left: 47%;
}
.btn2 {
    width: 7px;
    height: 7px;
    border: 1px solid #000;
    border-radius: 50%;
    text-indent: -9999px;
    position: absolute;
    bottom: 4%;
    left: 50%;
    box-sizing: border-box;
}
.info_notice_wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    max-width: 1200px;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 100px;
}
.notice {
    max-width: 550px;
    border: 1px solid #e9e9e9;
    height: 271px;
    box-sizing: border-box;
    padding: 40px 20px 30px;
    position: relative;
}
.notice li {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 5px 2px;
}
.notice li:hover {
    text-decoration: underline;
}
.notice h2 {
    margin-bottom: 20px;
}
.notice_more {
    position: absolute;
    right: 30px;
    bottom: 30px;
    text-decoration: underline;
    color: gray;
}

/* 이용요금+날씨 */
/* .money_weather_wrap {
    width: 1200px;
    display: flex;
    margin: 0 auto 50px;
} */

/* 프로그램 */
.program {
    max-width: 1200px;
    margin: 0 auto 120px;
    position: relative;
}
.program img {
    width: 350px;
    height: 195px;
    /* object-fit: cover; */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.program ul {
    display: flex;
    width: 1110px;
    overflow: hidden;
    gap: 20px;
    margin: 0 auto;
    padding-left: 10px;
    box-sizing: border-box;
}
.program h2 {
    margin-bottom: 20px;
    text-align: center;
}
.program li {
    border: 1px solid #e9e9e9;
    border-radius: 10px;
    height: 300px;
}
.program p {
    font-size: 18px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 350px;
    padding: 55px 30px 25px;
    box-sizing: border-box;
}
.program_prev {
    width: 30px;
    height: 30px;
    background: #e9e9e9;
    border-radius: 50%;
    font-size: 20px;
    color: gray;
    position: absolute;
    top: 185px;
    left: 10px;
}
.program_next {
    width: 30px;
    height: 30px;
    background: #e9e9e9;
    border-radius: 50%;
    font-size: 20px;    
    color: gray;
    position: absolute;
    top: 185px;
    right: 10px;
}

@media screen and (max-width: 1220px){
    .info_img img{
        max-width: 450px;
    }
    .notice {
        max-width: 450px;
    }
    .info_notice_wrap {
        gap: 50px;
    }
    .program ul {
        width: 740px;
    }
    .shortcut ul {
        max-width: 700px;
        gap: 80px;
    }
}

@media screen and (max-width: 767px){
    .info_img img{
        max-width: 350px;
    }
    .notice {
        max-width: 350px;
    }
    .time h2 {
        margin: 0 10px 0 10px; 
        font-size: 18px;
        font-weight: normal;
        width: 80px;
    }
    .program ul {
        width: 370px;
    }
    .norest {
        display: block;
    }
    /* .shortcut ul {
        gap: 100px;
    } */
}
</style>
