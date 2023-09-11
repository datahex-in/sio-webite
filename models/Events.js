const mongoose = require("mongoose");

// Define the event schema
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: String,
  shortDescription: String,
  description: {
    type: String,
    required: true,
  },
  venue: String,
  date: {
    type: Date,
    required: true,
  },
  month: String,
  isEnroll: Boolean,
  theme: String,
  eventType: {
    type: String,
    enum: ["Seminar", "Workshop", "Reading Session"],
    required: true,
  },
});

// Create the Event model
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
