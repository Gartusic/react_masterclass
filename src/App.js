import styled from "styled-components";

//styled components의 사용
const Father = styled.div`
  display: flex;  
`;
const Box1 = styled.div`
  background-color:${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box1)`
  border-radius: 50px;

`; // Box1에 있는 모든 속성을 가져온 후 변형시킬 수 있음.

const Input = styled.input.attrs({required:true, minLength:10})`
  background-color: tomato;
`; // 일일히 작업하지 않고 한꺼번에 애트리뷰트를 줄 수 있다!

// you must use 'back tick'!!
function App() {
  return (
    <Father>
      <Box1 bgColor="teal">
      </Box1>
      <Circle bgColor="tomato" as="a" href="/">
        <Input></Input>
        <Input></Input>
        <Input></Input>
        <Input></Input>
      </Circle>
    </Father>
  );
}
// as="" 는 컴포넌트의 성질을 바꿔준다~!?! Circle이 div -> a로 바뀜


export default App;
