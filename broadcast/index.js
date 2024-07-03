
import {broadcastTransaction, checkTransactionStatus} from './src/transaction-client-module.js'

const main = async () => {
    const { tx_hash } = await broadcastTransaction("ETH", 4500)
    const { tx_status } = await checkTransactionStatus(tx_hash)
    console.log({ tx_hash, tx_status })
}

main()
