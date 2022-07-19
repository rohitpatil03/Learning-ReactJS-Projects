import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_STORIES:
      return {...state, hits:action.payload.hits, nbpages:action.payload.nbpages};
    case SET_LOADING:
      return {...state, loading:action.payload}
    case REMOVE_STORY:
      const hits = state.hits.filter((story) => story.objectID !== action.payload)
      return {...state, hits:hits}
    case HANDLE_SEARCH:
      return {...state, query:action.payload, pages:0}
    case HANDLE_PAGE:
      return {...state, pages:action.payload}
    default:
      break;
  }
}
export default reducer
