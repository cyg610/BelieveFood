빌리 풋 (가제 : 망고망덕 MGMDproject )

1. 작품개요
반려동물마다 식성이 달라 반려동물에 취향에 맞는 간식 주문제작 사이트를 만들고자 했습니다.

2.개발환경

![그림1](https://user-images.githubusercontent.com/39265738/113585283-fcf9ec00-9666-11eb-8b51-eea53be46886.png)

3. 프로세스 정의 및 흐름

![그림2](https://user-images.githubusercontent.com/39265738/113585263-f8cdce80-9666-11eb-90d2-436ef6ea3aef.png)


프로세스 정의
① 사용자 → 주문 요청 메일 수신, 수제 간식 선택, 게시판
: 사용자는 수제 간식 선택에서는 맞춤형 수제 간식을 선택하여 주문, 주문 시 주문 내역을 메일로 받을 수 있음. 게시판에서는 후기 글을 등록 가능
② 관리자 → 주문 요청 메일 송신, 수제 간식 선택, 게시판
: 관리자는 수제 간식 선택란 수정, 게시판/사용자 정보 관리

흐름(순서)
① [빌리풋 웹사이트 접속]
② [수제 간식 정보 확인]: [PRODUCT] 카테고리에서 다양한 수제 간식 정보를 확인 가능합니다.
③ [수제 간식 주문 제작 요청]: [ORDER] 카테고리에서 반려동물 식성에 맞는 맞춤형 간식을 주문할 수 있습니다. 주메뉴, 반려동물 연령대, 특이사항 체크/기입을 통해 맞춤형 수제 간식 주문 제작 요청이 가능합니다.
④ [주문 내역 메일 송/수신]: 사용자는 수제 간식 주문 시, 주문 내역을 메일로 받습니다.
⑤ [게시판 리뷰 작성]: [REVIEW] 카테고리에서 후기를 작성할 수 있습니다. 게시판 형식으로 되어 있습니다.


4. 구현 화면
 
4-1. 메인화면

![그림3](https://user-images.githubusercontent.com/39265738/113585268-f9fefb80-9666-11eb-85af-af42ef2658b9.png)

4-2 제품화면

![그림4](https://user-images.githubusercontent.com/39265738/113585274-fa979200-9666-11eb-87a0-61cf0c1c5391.png)

4-3. 주문화면

![그림5](https://user-images.githubusercontent.com/39265738/113585280-fc615580-9666-11eb-8c1c-2fbc50637f2c.png)

4-4. 게시글화면

![그림6](https://user-images.githubusercontent.com/39265738/113585281-fc615580-9666-11eb-9215-f91f0057fae1.png)

![캡처5](https://user-images.githubusercontent.com/39265738/113586784-e05eb380-9668-11eb-94ad-de6290faa82c.JPG)



5. 소스코드

5-1. 주문 후 실행되는 소스코드


![캡처1](https://user-images.githubusercontent.com/39265738/113586314-50b90500-9668-11eb-9130-374640e732cf.JPG)

주문 내역 받으면 데이터베이스에 저장하고, 사용자의 메일로 주문내용을 전송합니다.

5-2. 게시글 소스코드

![캡처4](https://user-images.githubusercontent.com/39265738/113586321-51ea3200-9668-11eb-8d45-d947613676dc.JPG)

![캡처2](https://user-images.githubusercontent.com/39265738/113586319-51ea3200-9668-11eb-89b7-2682820d62bd.JPG)

post 함수를 통해 데이터베이스에 저장된 데이터를 불러 온 후 바인딩합니다.




