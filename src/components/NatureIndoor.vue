<template>
    <div id="natureindoor">
        <div class="nature_gnb">
            <h2>식물나라</h2>
            <ul>
                <li><router-link to="nature">식물원 관람안내</router-link></li>
                <li><router-link to="natureindoor">실내정원</router-link></li>
                <!-- <li><router-link to="natureprogram">체험프로그램</router-link></li> -->
            </ul>
        </div>

        <div class="natureindoor_content_wrap">
            <div class="natureindoor_info">
                <h3>실내정원</h3>
                <p>식물원 2층 240㎡의 공간을 리모델링하여 꽃과 나비, 금강산폭포, 열대식물, 다육식물, 고향 산천 공중식재관, 수경식재관, 석부작.목부작 등 총 8개의 테마로 구성되어 있습니다.</p>

                <h4><i class="material-icons">trip_origin</i>실내정원 소개</h4>
                <ul>
                    <li>
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/garden1.jpg" alt="">
                        <dl>
                            <dt><span class="material-symbols-outlined">stat_0</span>진.출입 경사로</dt>
                            <dd>실내정원(식물원2층)으로 올라가는 휠체어 및 유모차 전용 진,출입램프이며 주변경관이 아름답습니다.</dd>
                        </dl>
                    </li>
                    <li>
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/garden2.jpg" alt="">
                        <dl>
                            <dt><span class="material-symbols-outlined">stat_0</span>열대식물존</dt>
                            <dd>열대 지방에서 자라는 식물들로 조성되어 있으며, 잎이나 꽃들이 진기하고 아름다운 것이 많습니다. 실내에서 잘 자라는 식물들로 조성하였습니다.</dd>
                        </dl>
                    </li>
                    <li>
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/garden3.jpg" alt="">
                        <dl>
                            <dt><span class="material-symbols-outlined">stat_0</span>꽃과 나비존</dt>
                            <dd>공원내 죽은 향나무를 소재로 꽃과 아름다운 나비들의 안식처로 조성하였습니다.(어린이대공원 직원 작품)</dd>
                        </dl>
                    </li>
                    <li>
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/garden4.jpg" alt="">
                        <dl>
                            <dt><span class="material-symbols-outlined">stat_0</span>진경산수존</dt>
                            <dd>진경산수는 조선시대 후기에 화원사회에서 일어난 새로운 화풍으로, 이를 모토로 금강산의 두드러진 산골짜기를 옮겨놓은 듯한 작품입니다.</dd>
                        </dl>
                    </li>
                    <li>
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/garden5.jpg" alt="">
                        <dl>
                            <dt><span class="material-symbols-outlined">stat_0</span>다육식물존</dt>
                            <dd>다육식물은 줄기나 잎 또는 식물체 전체가 두껍게 살이 찌고, 수분을 많이 가지고 있어 가뭄이 지속되는 건조한 곳에서도 잘 견디는 식물입니다.</dd>
                        </dl>
                    </li>
                    <li>
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/garden6.jpg" alt="">
                        <dl>
                            <dt><span class="material-symbols-outlined">stat_0</span>공중식재관</dt>
                            <dd>공중에 떠있는 식물로 실내 유해물질 제거와 공기정화, 온, 습도 조절 등의 다양한 효과가 있는 공중식물 조성 공간입니다.</dd>
                        </dl>
                    </li>
                    <li>
                        <img src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/zone_photo/garden7.jpg" alt="">
                        <dl>
                            <dt><span class="material-symbols-outlined">stat_0</span>수경식재관</dt>
                            <dd>수생식물(水生植物)은 식물 중 물 속에서 살아가는 종류를 말합니다. 꽃, 줄기, 뿌리 등을 볼 수 있도록 유리관에 식재하였습니다.</dd>
                        </dl>
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
#natureindoor {
    margin: 50px auto 100px;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    gap: 100px;
}

.nature_gnb ul li:nth-child(2) {
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
.natureindoor_content_wrap {
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

/* 실내정원 소개 */
.natureindoor_info p {
    background: #eee;
    padding: 20px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 70px;
}
.natureindoor_info dt {
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
.natureindoor_info dd {
    margin-left: 45px;
}
.natureindoor_info li {
    margin-bottom: 40px;
}
.natureindoor_info img {
    transition: all 0.2s linear;
}
.natureindoor_info img:hover {
    transform: scale(1.3);
}

@media screen and (max-width: 1024px) {
    #natureindoor {
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