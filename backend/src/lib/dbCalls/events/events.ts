import { EventsSchema, EventInfo } from "../../types/events/events";
import logger from "../../../logger";
import Events from "../../models/events";

const EventsDB = class EventsDB {
  static async findEventByIdDB(id: string) {
    return await EventsDB.__findEventByIdDB(id);
  }

  static async findEventsDB(data?: EventInfo) {
    return await EventsDB.__findEventsDB(data);
  }

  static async createEventDB(data: EventInfo) {
    return await EventsDB.__createEventDB(data);
  }

  static async updateEventDB(data: EventInfo) {
    return await EventsDB.__updateEventDB(data);
  }

  static async deleteEventById(id: string) {
    return await EventsDB.__deleteEventByIdDB(id);
  }

  static async searchTitleDB(title:string){
    return await EventsDB.__searchTitleDB(title)
  }

  static async __searchTitleDB(title:string = ''){
    try {
      let events = await Events.find( { "title" : {$regex : title} } )
      return events
    } catch (error) {
      logger.error({ searchTitleDBError: error });
    }
  }
  static async __findEventsDB(data: any = {}) {
    try {
      // remove all empty string data
      for (let item in data) {
        if (data[item] === "") delete data[item];
      }
      let events = await Events.aggregate([
        { $match: { $and: [data] } }
      ]);
      return events;
    } catch (error) {
      logger.error({ findEventsDBError: error });
    }
  }

  static async __deleteEventByIdDB(id: string) {
    try {
      let event = await Events.findByIdAndDelete({ _id: id }).lean();
      return event;
    } catch (error) {
      logger.error({ deleteEventByIdDBError: error });
    }
  }

  static async __updateEventDB(data: EventInfo) {
    try {
      let id = data._id;
      delete data._id;
      let event = await Events.findByIdAndUpdate(
        { _id: id },
        { ...data },
        { new: true, lean: true }
      );
      return event;
    } catch (error) {
      logger.error({ updateEventDBError: error });
    }
  }

  static async __createEventDB(data: EventInfo) {
    try {
      let event = new Events(data);
      await event.save();
      return event;
    } catch (error) {
      logger.error({ createEventDBError: error });
    }
  }

  static async __findEventByIdDB(id: string) {
    try {
      let event = await Events.findById({ _id: id }).lean();
      return event;
    } catch (error) {
      logger.error({ findEventByIdDBError: error });
    }
  }
};

export default EventsDB;
