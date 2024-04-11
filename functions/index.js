export const onRequest = async (context) => {
  var response = await context.next();
  const geo = "Coming to you from " + context.request.cf.colo;
  console.log(geo);

  response.body = response.body.replace('$TODO', geo);
  return response;
}
