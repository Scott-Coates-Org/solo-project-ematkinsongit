const Credentials = () => {
  const SpotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const SpotifyClientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  return {
    ClientId: SpotifyClientId,
    ClientSecret: SpotifyClientSecret,
  };
};

export { Credentials };
