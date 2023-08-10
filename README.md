# Jammming: Create a Playlist App With the Spotify API (Part One)

Welcome to the **Jammming** project! In this project, you will build a React web application that allows users to search the Spotify library, create a custom playlist, and save it to their Spotify account.

You can check it out on this link: [Jammming](https://black-jack-game-alpha.vercel.app/) 

## Overview

Jammming is a web application built using React, JavaScript, and the Spotify API. Users can search for songs in the Spotify library, add them to a custom playlist, and then save the playlist to their own Spotify account. The app utilizes React components, state management, and API requests to provide a seamless and interactive experience.

## Project Structure

The project is structured as follows:

- `spotify.js`: This module handles communication with the Spotify API. It provides methods to retrieve access tokens, search for tracks, and save playlists to a user's Spotify account.

- `App.js`: This is the main component of the Jammming app. It manages the state of the application, including search results, playlist name, and playlist tracks. It also handles user interactions such as adding/removing tracks from the playlist and saving the playlist.

## Getting Started

To run the Jammming app on your local machine, follow these steps:

1. Clone or download this repository to your local machine.

2. Install the required dependencies by running the following command in the project directory:
   ```
   npm install
   ```

3. Create a Spotify developer account and register an app to obtain your `clientID`. Update the `clientID` and `redirectURI` in the `spotify.js` module with your credentials.

4. Run the app by executing the following command:
   ```
   npm start
   ```

5. Open your web browser and navigate to `http://localhost:3000` to use the Jammming app.

## Features

- **Search for Tracks:** Users can search for tracks in the Spotify library by entering keywords in the search bar.

- **Add to Playlist:** Users can add tracks from the search results to their custom playlist.

- **Remove from Playlist:** Users can remove tracks from the playlist by clicking the "X" button.

- **Edit Playlist Name:** Users can edit the name of their custom playlist.

- **Save Playlist:** Users can save their custom playlist to their Spotify account.

## Technologies Used

- React
- JavaScript
- Spotify API

## Usage

1. Open the Jammming app in your web browser.

2. Search for tracks by entering keywords in the search bar and pressing Enter.

3. Browse the search results and click the "+" button to add tracks to your custom playlist.

4. To remove a track from the playlist, click the "X" button next to the track.

5. Edit the name of your playlist by clicking on the playlist name.

6. Click the "SAVE" button to save your custom playlist to your Spotify account.

## Acknowledgements

This project was developed as part of a learning experience to practice React, state management, and API integration. Special thanks to the Spotify API for providing access to a wide range of music data.

---

Start jamming to your favorite tunes with the Jammming app! If you have any questions or feedback, feel free to contact me.

Enjoy the music! 🎵🎶
