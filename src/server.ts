import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return "Connected";
});

app.listen({ port: 3333 }).then(() => console.log("HTTP Server running!"));
