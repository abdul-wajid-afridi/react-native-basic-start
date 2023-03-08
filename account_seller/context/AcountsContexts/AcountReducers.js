const AcountReducer = (state, action) => {
  switch (action.type) {
    case "GET_ACOUNTS_DATA":
      console.log("posted");
      alert("tested");
      return {
        state: { ...state },
      };
      break;
    default:
      state;
  }
};
export default AcountReducer;
