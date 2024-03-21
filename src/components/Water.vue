<template>
    <div id="water">
		<div class="use_gnb">
			<h2>운영안내</h2>
			<ul>
                <li><router-link to="/use">이용안내</router-link></li>
                <li><router-link to="/money">이용요금</router-link></li>
                <li><router-link to="/water">수경시설</router-link></li>
                <li><a href="https://www.sisul.or.kr/open_content/childrenpark/map_ko.jsp" target="_blank">공원지도</a></li>
                <li><router-link to="/parking">주차안내</router-link></li>
                <li><router-link to="/location">찾아오시는길</router-link></li>
			</ul>
		</div>

        <div class="water_content_wrap">
            <div class="btn_wrap">
                <button type="button" class="music_btn" :class="{ active: isMusicActive }" @click="showMusicContent">음악분수</button>
                <button type="button" class="rainbow_btn" :class="{ active: isRainbowActive }" @click="showRainbowContent">무지개분수</button>
                <button type="button" class="waterpark_btn" :class="{ active: isWaterparkActive }" @click="showWaterparkContent">물놀이장</button>
            </div>

            <div class="music" ref="musicContent">
                <h3>음악분수</h3>

                <div class="music_info">
                    <h4><i class="material-icons">trip_origin</i>음악분수 소개</h4>
                    <div class="music_info_txt_wrap">
                        <p><span class="material-symbols-outlined">stat_0</span>정문에 재조성된 음악분수대는 어린이대공원의 야심작입니다. 수조 가운데서 물줄기가 솟아 나오는 일반적인 분수에서, 음악에 맞춰 물줄기가 자유롭게 움직이며 춤을 추는 ‘음악분수’로 바뀌었습니다. 화려한 조명을 이용해 아름다운 선율과 빛의 쇼가 어우러지는 분수입니다.</p>
                        <p><span class="material-symbols-outlined">stat_0</span>※ 이용자의 안전과 원활한 분수가동을 위하여 협조하여 주시기 바랍니다.</p>
                        <ul>
                            <li>분수대에 이물질을 투입하지 마십시오 (시설물 파손 및 오염우려)</li>
                            <li>분수대 안전휀스를 넘지 마십시오 (안전사고 발생우려)</li>
                        </ul>
                    </div>

                    <div class="music_img_wrap">
                        <p>
                            <img ref="bigImg" src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/zone_photo37.jpg" id="big_img" alt="음악분수 체험사진">
                        </p>

                        <p class="thumb_img">
                            <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/zone_photo37.jpg" alt="음악분수 체험사진1" @click="changeImage('https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/zone_photo37.jpg')">
                            <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/zone_photo38.jpg" alt="음악분수 체험사진2" @click="changeImage('https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/zone_photo38.jpg')">
                            <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/zone_photo39.jpg" alt="음악분수 체험사진3" @click="changeImage('https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/zone_photo39.jpg')">
                        </p>
                    </div>
                </div>

                <div class="music_term">
                    <h4><i class="material-icons">trip_origin</i>운영기간</h4>
                    <ul>
                        <li><span class="material-symbols-outlined">stat_0</span>분수가동기간 : 4월 ~ 10월</li>
                        <li><span class="material-symbols-outlined">stat_0</span>분수대는 30분(음악분수 20분, 일반분수 10분) 가동, 30분 휴식</li>
                        <li><span class="material-symbols-outlined">stat_0</span>우천, 강풍, 행사시 탄력적으로 운영</li>
                        <li><span class="material-symbols-outlined">stat_0</span>매주 화요일 청소 및 정기점검으로 가동 중지</li>
                    </ul>
                </div>

                <div class="music_time">
                    <h4><i class="material-icons">trip_origin</i>음악분수 가동시간</h4>
                    <ul>
                        <li><span class="material-symbols-outlined">stat_0</span>정문 음악분수 및 후문 무지개분수는 매주 화요일 청소 및 정비로 가동중지 됩니다.</li>
                        <li><span class="material-symbols-outlined">stat_0</span>우천, 강풍, 행사시 운영이 중단될 수 있으며 공연이 있을 경우 음악소리를 줄여서 운영할 수 있습니다.</li>
                        <li><span class="material-symbols-outlined">stat_0</span>음악분수 가동시간 및 선곡은 가동상황에 따라 달라질 수 있습니다.</li>
                        <table class="data" width="100%" summary="분수의 운영을 회차, 가동시간, 운영으로 나누어 정리한 표">
							<caption>분수 운영 시간표</caption>
							<thead>
								<tr>
									<th scope="col">회차</th>
									<th scope="col">가동시간</th>
									<th scope="col">운영</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>10:00~10:30(음악20분/일반10분)</td>
									<td>공휴일</td>
								</tr>
								<tr>
									<td>2</td>
									<td>12:00~12:30(음악20분/일반10분)</td>
									<td rowspan="6">평일
									및 
									공휴일</td>
								</tr>
								<tr>
									<td>3</td>
									<td>14:00~14:30(음악20분/일반10분)</td>
								</tr>
								<tr>
									<td>4</td>
									<td>16:00~16:30(음악20분/일반10분)</td>
								</tr>
								<tr>
									<td>5</td>
									<td>17:00~17:30(음악20분/일반10분)</td>
								</tr>
								<tr>
									<td>6</td>
									<td>18:00~18:30(음악20분/일반10분)</td>
								</tr>
								<tr>
									<td>7</td>
									<td>19:00~19:30(음악20분/일반10분)</td>
								</tr>
							</tbody>
						</table>
                    </ul>
                </div>
            </div>

            <div class="rainbow" ref="rainbowContent">
                <h3>무지개분수</h3>
                
                <div class="rainbow_info">
                    <h4><i class="material-icons">trip_origin</i>운영기간</h4>
                    <ul>
                        <li><span class="material-symbols-outlined">stat_0</span>4월 ~ 10월</li>
                        <li>(매시각 50분씩 가동되며 우천 및 강풍시 중단될 수 있습니다.)</li>
                    </ul>
                    <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/zone_photo58.jpg" alt="무지개분수 체험사진">
                </div>
            </div>

            <div class="waterpark" ref="waterparkContent">
                <h3>물놀이장</h3>

                <div class="waterpark_info">
                    <h4><i class="material-icons">trip_origin</i>물놀이장 안내</h4>
                    <ul>
                        <li><span class="material-symbols-outlined">stat_0</span>운영기간 : '22.7.26.(화) ~ 8.15.(월) *운영시간 : 12시 ~ 17시</li>
                        <li><span class="material-symbols-outlined">stat_0</span>운영장소 : 서울어린이대공원 물놀이장(새싹마루 인근)</li>
                        <li>*시설정비 위하여 매주 월요일 및 우천 등 기상 악화 시 미운영(단 8.15(월) 정상운영)</li>
                    </ul>
                    <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/zone_photo40.jpg" alt="물놀이장 체험사진">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        isMusicActive: true,
        isRainbowActive: false,
        isWaterparkActive: false,

        }
    },
    methods: {
        changeImage(imgUrl){
            this.$refs.bigImg.src = imgUrl;
        },
        showMusicContent() {
            this.isMusicActive = true;
            this.isRainbowActive = false;
            this.isWaterparkActive = false;
            this.$refs.musicContent.style.display = 'block';
            this.$refs.rainbowContent.style.display = 'none';
            this.$refs.waterparkContent.style.display = 'none';
        },
        showRainbowContent() {
            this.isMusicActive = false;
            this.isRainbowActive = true;
            this.isWaterparkActive = false;
            this.$refs.musicContent.style.display = 'none';
            this.$refs.rainbowContent.style.display = 'block';
            this.$refs.waterparkContent.style.display = 'none';
        },
        showWaterparkContent() {
            this.isMusicActive = false;
            this.isRainbowActive = false;
            this.isWaterparkActive = true;
            this.$refs.musicContent.style.display = 'none';
            this.$refs.rainbowContent.style.display = 'none';
            this.$refs.waterparkContent.style.display = 'block';
        },

    }
}
</script>

<style scoped>
#water {
    margin: 50px auto 100px;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    gap: 100px;
}

.use_gnb ul li:nth-child(3) {
    color: #34d330;
}


/* GNB */
.use_gnb {
    padding-top: 30px;
    width: 120px;
}
.use_gnb h2 {
    font-size: 24px;
    margin-bottom: 25px;
}
.use_gnb h2:after {
    content: "";
    width: 70px;
    height: 3px;
    display: block;
    background: #0389d0;
    margin-top: 10px;
}
.use_gnb li {
    margin-bottom: 10px;
    font-size: 17px;
    color: gray;
}
.use_gnb li:hover {
    color: #34d330;
    /* font-weight: bold; */
}
.use_gnb ul {
    margin-left: 8px;
}

/* CONTENT */
.water_content_wrap {
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
    width: 33%;
    padding: 5px;
    border: 1px solid #cbcbcb;
}
/* .music_btn {
    border-right: 1px solid #0389d0;
    color: #fff;
    background: #0389d0;
    border-bottom: #0389d0;
}
.rainbow_btn {
    border-bottom: 1px solid #cbcbcb;
    border-right: 1px solid #cbcbcb;
}
.waterpark_btn {
    border-bottom: 1px solid #cbcbcb;
} */

.rainbow, .waterpark {
    display: none;
    width: 980px;
}
.active {
    border: 1px solid #0389d0 ;
    color: #fff;
    background: #0389d0;
}


/* 음악분수 */
.music_info_txt_wrap {
    background: #eee;
    padding: 20px;
    /* text-align: center; */
    /* font-weight: 600; */
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
}
.music_info_txt_wrap p {
    display: flex;
    align-content: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 7px;
    margin-top: 10px;
}
.music_info_txt_wrap p:nth-child(2) {
    display: flex;
    align-content: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 7px;
    margin-top: 10px;
    color: red;
    font-weight: 600;
}
.music_info_txt_wrap span {
    color: #005583;
}
.music_info_txt_wrap li {
    margin-left: 55px;
    list-style: square;
}
.music_info_txt_wrap {
    margin-bottom: 50px;
}
.music_img_wrap {
    /* margin: auto; */
    text-align: center;
}
img {
    width: 100%;
}
.music_info {
    margin: 0 auto 70px;
}
/* 운영기간 */
.music_term li {
    display: flex;
    align-content: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 7px;
    margin-top: 10px;
}
.music_term {
    margin-bottom: 70px;
}

/* 가동시간 */
.music_time li {
    display: flex;
    align-content: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 7px;
    margin-top: 10px;
}
caption {
    font-size: 18px;
    margin: 10px 0 5px;
}
table {
    text-align: center;
}
td, th {
    padding: 10px 20px;
}
td:first-child {
    border-left: none;
}

/* 무지개분수 */
.rainbow_info li:first-child {
    display: flex;
    align-content: center;
    margin-left: 10px;
    /* font-size: 17px; */
    /* margin-bottom: 2px; */
    margin-top: 10px;
}
.rainbow_info li:last-child {
    margin-left: 35px;
    margin-bottom: 30px;
    font-size: 12px;
    color: gray;
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

/* 물놀이장 */
.waterpark_info li:first-child {
    display: flex;
    align-content: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 7px;
    margin-top: 10px;
}
.waterpark_info li:nth-child(2) {
    display: flex;
    align-content: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 7px;
    margin-top: 10px;
}
.waterpark_info li:last-child {
    margin-left: 35px;
    margin-bottom: 30px;
    font-size: 12px;
    color: gray;
    margin-bottom: 30px;
}


@media screen and (max-width: 1024px) {
    #water{
        display: block;
    }
    .use_gnb {
        text-align: center;
        margin-bottom: 80px;
        width: 100%;
    }
    .use_gnb h2:after {
        margin: 10px auto;
    }
    .use_gnb ul {
        display: flex;
        justify-content: center;
        gap: 70px;
    }
    .water_content_wrap {
        margin: auto;
    }

}
@media screen and (max-width: 767px) {
    .use_gnb ul {
        gap: 40px;
		flex-wrap: wrap;
    }
}
</style>