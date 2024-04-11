export const onRequest = async (context) => {
  var response = await context.next();
  const geo = "Coming to you from " + context.request.cf.colo;
  console.log(geo);

  let newRes = new HTMLRewriter().on('div', {
    element(element) {
      if (element.getAttribute('id') === 'colo') {
        element.append(geo, { html: true} );
      }
    }
  }).transform(response);

  return newRes;
}
