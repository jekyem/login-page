# Sample Login Page
이 프로젝트는 MongoDB, Node, React를 이용한 샘플 로그인 페이지를 만든 프로젝트 입니다.

## Install
### 프로젝트 설치
    > git clone https://github.com/jekyem/login-page.git
    > npm install
### 몽고 DB 설치
    MongoDB [홈페이지](https://www.mongodb.com/)에서 설치

## 실행 명령어
    > npm start
        서버 실행(localhost:8080) watch 모드로 소스 변경시 바로 적용
    > npm run build
        FrontEnd, Backend build
    > npm run buildServer
        Backend build
    > npm run buildClient
        Frontend build
    > npm run watchServer
        Backend watch 모드로 build
    > npm run watchClient
        Frontend watch 모드로 build

## 디렉토리 구성 및 웹팩 구성
### 디렉토리
src 디렉토리는 client, server 2부분으로 나뉘어져 있다.

>
> #### client
> 1개의 Page당 1개의 폴더를 가진다.
>
>(encryption은 예외 적으로 모든 페이지에서 사용목적으로 최 상위 폴더에 위치 시켰다.)
>
>#### server
>일반 express 프로젝트와 비슷한 폴더 구성을 가진다.
>
>routes폴더는 route관련된 모듈들이 있고, api는 webAPI관련 모듈이 있다.
>
>나머지 폴더들은 서버에서 사용할 클래스 및 모듈의 폴더이다.
>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![ProcectDirectory](./readme_img/ProcectDirectory.jpeg)
>
>#### webpack / babel
>프로젝트를 빌드 하면, 위와 같이 build폴더가 생긴다.
>
>webpack은 client 파일을 빌드하여 public, views폴더에 저장 및 >server의 key파일 복사를 한다.
>
>babel은 server를 es6문법으로 변환한다.

## DB구성


## API 설명


## 통신 암호화

작성중 ...