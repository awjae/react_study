### 리액트 공부 (리액트를 다루는 기술) 

> 오직 뷰만 신경 쓴 라이브러리

주요특징 : Virtual DOM을 사용
1. DOM(Document Object Model)은 객체를 문서구조로 표현하는방법 = XML HTML
2. 웹브라우저는 DOM을 사용하여 객체에 자바스크립트와 CSS를 적용
3. DOM API는 동적인 활동에 최적화 되어있지 않아 DOM자체는 빠르더라도 변화가 일어나면 웹브라우저가 css를 다시연산하고 레이아웃을 구성하고 페이지를 리페인트 함으로 시간이 소요된다.
4. 리액트는 Virtual DOM 방식을 사용하여 DOM 업데이트를 추상화함으로써 DOM 처리 횟수를 최소화 하고 효율적으로 진행
5. DOM에 직접 조작하는대신 자바스크립트 객체를 구성하여 사용
    5-1. 데이터를 업데이트하면 UI를  Virtual DOM에 랜더링
    5-2. 이전 Virtual DOM의 내용과 비교
    5-3. 바뀐 부분만 실제 DOM에 적용
6. 무조건 빠른것이 아니라 지속적으로 데이터가 변화하는 대규모 애플리케이션에 적합



JSX란?
> 리액트용 자바스크립트 확장 문법
