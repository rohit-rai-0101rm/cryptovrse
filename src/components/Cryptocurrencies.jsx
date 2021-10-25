import React,{useState} from 'react'
import millify from 'millify'
import{Link} from 'react-router-dom'
import {Card,Row,Col,Input} from 'antd'
import { useGetCryptosQuery } from '../Services/cryptoApi'
const Cryptocurrencies = () => {
    const {data:cryptosList,isFetching}=useGetCryptosQuery();
    const[cryptos,setCryptos]=useState(cryptosList?.data?.coins)
    console.log(cryptos);
    return (
        <>
        <Row gutter={[32,32]} className="crypto-card-container">
            {cryptos.map((curr)=>(
                <Col xs={24} sm={12} lg={6} className="crypto-card" key={curr.id}>
                    
                    <Link to={`/crypto/${curr.id}`}>
                    <Card title={`${curr.rank}. ${curr.name}`} extra={<img className="crypto-image" src={curr.iconUrl} />} hoverable>
                <p>Price: {millify(curr.price)}</p>
                <p>Market Cap: {millify(curr.marketCap)}</p>
                <p>Daily Change: {curr.change}%</p>
              </Card>
                    </Link>
                </Col>
            ))}

        </Row>
        </>
    )
}

export default Cryptocurrencies
