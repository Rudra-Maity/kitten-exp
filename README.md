# 😸 Exploding Kitten, a web-based game. 

This will be an online single-player card game that consists of 4 different types of cards

- Cat card 😼
- Defuse card 🙅‍♂️
- Shuffle card 🔀
- Exploding kitten card 💣

There will be a button to start the game. When the game is started there will be a deck of 5 cards ordered randomly. Each time user clicks on the deck a card is revealed and that card is removed from the deck. A player wins the game once he draws all 5 cards from the deck and there is no card left to draw. 

Rules –
- If the card drawn from the deck is a cat card, then the card is removed from the deck.
- If the card is exploding kitten (bomb) then the player loses the game.
- If the card is a defusing card, then the card is removed from the deck. This card can be used to defuse one bomb that may come in subsequent cards drawn from the deck.
- If the card is a shuffle card, then the game is restarted and the deck is filled with 5 cards again.


features:
1. Automatically saves the game for a user at every stage so the user can continue from where he left off last time.
2. Real-time update of points on the leaderboard for all the users if they are playing simultaneously. 

## Steps to Run

This guide provides instructions on how to run the project.


## Prerequisites

1. **Node.js (with npm)**

2. **Download Redis for Windows:**

You can download Redis for Windows from the official GitHub repository: MicrosoftArchive/redis. 


3. **Extract the Files:**

Once the download is complete, extract the contents of the downloaded zip file to a directory on your computer. For example, you can extract it to C:\Redis.


4. **Run Redis Server:**

Open a Command Prompt window with administrator privileges.


5. **Navigate to Redis Directory:**

Use the cd command to navigate to the directory where you extracted Redis. For example:

 ```bash
cd C:\Redis
```


6. Start Redis Server:

Run the following command to start the Redis server:

 ```bash
redis-server.exe
```


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. **Download And Extract the Repository:**

2. **Navigate into the project directory, Install dependencies And Run the project:**

    ```bash
    cd backend
    npm install
    npm start
    ```
    ```bash
    cd frontend
    npm install
    npm start
    ```


