export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  // "BQD2tVqkhRH22s_8YaPBaKh7eP9o3rT_0L3At9QVx7wIoLRbK0f-Bn4EC9Sw8IyXyk7QucFCRKlWskFxqwvinR0YZIDhrzfIB9DI1-7xhbNqZtNGqOPt0Tt6KifCRj4VEpb3qhh8SM8iQMElGke4-s3I8WTl6L2z1r_lRDuQD9bYAHa9FhMs",
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
