// С типами транзакций 
(async function () {
    for (let i = 0; i <= 10000; i++) {
        try {
            res = await fetch('http://localhost:3001/api/user/1/balance', {
                method: "POST",
                body: JSON.stringify({
                    "amount": 2,
                    "type": "WITHDRAW" // "DEPOSIT"(пополнение) || "WITHDRAW"(списпние)
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            body = await res.json()
            if (res.status > 200) throw new Error(JSON.stringify(body))

            console.log(`${i} ${JSON.stringify(body)}`)

        } catch (err) {
            console.error(`${i} ${err}`)
        }
    }
})()