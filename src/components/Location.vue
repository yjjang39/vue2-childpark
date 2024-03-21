<template>
    <div id="location">
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

        <div class="location_content_wrap">
            <!-- 지도 API -->
            <div id="map" style="width:100%;height:400px;"></div>


            <div class="map_address">
                <h4><i class="material-icons">trip_origin</i>주소</h4>
                <p><span class="material-symbols-outlined">stat_0</span>서울특별시 광진구 능동로 216(능동)</p>
            </div>

            <div class="map_shortcut">
                <button type="button" class="subway_btn" @click="scrollToSubway">대중교통 이용시</button>
                <button type="button" class="car_btn" @click="scrollToCar">자가용 이용시</button>
            </div>

            <div class="subway">
                <h3>대중교통 이용시</h3>
                <div class="subway_bus">
                    <h4><i class="material-icons">trip_origin</i>대중교통(지하철, 버스) 안내</h4>
                    <table width="100%" class="para02 data" summary="대중교통(지하철, 버스) 안내를 교통편, 노선, 내리는곳, 비고로 나누어 작성한 표입니다.">
                        <caption class="hide">대중교통(지하철, 버스) 안내</caption>
                        <thead>
                            <tr>
                                <th scope="col">교통편</th>
                                <th scope="col">노선</th>
                                <th scope="col">내리는 곳</th>
                                <th scope="col">비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" rowspan="3">지하철<br>이용시</th>
                                <td>2호선</td>
                                <td>건대입구 역</td>
                                <td class="left">버스이용(5분거리→정문) <br> 환승 : 7호선→정문</td>
                            </tr>
                            <tr>
                                <td>5호선</td>
                                <td>아차산역 4번출구</td>
                                <td class="left">어린이대공원 후문</td>
                            </tr>
                            <tr>
                                <td>7호선</td>
                                <td>어린이대공원역 1번출구</td>
                                <td class="left">어린이대공원 정문</td>
                            </tr>
                            <tr>
                                <th scope="row" rowspan="3">일반버스<br>이용시</th>
                                <td width="24%"><a href="#b302">302번</a>, <a href="#b721">721번</a>, <a href="#b2222">2222번</a>, <a href="#b3216">3216번</a>, <a href="#b3220">3220번</a>, <a href="#b4212">4212번</a></td>
                                <td>어린이대공원 정문</td>
                                <td class="left">인근지역 : 세종대, 화양리</td>
                            </tr>
                            <tr>
                                <td><a href="#b130">130번</a>,<a href="#b320">320번</a>, <a href="#b2221">2221번</a>, <a href="#b2311">2311번</a>, <a href="#b9301">9301번</a> <a href="#b9403">9403번</a><a href="#b370">370번</a></td>
                                <td>어린이대공원 후문</td>
                                <td class="left">인근지역 : 아차산</td>
                            </tr>
                            <tr>
                                <td><a href="#b303">303번</a>, <a href="#b320_2">320번</a>, <a href="#b2221_2">2221번</a>, <a href="#b2311_2">2311번</a>, <a href="#b9403_2">9403번</a></td>
                                <td>어린이대공원 구의문</td>
                                <td class="left">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="front_gate">
                    <h4><i class="material-icons">trip_origin</i>어린이대공원 정문 방향 버스노선</h4>
                    <table width="100%" class="para02 data" summary="어린이대공원 정문 방향 버스노선을 버스번호, 버스유형, 주요노선으로 나누어 작성한 표입니다.">
                        <caption class="hide">어린이대공원 정문 방향 버스노선</caption>
                        <thead>
                            <tr>
                                <th scope="col">버스번호</th>
                                <th scope="col">버스유형</th>
                                <th scope="col">기점↔종점</th>
                                <th scope="col">하차정류소</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="b302">302번</td>
                                <td class="wfont blue_color">파랑(간선)</td>
                                <td class="left">상대원차고지 ↔ 상왕십리역</td>
                                <td class="left">건대앞</td>
                            </tr>
                            <tr>
                                <td id="b721">721번</td>
                                <td class="wfont blue_color">파랑(간선)</td>
                                <td class="left">북가좌동 ↔ 건대입구역</td>
                                <td class="left">어린이대공원앞(세종대학교)</td>
                            </tr>
                            <tr>
                                <td id="b2222">2222번</td>
                                <td class="wfont g_color">초록(지선)</td>
                                <td class="left">자양동 ↔ 고대앞</td>
                                <td class="left">어린이대공원역(화양천주교회)</td>
                            </tr>
                            <tr>
                                <td id="b3216">3216번</td>
                                <td class="wfont g_color">초록(지선)</td>
                                <td class="left">오금동 ↔ 청량리 </td>
                                <td class="left">어린이대공원앞</td>
                            </tr>
                            <tr>
                                <td id="b3220">3220번</td>
                                <td class="wfont g_color">초록(지선)</td>
                                <td class="left">오금동 ↔ 청량리</td>
                                <td class="left">어린이대공원역(화양천주교회)</td>
                            </tr>
                            <tr>
                                <td id="b4212">4212번</td>
                                <td class="wfont g_color">초록(지선)</td>
                                <td class="left">사당동 ↔ 중곡3동 </td>
                                <td class="left">어린이대공원앞</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="back_gate">
                    <h4><i class="material-icons">trip_origin</i>어린이대공원 후문 방향 버스노선</h4>
                    <table width="100%" class="para02 data" summary="어린이대공원 후문 방향 버스노선을 버스번호, 버스유형, 주요노선으로 나누어 작성한 표입니다.">
                        <caption class="hide">어린이대공원 후문 방향 버스노선</caption>
                        <thead>
                            <tr>
                                <th scope="col">버스번호</th>
                                <th scope="col">버스유형</th>
                                <th scope="col">기점↔종점</th>
                                <th scope="col">하차정류소</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="b130">130번</td>
                                <td class="wfont blue_color">파랑(간선)</td>
                                <td class="left">우의동 ↔ 길동</td>
                                <td class="left">어린이대공원후문아차산역</td>
                            </tr>
                            <tr>
                                <td id="b320">320번</td>
                                <td class="wfont blue_color">파랑(간선)</td>
                                <td class="left">송파공영차고지 ↔ 중랑구청</td>
                                <td class="left">어린이대공원후문</td>
                            </tr>
                            <tr>
                                <td id="b370">370번</td>
                                <td class="wfont blue_color">파랑(간선)</td>
                                <td class="left">강동공영차고지 ↔ 서대문역</td>
                                <td class="left">어린이대공원후문아차산역</td>
                            </tr>
                            <tr>
                                <td id="b2311">2311번</td>
                                <td class="wfont g_color">초록(지선)</td>
                                <td class="left">중랑공영차고지 ↔ 문정동</td>
                                <td class="left">어린이대공원후문아차산역</td>
                            </tr>							
                            <tr>
                                <td id="b2221">2221번</td>
                                <td class="wfont g_color">초록(지선)</td>
                                <td class="left">자양동 ↔ 신설동</td>
                                <td class="left">어린이대공원아차산역</td>
                            </tr>
                            <tr>
                                <td id="b9301">9301번</td>
                                <td class="wfont dred_color">빨강(광역)</td>
                                <td class="left">상산곡동.공영차고지 ↔ 서울역버스환승센터 </td>
                                <td class="left">어린이대공원아차산역</td>
                            </tr>
                            <tr>
                                <td id="b9403">9403번</td>
                                <td class="wfont dred_color">빨강(광역)</td>
                                <td class="left">구미동차고지 ↔ 동대문</td>
                                <td class="left">어린이대공원아차산역</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="guui_gate">
                    <h4><i class="material-icons">trip_origin</i>어린이대공원 구의문 방향 버스노선</h4>
                    <table width="100%" class="para02 data" summary="어린이대공원 구의문 방향 버스노선을 버스번호, 버스유형, 주요노선으로 나누어 작성한 표입니다.">
                        <caption class="hide">어린이대공원 구의문 방향 버스노선</caption>
                        <thead>
                            <tr>
                                <th scope="col">버스번호</th>
                                <th scope="col">버스유형</th>
                                <th scope="col">기점↔종점</th>
                                <th scope="col">하차정류소</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="b303">303번</td>
                                <td class="wfont blue_color">파랑(간선)</td>
                                <td class="left">상대원차고지 ↔ 신설동 </td>
                                <td class="left">구의사거리</td>
                            </tr>
                            <tr>
                                <td id="b320_2">320번</td>
                                <td class="wfont blue_color">파랑(간선)</td>
                                <td class="left">송파공영차고지 ↔ 중랑구청 </td>
                                <td class="left">구의사거리</td>
                            </tr>
                            <tr>
                                <td id="b2221_2">2221번</td>
                                <td class="wfont g_color">초록(지선)</td>
                                <td class="left">자양동 ↔ 신설동</td>
                                <td class="left">구의사거리</td>
                            </tr>
                            <tr>
                                <td id="b2311_2">2311번</td>
                                <td class="wfont g_color">초록(지선)</td>
                                <td class="left">중랑공영차고지 ↔ 문정동</td>
                                <td class="left">구의사거리</td>
                            </tr>
                            <tr>
                                <td id="b9403_2">9403번</td>
                                <td class="wfont dred_color">빨강(광역)</td>
                                <td class="left">구미동차고지 ↔ 동대문</td>
                                <td class="left">구의사거리</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="car">
                <h3>자가용 이용시</h3>
                <table width="100%" class="para02 data" summary="자가용 이용시 지역과 이동방향으로 나누어 작성한 표입니다.">
                    <caption class="hide">자가용 이용시</caption>
                    <colgroup>
                        <col width="25%">
                        <col width="*">
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col">지 역</th>
                            <th scope="col">이동방향</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>은평등 서북부지역</td>
                            <td class="left">* 내부순환로 → 강변북로 → 자양사거리직진 → 어린이대공원구의문<br>
                            * 내부순환로 → 마장램프 → 천호대로 → 어린이대공원 후문 </td>
                        </tr>
                        <tr>
                            <td>성북,강북,노원,도봉지역</td>
                            <td class="left">* 동부간선도로 → 천호대로 → 아차산역 → 어린이대공원후문</td>
                        </tr>
                        <tr>
                            <td>종로,중구,서대문,등 도심지역</td>
                            <td class="left">* 천호대로 → 군자사거리 → 아차산역 → 어린이대공원후문</td>
                        </tr>
                        <tr>
                            <td>영등포,동작,관악등 남서부지역</td>
                            <td class="left">* 88대로 → 영동대교 → 화양고가밑우회전 → 능동사거리좌회전 → 어린이대공원정문</td>
                        </tr>
                        <tr>
                            <td>서초,강남 등 강남지역</td>
                            <td class="left">* 성수대교 건너 우회전하고 계속직진 → 능동사거리에서좌회전 → 어린이대공원정문</td>
                        </tr>
                        <tr>
                            <td>일산,파주,김포,남부지역</td>
                            <td class="left">* 외곽순환로 → 올림픽대로 → 천호대교 → 아차산역삼거리P턴 → 어린이대공원후문</td>
                        </tr>
                        <tr>
                            <td>인천방향</td>
                            <td class="left">* 경인고속도로 → 88대로 → 영동대교 직진 → 성수사거리 직진 → 화양리사거리우회전 → 어린이대공원정문</td>
                        </tr>
                        <tr>
                            <td>분당방향</td>
                            <td class="left">* 청담대로 → 청담대교 직진 → 건국대학교에서 직진 → 어린이대공원정문</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            const mapOptions = {
                center: new naver.maps.LatLng(37.549606, 127.081573),
                zoom: 15
            };

            const map = new window.naver.maps.Map('map', mapOptions);

            const marker = new window.naver.maps.Marker({
                position: new window.naver.maps.LatLng(37.549606, 127.081573),
                map: map
            });

            window.naver.maps.Event.addListener(marker, 'click', () => {
                window.open('https://map.naver.com/p/entry/place/11796387?lng=127.08092120000022&lat=37.54989869817625&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh', '_blank');
            });
        },
        
        scrollToSubway() {
            const subwaySection = this.$el.querySelector('.subway');
            subwaySection.scrollIntoView({ behavior: 'smooth' });
        },
        scrollToCar() {
            const carSection = this.$el.querySelector('.car');
            carSection.scrollIntoView({ behavior: 'smooth' });
        },

    },

    mounted() {
        const script = document.createElement('script');
        script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=dcgsau299x&submodules=geocoder';
        script.onload = () => {
            this.initMap();
        };
        document.head.appendChild(script);
    }

}
</script>

<style scoped>
#location {
    margin: 50px auto 100px;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    gap: 100px;
}

.use_gnb ul li:nth-child(6) {
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
.location_content_wrap {
    width: 980px !important;
    /* margin: auto; */
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

.map_address, .map_shortcut, .subway, .car {
    margin-bottom: 70px;
}
#map {
    margin-bottom: 20px;
}

/* 주소 */
.map_address p {
    display: flex;
    align-items: center;
    margin-left: 10px;
    /* font-size: 17px; */
    margin-bottom: 7px;
    /* margin-top: 10px; */
}

/* 버튼 */
.map_shortcut {
    display: flex;
    justify-content: center;
    margin: 20px 0 50px;
    gap: 30px;
}
.map_shortcut button {
    font-size: 20px;
    width: 45%;
    padding: 5px;
}
.subway_btn {
    border: 1px solid #0389d0;
    color: #fff;
    background: #0389d0;
}
.car_btn {
    border: 1px solid #0389d0;
    color: #fff;
    background: #0389d0;
}

/* 테이블 */
table {
    text-align: center;
    margin-bottom: 80px;
}
td, th {
    padding: 10px;
}
tbody td:first-child {
    border-left: none;
}



@media screen and (max-width: 1024px) {
    #location{
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