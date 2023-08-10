//import React from "react";

const clientID= '46f90462bc1347eaa9b049502a9734c9';
const redirectURI= 'http://dispensable-cannon.surge.sh';
let accessToken;


const Spotify = {
//gets Access token from spotify 
  getAccessToken() {
        if (accessToken) {
        return accessToken;
        }

        //check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);

        //this clears the parameters, allowing us to grab a new access token when old expires
        window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

        //this clears the parameters from the URL, so the app doesn’t try grabbing the access token after it has expired
        window.history.pushState("Access Token", null, "/");
        
        return accessToken;
        } 
        //if the access token variable is empty and is not in the URL uses implicit grant flow to get one
        else {
            const accessUrl= `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessUrl;
        }
       
        
    },

    // triggers a fetch request from the Spotify app to get the tracks and send them back to App.js as searchResults
    async search(term) {
        const accessToken = Spotify.getAccessToken();
        
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const jsonResponse = await response.json();
        if (!jsonResponse.tracks) {
            return [];
        } 
        //console.log(jsonResponse); to check if playlist is generating
        return jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
        }));
    },

    /*gets the parameters from app.js and checks if they exist
    */

    savePlaylist(name, trackUris) {
        if(!name || !trackUris.length) {
            return;
        }

        //gets Access token from spotify 
        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization:`Bearer ${accessToken}` };
        let userId;  let playlistId;

        /*  -to fetch the userId from spotify
            -POST a new playlist with the input name to the current user’s Spotify account. Receive the playlist ID back from the request
            -POST the track URIs to the newly-created playlist, referencing the current user’s account (ID) and the new playlist (ID)
        */
        return fetch('https://api.spotify.com/v1/me', {headers : headers}
        ).then(response => response.json()
        ).then(jsonResponse => {
            userId= jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, 
            {  headers : headers,
                method: 'POST',
                body: JSON.stringify({name: name})
            }).then(response => response.json()
            ).then(jsonResponse => {
                playlistId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                headers : headers,
                method: 'POST',
                body: JSON.stringify({uris: trackUris})
            })
            })
        })
    },
}

export default Spotify;
