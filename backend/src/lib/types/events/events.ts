import { Document  } from "mongoose";


export interface EventsSchema extends Document {
  title:string;
  description:string;
  category:string;
  date:Date;
  isVirtual:string;
  address:string;
  }

  export interface EventInfo {
    _id?:string;
    title?:string;
    description?:string;
    category?:string;
    date?:Date;
    isVirtual?:string;
    address?:string;
  }