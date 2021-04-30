import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>실험 테스트입니다.</h1>
      <p>안녕하세요 UX 사용성 실험에 참가해주셔서 감사합니다. </p>
      <img src="https://miro.medium.com/max/1200/1*Fq1ITNx3AaF51lHVqAwjUQ.png" />
      <p> 다음의 버튼을 누르시면 실험이 시작됩니다. </p>
      <input
        id="go_home"
        type="button"
        onclick="newPage()"
        value=" 다음 페이지로 이동"
      />
    </div>

    // <!-- function newPage() {(location.href = "page2.html")}" -->
  );
}
/*
 버튼을 누르면 다음 페이지로 이동 
--> <input type="button" value="확인" onClick="self.location='이동할페이지';">

function page_href() {

location.href = "link_page.html";

}

document.loaction.href = "";


function execTime() {
  var nStart = new Date().getTime(); //시작시간 체크(단위 ms)
  page_1();
  var nEnd = new Date().getTime(); //종료시간 체크(단위 ms)
  var nDiff = nEnd - nStart; //두 시간차 계산(단위 ms)

  alert(nDiff + "ms");
}
*/
