
## 시작
- frontend 파일에서 <code> npm start</code>

## 경로
<code>http://localhost:3000/nova </code> <br/>
- nova 뒤에 notice 등등 link 걸어주면서 사용하면 됩니다
- nova로 시작하거나 엉뚱한 url로 들어가면 페이지접근불가 페이지 생성

## 컨테이너 기준
- container를 기준으로 ```width : 1440px```, banner는 ```width : 1200px```,
- banner와 footer를 독립적으로 1200로 만들었기때문에 내용물에 영향을 주진 않을꺼임
- 내용물을 배너와 같은 width로 하고싶다면 1200px를 기준으로 진행하면된다.

## 라우터
노바페이지와 에러페이지(접근금지)를 나누기위해 중첩 라우터를 사용했습니다.

App.js 가 부모 라우터 SubRouter.jsx 가 Nested 입니다.

## 새로운 페이지에대한 링크를 걸고 싶다면?
![image](https://github.com/nova-platform-mk2/NovaHomePage/assets/42410000/7a9552a7-7b01-457c-b286-4fc11081fa98)
![image](https://github.com/nova-platform-mk2/NovaHomePage/assets/42410000/3f9916c9-0261-4815-af37-a12146d7f8ba)

- 주의 : 중첩 라우터 링크는 <code>/notice</code>가 아닌 <code>notice</code> 처럼 입력해줘야 된다.

## 파일 분배
![image](https://github.com/nova-platform-mk2/NovaHomePage/assets/42410000/f7b7a43c-608d-4439-ab15-0d52a0414e89)
- 컴포넌트가 많아지면 나누는게 좋다
- 하지만 아직 요구사항을 잘 몰라서 ```Pages``` 폴더만 만들어놓음 경로는 쉽게 바꿀수 있으니까 필요한대로 사용하면될듯
