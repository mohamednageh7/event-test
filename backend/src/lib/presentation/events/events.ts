import { customeError } from "../../utils/errorMsg";
import { Request, Response } from "express";
import logger from "../../../logger";
import EventsController from "../../controllers/events/event";
import { EventInfo } from "../../types/events/events";

const EventReq = class ContactUsReq extends EventsController {
  static async handleCreateEvent(req: Request, res: Response) {
    try {
      const data: EventInfo = req.body;
      let event = await super.createNewEvent(data);
      if (!event) {
        return res.status(400).send(customeError("create_event_error", 400));
      }
      return res.status(200).send(event);
    } catch (error) {
      logger.error({ handleCreateEventError: error });
      return res.status(500).send(customeError("server_error", 500));
    }
  }

  static async handleGetEvent(req: Request, res: Response) {
    try {
      let query = req.query
      let events = await super.getAllEvents(query);
      logger.info({query})
      if (!events) {
        return res.status(400).send(customeError("get_event_error", 400));
      }
      return res.status(200).send(events);
    } catch (error) {
      logger.error({ handleGetEventError: error });
      return res.status(500).send(customeError("server_error", 500));
    }
  }

  static async handleSearchTitle(req: Request, res: Response) {
    try {
      let {title}:any = req.query
      let events = await super.searchEventTiltle(title);
      logger.info({title})
      if (!events) {
        return res.status(400).send(customeError("get_event_error", 400));
      }
      return res.status(200).send(events);
    } catch (error) {
      logger.error({ handleSearchTitleError: error });
      return res.status(500).send(customeError("server_error", 500));
    }
  }
};

export default EventReq;
