<template>
    <div id="money">
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

		<div class="money_content_wrap">
			<h3>이용요금</h3>
			<div class="park_money">
				<h4><i class="material-icons">trip_origin</i>공원 이용요금</h4>
				<p><span class="material-symbols-outlined">stat_0</span>공원 입장료 : 무료</p>
			</div>
			
			<!-- <div class="money_table">
				<h4><i class="material-icons">trip_origin</i>공원시설 이용요금</h4>

				<table class="data margin_t20" summary="공원시설 이용요금을 구분, 기준, 요금, 문의처 순으로 나누어 작성한 표입니다." width="100%">
					<caption>공원시설 이용요금</caption>
					<thead>
						<tr>
							<th scope="col">구 분</th>
							<th colspan="3" scope="col">기 준</th>
							<th scope="col">요금</th>
							<th scope="col">문의처</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">축구장(인조잔디)</th>
							<td colspan="2">1회 2시간</td>
							<td>축구경기</td>
							<td>55,000원</td>
							<td class="left">☎ 02)450-9321<br>
							※ 자세한 사항은 <a class="wfont blue_color" href="/open_content/childrenpark/guidance/facility/rent_turf.jsp">[축구장(인조잔디)]</a>에서 확인하실 수 있습니다.<br>
							※ 야간·토·일·공휴일 30% 가산</td>
						</tr>
						<tr>
							<th rowspan="4" scope="row">풋살경기장</th>
							<td rowspan="4">1회 2시간</td>
							<td rowspan="2">5:5</td>
							<td>평일</td>
							<td>25,000원</td>
							<td class="left" rowspan="4">☎ 02)457-8718<br>
							※ 자세한 사항은 <a class="wfont blue_color" href="/open_content/childrenpark/guidance/facility/rent_futsal.jsp">[풋살경기장]</a>에서 확인하실 수 있습니다.</td>
						</tr>
						<tr>
							<td class="line">토,일 공휴일</td>
							<td>32,500원</td>
						</tr>
						<tr>
							<td class="line" rowspan="2">3:3</td>
							<td>평일</td>
							<td>15,000원</td>
						</tr>
						<tr>
							<td class="line">토,일 공휴일</td>
							<td>19,500원</td>
						</tr>
						<tr>
							<th rowspan="2" scope="row">테니스장</th>
							<td colspan="2" rowspan="2">1회,1면 2시간</td>
							<td>실내</td>
							<td>평일 25,000원<br>
							토,일,공휴일 및 야간 32,500원</td>
							<td class="left" rowspan="2">☎ 02)457-8718<br>
							※ 자세한 사항은 <a class="wfont blue_color" href="/open_content/childrenpark/guidance/facility/rent_tennis.jsp">[테니스장]</a>에서 확인하실 수 있습니다.</td>
						</tr>
						<tr>
							<td class="line">실외</td>
							<td>평일 8,000원<br>
							토,일,공휴일 및 야간 10,400원</td>
						</tr>
						<tr>
							<th rowspan="2" scope="row">야외무대<br>
							(숲속무대/열린무대)</th>
							<td colspan="2" rowspan="2">1회 2시간<br>
							(전기료 별도)</td>
							<td>주간</td>
							<td>100,000원<br>
							(초과 1시간당<br>
							25,000원)</td>
							<td class="left" rowspan="2">☎ 02)450-9338<br>
							※ 자세한 사항은 <a class="wfont blue_color" href="/open_content/childrenpark/guidance/facility/rent.jsp">[숲속무대,열린무대]</a>에서 확인하실 수 있습니다.</td>
						</tr>
						<tr>
							<td class="line">야간</td>
							<td>200,000원<br>
							(초과 1시간당<br>
							50,000원)</td>
						</tr>
						<tr>
							<th scope="row">촬영 및 녹화</th>
							<td colspan="2">1회, 1시간</td>
							<td>-</td>
							<td>13,000원<br>
							(초과 1시간당<br>
							6,500원)</td>
							<td class="left">☎ 02)450-9321<br>
							※영화, TV드라마, CF촬영 등 영리목적 촬영에 한하여 촬영료를 받습니다.</td>
						</tr>
						<tr>
							<th rowspan="3" scope="row">주차장</th>
							<td colspan="2" rowspan="3">1회, 5분</td>
							<td>승용차</td>
							<td>150원</td>
							<td class="left" rowspan="3">☎ 02)447-4710<br>
							※ 자세한 사항은 <a class="wfont blue_color" href="/open_content/childrenpark/introduce/parking.jsp">[주차안내/이용요금]</a>에서 확인하실 수 있습니다.</td>
						</tr>
						<tr>
							<td class="line">중형차</td>
							<td>300원</td>
						</tr>
						<tr>
							<td class="line">대형차</td>
							<td>450원</td>
						</tr>
						<tr>
							<th scope="row">유모차대여</th>
							<td>1회</td>
							<td>-</td>
							<td>-</td>
							<td>
							<p>3,000원</p>
				
							<p><span style="color:#FF0000;">(현금만 징수)</span></p>
							</td>
							<td class="left">☎ 02)450-9270(정문), 9271(후문)<br>
							※ 자세한 사항은 <a class="wfont blue_color" href="/open_content/childrenpark/introduce/facility.jsp">[편의시설안내]</a>에서 확인하실 수 있습니다.</td>
						</tr>
						<tr>
							<th scope="row">팔각당 세미나실</th>
							<td colspan="2">1회 2시간</td>
							<td>-</td>
							<td>18,240원</td>
							<td class="left">✆☏☎ 02-450-9356<br>
							※ 자세한 사항은 <a class="wfont blue_color" href="/open_content/childrenpark/guidance/facility/rent_octagons.jsp">[팔각당 세미나실]</a>에서 확인하실 수 있습니다.</td>
						</tr>
						<tr>
							<th scope="row">팔각당 전시실</th>
							<td colspan="2">1일</td>
							<td>-</td>
							<td>168,960원</td>
							<td class="left">☎ 02-450-9356<br>
							※ 자세한 사항은 <a class="wfont blue_color" href="/open_content/childrenpark/guidance/facility/rent_octagong.jsp">[팔각당 전시실]</a>에서 확인하실 수 있습니다.</td>
						</tr>
					</tbody>
				</table>
			</div> -->

			<div class="funny_money">
				<h4><i class="material-icons">trip_origin</i>놀이동산 이용요금</h4>
				<table width="100%" class="margin_t5 data">
					<caption class="hide">놀이동산 이용 요금 안내</caption>
					<thead>
						<tr>
							<th scope="col">구분</th>
							<th scope="col">어른(만 19세 이상)</th>
							<th scope="col">청소년(만 12세~18세)</th>
							<th scope="col">어린이(만 3세~11세)</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<th scope="row">자유이용권</th>
							<td>28,000</td>
							<td>25,000</td>
							<td>25,000</td>
						</tr>
						<tr>
							<th scope="row">5회 이용권</th>
							<td>19,000</td>
							<td>17,000</td>
							<td>16,000</td>
						</tr>
						<tr>
							<th scope="row">3회 이용권</th>
							<td>12,000</td>
							<td>11,000</td>
							<td>10,000</td>
						</tr>
						<tr>
							<th scope="row">1회 이용권</th>
							<td>5,000</td>
							<td>4,000</td>
							<td>3,500</td>
						</tr>
					</tbody>
				</table>
				<p>* 체험시설, 코인시설, 계절시설 기획전시/공연 등은 별도 요금입니다.</p>

				<table width="100%">
					<caption>* 장애인 우대요금</caption>
					<thead>
						<tr>
							<th scope="col">구분</th>
							<th scope="col">어른(만 19세 이상)</th>
							<th scope="col">청소년(만 12세~18세)</th>
							<th scope="col">어린이(만 3세~11세)</th>
							<th scope="col">비고</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<th scope="row">자유이용권</th>
							<td>22,000</td>
							<td>20,000</td>
							<td>18,000</td>
							<td rowspan="3"><b>복지카드제시</b><br>보호자 1명 동밚할인(연령별 요금적용)</td>
						</tr>
						<tr>
							<th scope="row">5회 이용권</th>
							<td>15,000</td>
							<td>14,000</td>
							<td>11,000</td>
						</tr>
						<tr>
							<th scope="row">3회 이용권</th>
							<td>10,000</td>
							<td>9,000</td>
							<td>7,000</td>
						</tr>
					</tbody>
				</table>

				<table width="100%">
					<caption>* 20인 이상 단체적용 요금</caption>
					<thead>
						<tr>
							<th scope="col">구분</th>
							<th scope="col">어른(만 19세 이상)</th>
							<th scope="col">청소년(만 12세~18세)</th>
							<th scope="col">어린이(만 3세~11세)</th>
							<th scope="col">비고</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<th scope="row">자유이용권</th>
							<td>22,000</td>
							<td>20,000</td>
							<td>18,000</td>
							<td rowspan="3"><b>인솔자</b>(단체 10명/1명)<br><span>어린이집, 유치원 적용</span></td>
						</tr>
						<tr>
							<th scope="row">5회 이용권</th>
							<td>15,000</td>
							<td>14,000</td>
							<td>11,000</td>
						</tr>
						<tr>
							<th scope="row">3회 이용권</th>
							<td>10,500</td>
							<td>9,500</td>
							<td>8,500</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#money {
    margin: 50px auto 100px;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    gap: 100px;
}

.use_gnb ul li:nth-child(2) {
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
.money_content_wrap {
	width: 980px !important;
}
.money_content_wrap div {
	margin-bottom: 70px;
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

/* 공원 이용요금 */
.park_money p {
    display: flex;
    align-content: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 7px;
    margin-top: 10px;
}
.park_money p span {
    color: #005583;
}

/* 놀이동산 이용요금 */
caption {
	text-align: start;
	font-size: 17px;
	margin-bottom: 5px;
	margin-top: 50px;
}
table {
	margin: 0 auto;
}
table, td, th {
	padding: 10px 20px;
	text-align: center;
}
th {
	border-bottom: none;
}
.funny_money > p {
	color: gray;
	text-align: end;
}


@media screen and (max-width: 1024px) {
    #money {
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
	.money_content_wrap {
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