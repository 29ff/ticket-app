import nats from "node-nats-streaming";
import { Publisher } from "./events/base-publisher";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";

console.clear();

const stan = nats.connect("ticketapp", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Publisher connected to NATS");
  const publisher = new TicketCreatedPublisher(stan);

  publisher.publish({
    id: "123",
    title: "concert",
    price: 20,
  });
});
