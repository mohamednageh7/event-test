import { model, Schema, Model } from "mongoose";
import { EventsSchema } from "../types/events/events";

const EventsSchema: Schema = new Schema<EventsSchema>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    isVirtual: {
      type: String,
      required: true,
      enum:[
      'yes',
      'no'
      ]
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    strict:false
  }
);

const Events: Model<EventsSchema> = model("Events", EventsSchema);

export default Events;
