function solution(players, callings) {
    const playerObj = {};
    const rankObj = {};
    
    players.forEach((player, index) => {
        playerObj[player] = index;
        rankObj[index] = player;
    });

    callings.forEach((player) => {
        const currentRank = playerObj[player];
        const newRank = currentRank - 1;

        const swappedPlayer = rankObj[newRank];

        playerObj[player] = newRank;
        rankObj[newRank] = player;

        playerObj[swappedPlayer] = currentRank;
        rankObj[currentRank] = swappedPlayer;
    });

    return Object.values(rankObj);
}