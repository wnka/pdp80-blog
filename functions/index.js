export const onRequest = async (context) => {
  const response = await context.next();
  console.log("Coming to you from " + context.request.cf.colo);
  return response;
}
