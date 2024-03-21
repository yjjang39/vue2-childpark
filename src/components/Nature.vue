<template>
    <div id="nature">
        <div class="nature_gnb">
            <h2>식물나라</h2>
            <ul>
                <li><router-link to="nature">식물원 관람안내</router-link></li>
                <li><router-link to="natureindoor">실내정원</router-link></li>
                <!-- <li><router-link to="natureprogram">체험프로그램</router-link></li> -->
            </ul>
        </div>

        <div class="nature_content_wrap">
            <div class="nature_info">
                <h3>식물원 관람안내</h3>
                <ul>
                    <li>어린이대공원 식물원은 1973년에 개원하여 1,500㎡ 면적에 285종의 온실식물이 전시되어 있습니다.</li>
                    <li>관람순서 : 다육식물 → 관엽식물 → 분재 → 야생화</li>
                </ul>
            </div>

            <div class="nature_story">
                <h4><i class="material-icons">trip_origin</i>식물원 이야기</h4>

                <ul>
                    <li>
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/botanical1.jpg" alt="다육식물 사진1">
                        <!-- <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/botanical1.jpg" alt="다육식물 사진2"> -->
                        <dl>
                            <dt><span class="material-symbols-outlined">stat_0</span>다육식물</dt>
                            <dd>다육식물이란 줄기나 잎에 수분을 저장할수 있도록 적응된 식물로 138종의 선인장과 기타 식물들을 관람할 수 있습니다. 다육식물이 가진 꽃, 가시의 모양, 색깔, 길이.. 천천히 느껴보세요.</dd>
                        </dl>
                    </li>

                    <li>
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/botanical2.jpg" alt="관엽식물 사진1">
                        <!-- <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/botanical2.jpg" alt="관엽식물 사진2"> -->
                        <dl>
                            <dt><span class="material-symbols-outlined">stat_0</span>관엽식물</dt>
                            <dd>관엽식물이란 잎의 색깔 또는 형태의 아름다움을 관상하는 식물로 160여종의 살아 숨쉬는 식물을 새소리를 들으며 이국적인 분위기를 감상할 수 있습니다.</dd>
                        </dl>
                    </li>

                    <li>
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/botanical3.jpg" alt="분재 사진1">
                        <!-- <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/botanical3.jpg" alt="분재 사진2"> -->
                        <dl>
                            <dt><span class="material-symbols-outlined">stat_0</span>분재</dt>
                            <dd>분재란 화분에 심은 나무의 가지와 줄기를 다듬어 노수목의 축소판으로 총 49종의 분재가 형태별로 전시되어 있으며 100년 이상 오래되어 세월의 흔적을 느낄 수 있는 분재작품도 감상하실 수 있습니다.</dd>
                        </dl>
                    </li>

                    <li>
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/botanical4.jpg" alt="야생화 사진1">
                        <!-- <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/botanical4.jpg" alt="야생화 사진2"> -->
                        <dl>
                            <dt><span class="material-symbols-outlined">stat_0</span>야생화</dt>
                            <dd>총 66종의 야생화가 계절별로 전시되어 있어 관람로를 따라 들에 핀 꽃과 풀을 감상하세요. 할미꽃, 수선화, 나리 등 야생화에 담겨져 있는 이야기를 알아 볼까요?</dd>
                        </dl>
                    </li>
                </ul>
            </div>

            <div class="nature_energy">
                <h4><i class="material-icons">trip_origin</i>신재생에너지 설치</h4>
                <ul>
                    <li>
                        어린이대공원 식물원은 신재생에너지[지열地熱냉난방시스템]로 온실에 냉난방을 공급하여 저탄소 녹색성장에 기여하고 있습니다.
                    </li>
                    <li>
                        어린이대공원 식물원은 환경친화적으로 관리하고 있습니다. 2009년 서울시 신재생에너지 보급사업으로 식물원에 지열 냉난방시스템(용량 170RT)을 설치하여 온실식물에 가장 적합한 생장환경을 유지하고있으며 향후 지열설비 가동에 소요되는 전력을 태양광으로 공급하여 화석연료를 사용하지 않는 청정에너지(Green Energy)로 온실을 관리할 예정입니다.
                    </li>
                    <li>
                        식물원 지열 냉난방시스템 구성도
                        <img src="../assets/botanical_system01.gif" alt="">
                        <img src="../assets/botanical_system02.gif" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#nature {
    margin: 50px auto 100px;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    gap: 100px;
}

.nature_gnb ul li:first-child {
    color: #34d330;
}


/* GNB */
.nature_gnb {
    padding-top: 30px;
    width: 120px;
}
.nature_gnb h2 {
    font-size: 24px;
    margin-bottom: 25px;
}
.nature_gnb h2:after {
    content: "";
    width: 70px;
    height: 3px;
    display: block;
    background: #0389d0;
    margin-top: 10px;
}
.nature_gnb li {
    margin-bottom: 10px;
    font-size: 17px;
    color: gray;
}
.nature_gnb li:hover {
    color: #34d330;
    /* font-weight: bold; */
}
.nature_gnb ul {
    margin-left: 8px;
}

/* CONTENT */
.nature_content_wrap {
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

/* 관람안내 */
.nature_info ul {
    background: #eee;
    padding: 20px;
    /* text-align: center; */
    font-weight: 600;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
}
.nature_info li {
    list-style: square;
    margin-left: 10px;
}
.nature_info {
    margin-bottom: 70px;
}

/* 식물원이야기 */
.nature_story {
    margin-bottom: 60px;
}
.nature_story dt {
    display: flex;
    align-content: center;
    margin-left: 10px;
    font-size: 17px;
    margin-bottom: 7px;
    margin-top: 10px;
}
.nature_story dt span {
    color: #005583;
}
.nature_story dd {
    margin-left: 45px;
}
.nature_story li {
    margin-bottom: 40px;
}
.nature_story img {
    transition: all 0.2s linear;
}
.nature_story img:hover {
    transform: scale(1.3);
}


/* 신재생에너지 */
.nature_energy li {
    list-style: square;
    padding: 5px 10px;
    margin-left: 30px;
}
.nature_energy img {
    margin: 10px 0;
    width: 100%;
}

@media screen and (max-width: 1024px) {
    #nature {
        display: block;
    }
    .nature_gnb {
        text-align: center;
        margin-bottom: 80px;
        width: 100%;
    }
    .nature_gnb h2:after {
        margin: 10px auto;
    }
    .nature_gnb ul {
        display: flex;
        justify-content: center;
        gap: 70px;
    }

}
@media screen and (max-width: 767px) {
    .nature_gnb ul {
        gap: 40px;
    }
}
</style>