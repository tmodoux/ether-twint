import React, { useEffect, useState } from "react";
import contract from "../ethereum/contract";
import QRCode from "react-qr-code";
import {Divider, Input, Message} from "semantic-ui-react";

const Home = () => {
    const [owner, setOwner] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getOwner() {
            try {
                setLoading(true);
                setErrorMessage("");
                const owner = await contract.methods.owner().call();
                setOwner(owner);
            } catch(e: any) {
                setErrorMessage(e.message || e);
            }
            setLoading(false);
        }
        getOwner();
    }, []);
    
    return (
        <div>
            <Divider/>
            <Input
                loading={loading}
                value={amount}
                onChange={e => setAmount(e.target.value)}
                label="wei"
                labelPosition='right'
            />
            <Divider/>
            {owner && amount && <QRCode value={`https://tmodoux.github.io/ether-twint/#/pay/${owner}/${amount}`}/>}
            {!!errorMessage && <Message header="Oops!" error content={errorMessage}/>}
        </div>
    );
}

export default Home;