import fastify from "fastify";

const server = fastify();

server.get("/", async (request, reply) => {
    return { message: "hello from api" } 
})

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listennig at ${address}`)
})
