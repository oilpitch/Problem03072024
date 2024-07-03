1. Baby Boss (babyboss.js) - The idea of this problem is that if the string is more than 2 characters and starts with 'S' (shot) and ends with 'R' (revenge), then Boss Baby would be a "Good boy." Otherwise, he is a "Bad boy." By checking only these edge cases (string length and whether the string starts with 'S' and ends with 'R'), the complexity of this problem is O(1)(constant time).

2. Superman (superman.js) - Since this problem involves finding the maximum number of elements (chickens) that can be covered by a subarray (the roof) of a fixed length k, I chose the sliding window technique to solve this problem. The complexity is O(n), where n is the number of chickens.
    
3. Broadcast (broadcast folder)
    - The module that interact with the server is in this file `src/transaction-client-module.js`
        - The document about broadcasting and monitoring transaction is in the `Transaction Broadcasting and Monitoring Client.pdf`
    - You could run this project by following these step
        1. `$yarn` - to install the dependencies
        2. `$yarn start` - to run the `index.js` file (anotner example of how to usage the transaction modules)