// netlify/functions/hello-world.js
exports.handler = async function() {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello world!"
    })
  };
};
//# sourceMappingURL=hello-world.js.map
