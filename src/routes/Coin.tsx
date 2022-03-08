import { useParams } from "react-router";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";


interface RouteParams {
  coinId: string;
}

const Header = styled.header `
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color:${props => props.theme.accentColor};
`;


const Loader = styled.span`
  text-align: center;
  display: block;

`;

const Container = styled.div `
  padding: 0px 20px ;
  max-width: 480px;
  margin: 0 auto;
`;

interface RouterState{
  name:string;
}

interface InfoData{

}
interface PriceData{
  
}

function Coin() {
  const [loading, setLoading] = useState(false);
  const { coinId } = useParams<RouteParams>();
  const {state} = useLocation<RouterState>();  
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  console.log(coinId);
  useEffect(() =>{
    ( async () => {
      const infoData = await(
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      
      const priceData = await(
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      setInfo(infoData);
      setPriceInfo(priceData);
  }) ();
  }, []);
  return (    
  <Container>
    <Header>
      <Title>{state?.name || "Loading"}</Title>
    </Header>
    {loading ? (
    <Loader>Loading... </Loader>) : null}
  </Container>
  );
}
export default Coin;