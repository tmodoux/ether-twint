import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Header, Message } from "semantic-ui-react";
import contract from "../ethereum/contract";
// @ts-ignore
import web3 from "../ethereum/web3";

const Pay = () => {
    const { owner, amount } = useParams();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        setErrorMessage("");
        try {
            // @ts-ignore
            const accounts = await web3.eth.getAccounts();
            await contract.methods.pay().send({ 
                from: accounts[0],
                value: amount,
            });
            setSuccess(true);
        } catch(e: any) {
            setErrorMessage(e.message || e);
        }
        setLoading(false);
    }

    return (
        <div>
            {success ? 
                <Message success>
                    <Header>Payment successful !</Header>
                    Thank you
                </Message> : 
                <Message header="Payment confirmation" warning>
                    <Header>Payment confirmation</Header>
                    Pay {<b>{amount}</b>} wei to {<b>{owner}</b>} ?
                </Message>
            }
            {success || <Button loading={loading} color="green" onClick={handleClick}>Accept</Button>}
            {!!errorMessage && <Message header="Oops!" error content={errorMessage}/>}
        </div>
    );
}

export default Pay;