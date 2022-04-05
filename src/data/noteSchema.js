const noteSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    text: { type: "string" },
    date: { type: "string", format: "date-time" },
    title: { type: "string" },
    userId: { type: "string" },
  },
  required: ["text", "date", "userId"],
  additionalProperties: false,
};

export default noteSchema;
