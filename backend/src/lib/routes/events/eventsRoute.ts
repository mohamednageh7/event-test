import { Router } from "express";
import apiRoute from "./apis";
import EventReq from "../../presentation/events/events";

const router = Router();
const { CREATE_EVENT, GET_EVENTS, UPDATE_EVENT, DELETE_EVENT, GET_EVENT_ID ,SEARCH_TITLE} =
  apiRoute;
const { handleCreateEvent,handleGetEvent,handleSearchTitle } = EventReq;

// Marchent App
router.post(`${CREATE_EVENT}`, handleCreateEvent);
router.get(`${GET_EVENTS}`, handleGetEvent);
router.get(`${SEARCH_TITLE}`, handleSearchTitle);

export default router;
