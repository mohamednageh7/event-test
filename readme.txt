you can run the project 
backend => yarn run dev
frontend => yarn start

- there is an api for creating event so you can test getting different events 
- I have add two url for mongodb one locally and one in mongo atlas
create event req body
http://localhost:5000/api/createEvent
{
"title":"Event 3",
"description":"This is event 1",
"category":"AI",
"date":  "Fri Mar 18 2022 13:28:01 GMT+0300 (Arabian Standard Time)",
"isVirtual":"no",
"address": "test address"
}