import { PeerServer } from "peer";
PeerServer({
  port: Number(process.env.PORT) || 9000,
  path: "/skirmish",
  proxied: true,
});
