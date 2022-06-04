// action creators
// function that returns your action

export const appActions = {
    INCREMENT_COUNT: "INCREMENT_COUNT",
    DECREMENT_COUNT: "DECREMENT_COUNT",
    RESET_COUNT: "RESET_COUNT"
  };
  
  export const incrementCountAction = (count) => {
    return {
      type: appActions.INCREMENT_COUNT,
      payload: count
    };
  };
  
  export const resetCount = () => {
      return {
          type: appActions.RESET_COUNT
      }
  }