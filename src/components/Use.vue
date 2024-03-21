<template>
	<div id="use">
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

		<div class="use_content_wrap">
			<h3>이용시간</h3>
			<div class="use_time">
				<h4><i class="material-icons">trip_origin</i>공원이용시간</h4>
				<ul>
					<li><span class="material-symbols-outlined">stat_0</span>오전 5시 ~ 오후 10시 (05:00 ~ 22:00)</li>
					<li><span class="material-symbols-outlined">stat_0</span>정문, 후문, 구의문, 능동문 개방시간 (05:00 ~ 22:00)</li>
					<li><span class="material-symbols-outlined">stat_0</span>동물원은 오전 10시부터 오후 5시까지 관람 가능합니다. (방역상황, 날씨 등에 따라 일부 변동될 수 있습니다.)</li>
				</ul>
			</div>

			<div class="use_funny_time">
				<h4><i class="material-icons">trip_origin</i>놀이동산 이용시간</h4>
				<ul>
					<li><span class="material-symbols-outlined">stat_0</span>평일 오전 10시 ~ 오후 6시 30분 (10:00 ~ 18
						:30)
					</li>
					<li><span class="material-symbols-outlined">stat_0</span>주말/공휴일 오전 10시 ~ 오후 7시 30분 (10:00 ~ 19:30)</li>
					<li><span class="material-symbols-outlined">stat_0</span>계절, 날씨 등 당일 사정에 따라 폐장시간은 변경 될 수 있습니다.</li>
					<li><span class="material-symbols-outlined">stat_0</span>비수기, 성수기 시간 변동</li>
				</ul>
			</div>

			<div class="use_info">
				<h4><i class="material-icons">trip_origin</i>공원이용안내</h4>
				<ul>
					<li><span class="material-symbols-outlined">stat_0</span>어린이 대공원은 시민여러분이 함께 가꾸고 즐기는 휴식공간이자 동식물이 행복하게 공존하는 생태공원입니다.</li>
					<li><span class="material-symbols-outlined">stat_0</span>
						<p>공원이용시 아래 사항을 지켜주시기 바랍니다.
							<ul>
								<li>차량, 오토바이, 자전거, 킥보드, 인라인 스케이트, 전동차 등은 출입을 금지합니다.(사전 승인을 받은 관리차량 제외)</li>
								<li>반려동물은 수용동물안전 및 전염병 예방을 위해 들어갈 수 없습니다.</li>
								<li>동물들에게 음식을 주지 마세요.</li>
								<li>공원내 주류 및 취사 도구의 반입을 금지합니다.</li>
								<li>공원에서는 행상 또는 노점에 의한 상행위, 노숙을 할 수 없습니다.</li>
								<li>공원시설, 나무, 꽃 등을 훼손하거나 열매를 채취하지 마세요. (위반시 과태료 부과)</li>
								<li>시설 이용시 안전이 최우선! 무리한 이용 및 위험한 행동을 하지 마세요.</li>
								<li>행사 등 시설 예약은 서울어린이대공원으로 신청하세요.</li>
								<li>쓰레기는 반드시 지정된 장소에 버려주시기 바랍니다.</li>
								<li>※ Tel : 02)450-9311</li>
							</ul>
						</p>
					</li>
				</ul>
			</div>

			<div class="use_penalty">
				<h4><i class="material-icons">trip_origin</i>공원내 과태료 부과 기준안내</h4>
				<p><span class="material-symbols-outlined">stat_0</span>도시 공원, 도시 자연공원구역 또는 녹지 안에서 다음 어느 하나에 해당하는 금지행위를 할 경우 도시 공원 및 녹지등에 관한 법률의 규정에 의거 10만원이하의 과태료가 부과 됨을 알려드립니다.</p>
				<table class="data margin_t20" width="100%">
					<tbody>
						<tr>
							<td class="gray" colspan="3">도시 공원 및 녹지등에 관한 법률 제 49조 제 1항</td>
						</tr>
						<tr>
							<td scope="row"><img alt="나무훼손방지 사진" src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/sign01.gif"></td>
							<td class="left">나무를 훼손하거나 이물질을 주입하여 나무를 말라죽게 하는 행위</td>
							<td class="point">100,000원</td>
						</tr>
						<tr>
							<td><img alt="행상 또는 노점에의한 상행위금지 사진" src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/sign02.gif"></td>
							<td class="left">심한 소음 또는 악취를 나게 하는 등 다른 사람에게 혐오감을 일으키게 하는 행위</td>
							<td class="point">70,000원</td>
						</tr>
						<tr>
							<td class="gray" colspan="3">도시공원 및 녹지등에 관한 법률 제 49조 2항</td>
						</tr>
						<tr>
							<td scope="row"><img alt="행상 또는 노점에 의한 상행위금지 사진 " src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/sign03.gif"></td>
							<td class="left">행상 또는 노점에 의한 상행위</td>
							<td class="point">70,000원</td>
						</tr>
						<tr>
							<td class="gray" colspan="3">도시공원 및 녹지등에 관한 법률 시행령 제 50조</td>
						</tr>
						<tr>
							<td scope="row"><img alt="야영행위, 취사행위및 불을 피우는 행위금지 사진 " src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/sign04.gif"></td>
							<td class="left">지정된 장소 외의 장소에서의 야영행위, 취사행위 및 불을 피우는 행위</td>
							<td class="point">100,000원</td>
						</tr>
						<tr>
							<td scope="row"><img alt="오물 또는 폐기물투척 금지 사진" src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/sign05.gif"></td>
							<td class="left">오물 또는 폐기물(담배꽁초, 휴지등)을 지정된 장소 외의 장소에 버리는 행위</td>
							<td class="point">30,000원</td>
						</tr>
						<tr>
							<td scope="row"><img alt="지정된 장소외의 장소에서의 주차 행위금지 사진" src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/sign06.gif"></td>
							<td class="left">지정된 장소외의 장소에서의 주차 행위</td>
							<td class="point">50,000원</td>
						</tr>
						<tr>
							<td scope="row"><img alt="이륜 이상의 바퀴가 있는 동력 장치를 이용하여 행하는 영업금지 사진" src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/sign07.gif"></td>
							<td class="left">이륜 이상의 바퀴가 있는 동력 장치를 이용하여 행하는 영업 행위</td>
							<td class="point">70,000원</td>
						</tr>
						<tr>
							<td scope="row"><img alt="이륜 이상의 바퀴가 있는 동력 장치를 이용하여 차도 외의 장소에 출입하는 행위 금지 사진" src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/sign07.gif"></td>
							<td class="left">이륜 이상의 바퀴가 있는 동력 장치를 이용하여 차도 외의 장소에 출입하는 행위<br>
							(장애인, 또는 노약자가 출입하는 행위는 제외)</td>
							<td class="point">50,000원</td>
						</tr>
						<tr>
							<td scope="row"><img alt="전답 외의 지역에서 무단으로 경작하는 행위 금지사진" src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/sign09.gif"></td>
							<td class="left">전답 외의 지역에서 무단으로 경작하는 행위</td>
							<td class="point">100,000원</td>
						</tr>
						<tr>
							<td scope="row"><img alt="식물의 꽃과 열매를 무단으로 채취하는 행위 금지사진" src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/sign10.gif"></td>
							<td class="left">식물의 꽃과 열매를 무단으로 채취하는 행위</td>
							<td class="point">50,000원</td>
						</tr>
						<tr>
							<td scope="row"><img alt="공원내에 서식하는 동물을 학대하거나 허가 등을 받지 아니하고 포획하는 행위 금지사진" src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/sign11.gif"></td>
							<td class="left">공원내에 서식하는 동물을 학대하거나 허가 등을 받지 아니하고 포획하는 행위</td>
							<td class="point">100,000원</td>
						</tr>
						<tr>
							<td class="gray" colspan="3">서울특별시 간접흡연 피해방지 조례 제5조 및 제10조</td>
						</tr>
						<tr>
							<td scope="row"><img alt="공원금연 사진" src="https://www.sisul.or.kr/open_content/childrenpark/images/sub/sign12.gif"></td>
							<td class="left">공원 내에서 흡연하는 행위</td>
							<td class="point">100,000원</td>
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
#use {
    margin: 50px auto 100px;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    gap: 100px;
}

.use_gnb ul li:first-child {
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
.use_content_wrap {
    max-width: 980px;
    margin: auto;
}
.use_content_wrap div {
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

/* 공원이용시간 */
.use_time li, .use_funny_time li {
    display: flex;
    align-content: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 7px;
    margin-top: 10px;
}
.use_time li span, .use_funny_time li span {
    color: #005583;
}

/* 공원 이용안내 */
.use_info > ul > li > p > ul > li {
    list-style: square;
    padding: 5px;
    margin-left: 20px;
}
.use_info > ul > li span {
	color: #005583;
}
.use_info > ul > li {
    display: flex;
    align-content: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 7px;
    margin-top: 10px;
}

/* 과태료 부과 기준안내 */
.use_penalty p {
    display: flex;
    align-content: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 20px;
    margin-top: 10px;
}
.use_penalty tbody td:first-child {
	text-align: center;
	border-left: none;
}
.gray {
	border-top: 2px solid #0389d0;
	border-bottom: 1px solid #000;
}


@media screen and (max-width: 1024px) {
    #use{
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

}
@media screen and (max-width: 767px) {
    .use_gnb ul {
        gap: 40px;
		flex-wrap: wrap;
    }
}
</style>