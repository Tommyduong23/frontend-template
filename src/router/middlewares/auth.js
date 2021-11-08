export default function auth({ to, next, store }) {
  console.log(to);
  if (!store.state.user) {
    return next({
      path: 'login',
      query: {
        redirect: to.path,
      },
    });
  }

  return next();
}
