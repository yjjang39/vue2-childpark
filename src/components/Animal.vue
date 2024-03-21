<template>
    <div id="animal">
        <div class="animal_gnb">
            <h2>동물나라</h2>
            <ul>
                <li><router-link to="/animal">동물원 관람안내</router-link></li>
                <li><router-link to="/animalpresent">동물현황</router-link></li>
                <!-- <li><router-link to="/animalprogram">체험프로그램</router-link></li> -->
            </ul>
        </div>
        <div class="animal_content_wrap">
            <div class="animal_info">
                <h3>동물원 관람안내</h3>
                <p>
                    서울어린이대공원 동물원은 70여종 600여마리의 동물을 보유하고 있으며, 동물과 사람이 모두 행복한 동물원으로 변화하고 있습니다.<br>
                    동물먹방LIVE, 동물행동풍부화, 동물학교 프로그램 등을 통하여<br> 생명과 자연의 소중함, 가족의 화목과 시민이 행복함을 느낄 수 있도록 끊임없이 노력하겠습니다.
                </p>
            </div>

            <div class="animal_time">
                <h4><i class="material-icons">trip_origin</i>관람시간</h4>
                <p><span class="material-symbols-outlined">stat_0</span>동물원은 오전 10시부터 오후 5시까지 관람 가능합니다. (방역상황, 날씨 등에 따라 일부 변동될 수 있습니다.)</p>
            </div>

            <div class="animal_temp">
                <h4><i class="material-icons">trip_origin</i>겨울철 외부 기온에 따른 관람 기준 안내</h4>
                <table width="100%">
                    <thead>
                        <tr>
                            <th>동물사</th>
                            <th>해당동물</th>
                            <th>관람기준</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th rowspan="2">꼬마동물마을</th>
                            <td>미어캣, 검은꼬리프레리독, 사막여우, 아프리카포큐파인</td>
                            <td>0℃ 이상</td>
                        </tr>
                        <tr>
                            <td>왈라루, 작은발톱수달</td>
                            <td>5℃ 이상</td>
                        </tr>
                        <tr>
                            <th rowspan="2">원숭이마을</th>
                            <td>일본원숭이, 돼지꼬리원숭이, 아누비스개코원숭이, 망토원숭이</td>
                            <td>0℃ 이상</td>
                        </tr>
                        <tr>
                            <td>노량뺨기번, 은색기번</td>
                            <td>10℃ 이상</td>
                        </tr>
                        <tr>
                            <th rowspan="2">코끼리사</th>
                            <td>아시아코끼리</td>
                            <td>5℃ 이상</td>
                        </tr>
                        <tr>
                            <td>점박이하이에나</td>
                            <td>0℃ 이상</td>
                        </tr>
                        <tr>
                            <th>맹수마을</th>
                            <td>사자, 뱅갈호랑이, 재규어, 서발, 퓨마, 스라소니, 검은등쟈칼, 붉은여우</td>
                            <td>0℃ 이상</td>
                        </tr>
                        <tr>
                            <th>초식동물마을</th>
                            <td>붉은캥거루, 그랜트얼룩말</td>
                            <td>0℃ 이상</td>
                        </tr>
                        <tr>
                            <th>물새장</th>
                            <td>쟈카스펭귄</td>
                            <td>0℃ 이상</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="animal_live">
                <h4><i class="material-icons">trip_origin</i>동물먹방LIVE 운영안내</h4>
                <dl>
                    <dt><span class="material-symbols-outlined">stat_0</span>운영기간 : 4월~ 10월 (6~8월 혹서기 기간 미운영)</dt>
                    <dd>※ 우천 시, 전염병(구제역,AI,코로나19 등) 방역기간 등 상황에 따라 탄력 운영</dd>
                    <dt><span class="material-symbols-outlined">stat_0</span>운영횟수 : 1회/일</dt>
                    <dt><span class="material-symbols-outlined">stat_0</span>운영내용 : 사육사 먹이 제공, 행동풍부화 및 긍정강화훈련 등 진행</dt>
                    <dd>※ 코끼리, 맹수류, 원숭이류, 물개류, 초식동물류, 열대동물류 등 운영</dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#animal {
    margin: 50px auto 100px;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    gap: 100px;
}

.animal_gnb ul li:first-child {
    color: #34d330;
}


/* GNB */
.animal_gnb {
    padding-top: 30px;
    width: 120px;
}
.animal_gnb h2 {
    font-size: 24px;
    margin-bottom: 25px;
}
.animal_gnb h2:after {
    content: "";
    width: 70px;
    height: 3px;
    display: block;
    background: #0389d0;
    margin-top: 10px;
}
.animal_gnb li {
    margin-bottom: 10px;
    font-size: 17px;
    color: gray;
}
.animal_gnb li:hover {
    color: #34d330;
    /* font-weight: bold; */
}
.animal_gnb ul {
    margin-left: 8px;
}

/* CONTENT */
i {
    color: #0389d0;
}
h3 {
    font-size: 28px;
    margin-bottom: 30px;
    padding-top: 10px;
    box-sizing: border-box;
}
.animal_content_wrap {
    width: 980px !important;
    /* margin: auto; */
}
.animal_info p {
    background: #eee;
    padding: 20px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
}
.animal_info {
    margin-bottom: 70px;
}
h4 {
    font-size: 20px;
    margin-bottom: 10px;
}

/* 관람시간 */
.animal_time {
    margin-bottom: 70px;
}
.animal_time h4 {
    display: flex;
    align-items: center;
    gap: 7px;
}
.animal_time p {
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.animal_time span {
    color: #005583;
}

/* 관람기준 */
.animal_temp h4 {
    display: flex;
    align-items: center;
    gap: 7px;
}
.animal_temp {
    margin-bottom: 70px;
}
table, tr, td, th {
    padding: 7px;
    box-sizing: border-box;
}
table {
    text-align: center ;
}

/* 동물먹방 LIVE */
.animal_live h4 {
    display: flex;
    align-items: center;
    gap: 7px;
}
.animal_live dt {
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.animal_live dd {
    color: red;
    margin-left: 20px;
    margin-bottom: 10px;
}
.animal_live dl dt:nth-child(3) {
    margin-bottom: 10px;
}
.animal_live span {
    color: #005583;
}

@media screen and (max-width: 1024px) {
    #animal {
        display: block;
    }
    .animal_gnb {
        text-align: center;
        margin-bottom: 80px;
        width: 100%;
    }
    .animal_gnb h2:after {
        margin: 10px auto;
    }
    .animal_gnb ul {
        display: flex;
        justify-content: center;
        gap: 70px;
    }
}
@media screen and (max-width: 767px) {
    .animal_gnb ul {
        gap: 40px;
    }
}
</style>