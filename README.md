# AWESOME NY TIMES

New York Times Open API를 활용하여 뉴스 기사 목록 불러오는 웹 애플리케이션 구현

## 실행 방법

1. 프로젝트를 클론 받아 해당 디렉토리로 이동합니다.
    ```shell
    git clone https://github.com/sounmind/awesome-ny-times.git
    cd awesome-ny-times
    ```
2. 프로젝트 실행에 필요한 dependencies 를 설치합니다.
    ```shell
    npm start
    ```
3. 프로젝트 루트에 `.env` 파일을 만들어 New Your Times OPEN API의 key를 작성합니다. 아래는 예시입니다.
    ```shell
    REACT_APP_API_KEY=${YOUR_API_KEY}
    ```
4. 아래 명령어를 입력하여 프로젝트를 실행합니다. (https://localhost:3000 에서 실행됩니다)
    ```shell
    npm start
    ```

## 기능
- 기사 목록 불러오기 & 다음 페이지의 기사들을 더 불러와 볼 수 있습니다.
- 기사 즐겨찾기하여 즐겨찾기한 기사만 볼 수 있습니다.
- 즐겨찾기한 기사를 다시 해제할 수 있습니다.

## 배웠던 것들
- 리액트 디렉토리 구조, 정답은 없지만 고민할 수록 좋은 개발자가 되어가는 것 같습니다.
  - 이전에는 대부분의 컴포넌트를 `src/components`에 집어 넣고 개발했었습니다. 이번에는 여러 자료를 참고하며 제가 판단하기에 프로젝트에 맞는 디렉토리 구조로 변화를 주었습니다. 예를 들어, '페이지'와 같은 큰 단위의 컴포넌트와 일반 컴포넌트를 분리했습니다. 그러니 `src/components`에는 재사용과 레이아웃을 위한 컴포넌트밖에 남지 않았는데, 더 관심사의 분리가 된 듯한 느낌이어서 좋았습니다.
- Redux Thunk에서 기본적으로 제공하는 기능들의 사용법
  - 이번에 Redux의 Thunk를 처음 사용했습니다. 전역 상태 관리를 하는 만큼 주요 로직인 API 요청이 리듀서에 있지 않고 외부에 있는 것이 어색하고 맞지 않아 보였고, Redux에서 제공하는 다양한 기능을 체험해보기 위해 Thunk를 사용하게 되었습니다. 덕분에 기능을 구현하면서 생소함에 여러 시행착오를 겪기도 하고, 아직 이해를 다 하지 못한 부분도 있습니다. 하지만 새로운 것을 배우고 그것을 활용했다는 기쁨이 더 크네요!
- 리액트와 타입스크립트
  - 이전 프로젝트 보다 타입 정의를 명확히 하고 여러 에러에 부딪치고 해결하면서 타입스크립트를 조금씩 더 이해해가는 것 같습니다.

## 어렵거나 아쉬웠던 것들
- Responsive Design
  - CSS Flexbox와 min-width를 사용해서 유동적으로 화면 크기에 대응하는 것밖에 반응형 디자인을 하지 못해서 아쉽습니다.
- 테스트 코드를 작성하지 못해 아쉽습니다. 전역에서 주요한 상태를 관리하면서 리듀서만 테스트 하면 좋은 상황을 만들었는데, 결국 제한 시간 내에 테스트 코드를 작성하지 못했습니다.
- 깃 플로우 전략
  - 주어진 시간이 하루라는 짧은 시간이라 급하게 코드를 작성하느라 더 세부적인 브랜치와 커밋을 하지 못했습니다.

## 감사의 말씀

하루 동안 하는 짧은 과제라, 실제로도 이렇게 급하게 구현할까? 상상하면서 긴박하지만 즐겁게 구현했던 과제였습니다. 리액트, 타입스크립트, 리덕스, 페이지네이션 방법을 고민할 수 있는, 좋은 기회를 주셔서 감사합니다!


