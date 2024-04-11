export function onRequest(context) {
  const response = await context.next();
  console.log('got this context!' + context);
  return response;
}
