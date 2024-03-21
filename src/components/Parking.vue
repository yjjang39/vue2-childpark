<template>
    <div id="parking">
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

        <div class="parking_content_wrap">
            <h3>주차안내</h3>
            <div class="parking_info">
                <p>서울어린이대공원을 찾아주신 시민 여러분께 깊은 감사를 드립니다.</p>
                <dl>
                    <dt>현재 주차장 4개소(정문, 서울상상나라지하주차장, 후문, 구의문)를 운영중에 있지만, <strong>주말 및 성수기에는 많은 차량이 몰려 주차대기시간</strong>이 길어지고 있습니다.<br>
                    만차 시에는 <strong>주변 주차장(인근 공영주차장, 대학교 주차장 등)</strong>이나 <strong>대중교통(지하철 7호선 어린이대공원역, 5호선 아차산역)</strong>을 이용해주시기 바랍니다.</dt>
                    <dd><span class="material-symbols-outlined">stat_0</span>봄철 금/토/일/공휴일 주차장 &nbsp;<strong>만차 시간대 : 10:30 ~ 16:30</strong></dd>
                    <dd><span class="material-symbols-outlined">stat_0</span>주차장 만차 시,&nbsp; <strong>평균 대기시간 : 1시간 30분 소요</strong></dd>
                </dl>
                <p>이에 대한 이용시민 여러분의 이해와 협조를 부탁드립니다.</p>
            </div>

            <img class="parking_img" src="https://www.sisul.or.kr/open_content/childrenpark/images/park_img.jpg" alt="주차장 사진">
            
            <div class="parking_space">
                <h4><i class="material-icons">trip_origin</i>주차면수 안내</h4>
                <table width="100%" class="margin_t5 data" summary="주차면수 안내를 주차규모, 면적으로 구분지어 합계, 정문, 상상나라, 후문, 구의문, 비고순으로 나타낸 표입니다">
                    <caption class="hide">주차면수 안내</caption>
                    <thead>
                        <tr>
                            <th scope="col">구분</th>
                            <th scope="col">합계</th>
                            <th scope="col">정문</th>
                            <th scope="col">상상나라</th>
                            <th scope="col">후문</th>
                            <th scope="col">구의문</th>
                            <th scope="col">비고</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">주차규모</th>
                            <td>979면</td>
                            <td>89면</td>
                            <td>305면</td>
                            <td>250면</td>
                            <td>335면</td>
                            <td rowspan="2">일반 766면<br>
                            장애인 30면<br>
                            임산부 전용 10면<br>
                            환경친화적자동차 전용주차 33면<br>
                            환경친화적자동차 충전구역 22면<br>
                            여성우선 118면
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">면 적</th>
                            <td>28,112㎡</td>
                            <td>3,310㎡</td>
                            <td>10,635㎡</td>
                            <td>7,800㎡</td>
                            <td>6,367㎡</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="parking_time">
                <h4><i class="material-icons">trip_origin</i>운영시간</h4>
                <dl>
                    <dt><span class="material-symbols-outlined">stat_0</span>09:00 ~ 22:00</dt>
                    <dd><span>※ 토·일요일, 공휴일은 주차장이 복잡하오니 대중교통을 이용</span>하시기 바라며, 차량을 이용할 경우에는 능동문 주차장(정문)이 가장 먼저 만차가 되므로 후문과 구의문 주차장을 이용하시면 편안히 이용하실 수 있습니다.</dd>
                </dl>
            </div>

            <div class="parking_money">
                <h4><i class="material-icons">trip_origin</i>이용요금</h4>
                <p><span class="material-symbols-outlined">stat_0</span>승용차 150원, 중형차 300원, 대형차 450원</p>
            </div>

            <div class="parking_reduction">
                <h4><i class="material-icons">trip_origin</i>주차요금 감면제도 안내</h4>
                <p>※둘 이상의 주차요금 감면사유 해당 시 감면율이 높은 하나만 적용</p>
                <table width="100%" class="data" summary="주차요금 감면제도를 구분에따른 감면율로 정리한 표입니다.">
                    <caption class="hide">주차요금 감면제도 안내</caption>
                    <thead>
                        <tr>
                            <th scope="col">구분</th>
                            <th scope="col">감면율</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">장애인, 국가유공상이자, 고엽제휴유(의)증환자, 의상자</th>
                            <td>80% 감면</td>
                        </tr>
                        <tr>
                            <th scope="row">경차 · 저공해자동차</th>
                            <td>50% 감면</td>
                        </tr>
                        <tr>
                            <th scope="row">모범납세자로 표창을 받은 자(1년간)</th>
                            <td>주차요금 면제</td>
                        </tr>
                        <tr>
                            <th scope="row">5.18 민주유공자 차량</th>
                            <td>50% 감면</td>
                        </tr>
                        <tr>
                            <th scope="row">(서울시) 다둥이 행복카드 소지자(운전자 본인)</th>
                            <td>2자녀 이상 : 50%</td>
                        </tr>
                        <tr>
                            <th scope="row">공원 내에서 전기자동차 충전 시(후문 주차장, 2면)</th>
                            <td>1시간 면제 후 50%감면(1일 1회 제한)</td>
                        </tr>
                        <tr>
                            <th scope="row">재해부상군경, 재해부상공무원</th>
                            <td>50% 감면</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="parking_reduction_details">
                <h4><i class="material-icons">trip_origin</i>감면 세부요건</h4>
                <ul>
                    <li>장애인 : 장애인자동차 표지를 부착하고 장애인이 탑승하여 장애인등록증을 제시한 경우</li>
                    <li>국가유공상이자 : 국가유공자 증서를 제시한 경우</li>
                    <li>고엽제휴유증환자 : 고엽제후유증환자로서 국가 또는 지방보훈청에 등록한 사실이 확인된 사람</li>
                    <li>의상자 : 의상자로서 의상자증을 제시한 경우</li>
                    <li>경차 : 자동차관리법 제3조 및 동법 시행규칙 제2조에 따른 경형자동차</li>
                    <li>
                        저공해차량 : 수도권대기환경 개선에 관한 특별법 제2조 및 동법 시행령 제3조에 따른 저공해자동차 (1,2,3종) 스티커 부착차량<br>
                        <span>* 대기환경보전법 부칙 제2조 제4조 의거 저공해자동차 중 경유자동차에 대한 감면혜택 중단</span>
                    </li>
                    <li>모범납세자로 표창을 받은 자 : 서울특별시장 또는 국세청장이 교부한 성실납세증 표지(스티커)를 부착한 차량(발행일로부터 1년간)</li>
                    <li>5.18민주유공자 차량 : 5.18민주유공자 증서 소지자(직접운전 또는 본인탑승 하에 타인이 대리운전)</li>
                    <li>전기자동차 충전 시 : 환경친화적 자동차의 개발 및 보급 촉진에 관한 법률 제2조에 따른 전기자동차 충전</li>
                    <li>재해부상군경, 재해부상공무원 : 보훈보상대상자 지원에 관한 법률 제2조 제1항 제2호 및 제4호에 따른 보훈보상대상자로서 보훈보상대상자증을 제시한 경우</li>
                </ul>
            </div>
            
            <div class="parking_qna">
                <h4><i class="material-icons">trip_origin</i>문의</h4>
                <ul>
                    <li><span class="material-symbols-outlined">stat_0</span>능동문(정문)·서울상상나라 지하주차장: 02)447-4711</li>
                    <li><span class="material-symbols-outlined">stat_0</span>후문주차장: 02)447-4712</li>
                    <li><span class="material-symbols-outlined">stat_0</span>구의문주차장 : 02)447-4713</li>
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
#parking {
    margin: 50px auto 100px;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    gap: 100px;
}

.use_gnb ul li:nth-child(5) {
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
.parking_content_wrap {
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

.parking_content_wrap > div {
    margin-bottom: 70px;
}

/* 주차안내 */
.parking_info {
    background: #eee;
    padding: 20px;
    /* text-align: center; */
    /* font-weight: 600; */
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
}
.parking_info dd {
    display: flex;
    align-items: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 7px;
    /* margin-top: 10px; */
}
.parking_info p:first-child {
    margin-bottom: 20px;
}
.parking_info dt {
    margin-bottom: 20px;
}
.parking_info dd:nth-child(3) {
    margin-bottom: 20px;
}
.parking_img {
    width: 100%;
    margin-bottom: 50px;
}

/* 주차면수 안내 */
table {
    text-align: center;
}
table, tr, td, th {

    padding: 10px;
}

/* 운영시간 */
.parking_time dt {
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-size: 15px;
    margin-bottom: 7px;
    /* margin-top: 10px; */
}
.parking_time dd {
    margin-left: 30px;
}
.parking_time dd span {
    color: red;
}

/* 이용요금 */
.parking_money p {
    display: flex;
    align-items: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 7px;
    /* margin-top: 10px; */
}

/* 주차요금 감면제도 안내 */
.parking_reduction p {
    color: red;
    margin: 0 0 5px 10px;
}

/* 감면세부요건 */
.parking_reduction_details li {
    list-style: square;
    margin-left: 35px;
    margin-bottom: 7px;
}

/* 문의 */
.parking_qna li {
    display: flex;
    align-items: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 7px;
    /* margin-top: 10px; */
}



@media screen and (max-width: 1024px) {
    #parking{
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
    .parking_content_wrap {
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