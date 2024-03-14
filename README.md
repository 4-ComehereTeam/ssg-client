 반드시 `yarn run dev` ❗❗❗


# FE Code Convention 🎯

```
생산성을 위해 Air bnb react style guide의 일부만 채택

1️⃣ 1개의 컴포넌트에는 가능한 1개의 기능만 !

2️⃣ 컴포넌트는 함수 표현식으로 작성
    ▪ arrow function은 이벤트핸들러 위주로
    
3️⃣ Mixins.를 되도록 사용하지 말 것 ( ex. tailwind와 BootStrap을 함께사용)
    : 잠재적인 dependencies를 
    도입하고, 이는 name 충돌이나 snowballing 복잡성을 일으킴. 
        대부분 Mixins를 사용한는 경우는 컴포넌트나 HOC, uility modules로 해결가능
    ▪ 하나의 UI 라이브러리만 사용하기
    
4️⃣ Naming
    ▪ next.js의 컨벤션 규칙은 제외
        - app route는 소문자로
    ▪ File name : PascalCase 사용 ( CamelCase와 유사, 첫 자가 대문자 )  
    ▪ Reference name : 컴포넌트는 PascalCase, instance는 CamelCase 사용
    ▪ 컴포넌트는 PascalCase, .ts 파일은 CamelCase, 디렉토리는 첫 자가 소문자
    ▪ props name : CamelCase 사용
    ▪ typescript의 type, interface명은 PascalCase
    
5️⃣ 명확하게 속성 값이 true이면, 명시적으로 true를 적지 않을 것

6️⃣ <img>의 alt props에 "image"나 "photo", "picture"가 들어가지 않도록 할 것
    ▪ 스크린리더가 이미 <img>를 읽으면 이미지인줄 압니다.
    
7️⃣ map 함수 등에서 index 인자를 key의 값으로 할당하지 말 것

8️⃣ non-required props(optional props)에 대한 명확한 defaultProps를 항상 정의 할 것
    : 왜냐하면 코드 읽는 사람이 해당 값들을 추측할 필요가 없고, type checks를 생략할 수 있게 
    할 수 있음
    => 상황에 따라 다르게 적용하기    

9️⃣ spread props를 절제하여 사용할 것
    : 그렇지 않으면, 불필요한 props를 components에 내려줄 수 있으므로
    
🔟 children이 없으면 self-close tags를 사용할 것
    ▪ children을 명시하지 않아도 props를 갖고 오면 children을 호출하게 됨

⏸ 쌍따옴표 "" 사용하기
```

##### .prettierrc 설정 🌊


```typescript
    {
      "semi": false,
      "singleQuote": false,
      "tabWidth": 2,
      "trailingComma": "all"
    }
```

##### .eslintrc.json 설정 🌈
```
```

##### Next.js 프로젝트 컨벤션 ⚡

```
    ▪ yarn을 사용합니다.
    ▪ src  : 아래의  디렉토리/파일들 중 설정 디렉토리/파일을 제외한 모든 것을 모아두는 곳
        ▫ src를 사용할 때 미들웨어를 사용하는 경우, 미들웨어가 src 디렉토리 안에 있는지
        확인하세요.
    ▪ app : Next.js에서 컴포넌트를 화면에 나타내는 곳, URL 라우팅 처리
    ▪ components : app 밖에 위치하며, 공통으로 사용되는 리액트 컴포넌트
    ▪ types : 컴포넌트 내부에서 공통적으로 사용 될 타입스크립트의 타입들을 모아두는 곳
    ▪ public : 이미지, 폰트, 동영상 등 정적 파일이 저장되는 폴더
    ▪ lib : app 밖에 있으며, 데이터들을 가져오거나 공통적으로 함수를 만들어서 사용 할 곳
    ▪ hooks : app 밖에 있으며, 리액트 커스텀 훅을 모아두는 곳 ( 선택적 )
    ▪ data : 정적 데이터들을 모아서 사용하는 곳 (.ts)
```

```
    PORT : 3030
```

# FE Routing Convention 📁

src 
- app
    - member : 회원관리 디렉토리
        - signin : 로그인 디렉토리
        - findIdPw : 아이디/비밀번호찾기 디렉토리
        - signup : 회원가입 디렉토리
            - auth : 회원가입 
            - formEmail : 이메일 회원가입 
~~|- certLogin : 휴대폰 로그인~~
    - sns : 간편 로그인
        - login 
    - item
        - itemView
    - comm
        - category : 하단 네비바 카테고리
    - myssg
        - main : 하단 네비바 마이페이지
        - orderInfo : 주문/배송 조회 페이지
        - like : 좋아요 페이지
        - frequentlyOrderItem : 자주 구매한 상품 페이지
    - cart
        - shop : 장바구니 디렉토리
        - mulitiShop : ‘여러곳으로 한번에’ 디렉토리
    - order
        - ordPage : 주문 페이지
    - (home) : 메인 페이지
- components
- types
- public
- lib
- hooks
- data
