## HUMANITY PROTOCOL

![images](assets/images.png)

An automated bot for claiming THP tokens and rewards on the Humanity Protocol testnet.

---

## Features

- Automatically claims THP from faucet
- Auto claims rewards
- Performs bridge operations when conditions are met
- Supports multiple wallets
- Beautiful colored console output
- Automatic retry mechanism
- Error handling and recovery
- Accurate countdown timers

---

## Requirements

- Node.js v16 or higher
- npm or yarn package manager
- A wallet with some ETH for gas fees

---

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Rambeboy/Humanity.git && cd Humanity
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

5. Set up your private keys:
- Edit `data.txt` file in the root directory and add your private keys (one per line):

  ```
  privatekeywithout0x
  anotherprivatekeywithout0x
  ```

---

## Usage

1. First, [Register on Humanity Protocol](https://testnet.humanity.org/login?ref=kingnode)

2. Input code: `kingnode`

3. Run the bot:

```bash
node main.js
```

---

## Features Explanation

- **Automatic THP Claiming**: Claims THP from faucet every 8 hours
- **Reward Claiming**: Automatically attempts to claim rewards when available
- **Bridge Operations**: Performs bridge transactions when balance conditions are met
- **Multi-wallet Support**: Processes multiple wallets sequentially
- **Smart Retry System**: Automatically retries failed operations
- **Colorful Console Output**: Easy-to-read, color-coded console messages

---

## Default Timings

- Wait between wallets: 3 seconds
- Wait between claim rounds: 8 hours
- Retry delay: 5 seconds
- Claim attempts: 3 times before giving up

---

## Important Constants

```javascript
MIN_BALANCE_FOR_REWARD: 0.001 THP
MIN_BALANCE_FOR_BRIDGE: 1.1 THP
BRIDGE_AMOUNT: 1 ETH
```

---

## Security

- Never share your private keys
- Always test with small amounts first
- Keep your privatekey.txt file secure
- Don't expose your bot instance publicly

---

## Error Handling

The bot includes comprehensive error handling:

- Network connectivity issues
- Transaction failures
- API timeouts
- Invalid responses

---

## Disclaimer

This bot is for educational purposes only. Use at your own risk. Always verify transactions and monitor your wallet activity.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Thanks to Humanity Protocol for creating an amazing platform
- Thanks to all contributors and testers

**Remember to always keep your private keys secure and never share them with anyone.**


---
