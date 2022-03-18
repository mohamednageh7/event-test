import { createSelector } from "reselect";

export const eventSelector = createSelector(
  (state: any) => state.event,
  (events: any) => {
    return {
      event: events.event,
      category: events.category,
      address: events.address,
      date: events.date,
    };
  }
);
