function scrollToGames() {
    document.getElementById('games').scrollIntoView({behavior: 'smooth'});
}

// Add event listeners
document.getElementById('browseGamesBtn').addEventListener('click', scrollToGames);
document.getElementById('startPlayingBtn').addEventListener('click', scrollToGames);