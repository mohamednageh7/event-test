import logger from "../../../logger";
import { config } from "dotenv";
import { EventInfo } from "../../types/events/events";
import EventsDB from "../../dbCalls/events/events";

config();

const EventsController = class EventsController extends EventsDB {
  static async createNewEvent(data: EventInfo) {
    return await EventsController.__createNewEvent(data);
  }

  static async getAllEvents(query:EventInfo){
    return await EventsController.__getAllEvents(query)
  }

  static async searchEventTiltle(title:any){
    return await EventsController.__searchEventTiltle(title)
  }

  static async __searchEventTiltle(title:string){
    try {
        let events = await super.searchTitleDB(title)
        return events
    } catch (error) {
      logger.error({ searchEventTiltleError: error });
    }
  }

  static async __getAllEvents(query:EventInfo){
    try {
        let events = await super.findEventsDB(query)
        return events
    } catch (error) {
      logger.error({ getAllEventsError: error });
    }
  }

  static async __createNewEvent(data: EventInfo) {
    try {
      let event = await super.createEventDB(data);
      return event;
    } catch (error) {
      logger.error({ genertatWhatsappLinkError: error });
    }
  }
};

export default EventsController;
