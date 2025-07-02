import Fastify from "fastify";
import { databasePlugin } from "./core/database/database.plugin";
import { postsRoutes } from "./modules/posts/posts.routes";

const fastify = Fastify({
    logger: true,
});

// Register the database plugin
fastify.register(databasePlugin);
// Register the new posts routes
fastify.register(postsRoutes);

// Declare a default route
fastify.get("/", async function (request, reply) {
    reply.send({ salut: "Moon" });
});

const port = 3000;

fastify.listen({ port }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
