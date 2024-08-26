let initialState = {
  contactList: [],
  keyword: "",
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case "SEARCH_BY_USERNAME":
      return {
        ...state,
        keyword: payload.keyword, // 검색어 업데이트
      };
    default:
      return { ...state };
  }
}

export default reducer;
