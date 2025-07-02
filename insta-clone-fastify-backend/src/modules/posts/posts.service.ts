import type { FastifyInstance } from "fastify";

// Define a type for the data needed to create a post
type CreatedPostData = {
    img_url: string;
    caption: string;
};

export const postsService = (fastify: FastifyInstance) => {
    return {
        create: async (postData: CreatedPostData) => {
            fastify.log.info(`Creating a new post`);
            // This will use the MOCK `transactions` in my test,
            // and the REAL `transactions` in my live application.
            const post = fastify.transactions.posts.create(postData);
            return post;
        },
    };
};
