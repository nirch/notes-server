const noteSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    text: { type: "string" },
    date: { type: "string" },
    title: { type: "string" },
  },
  required: ["text", "date"],
  additionalProperties: false,
};

export default noteSchema;
