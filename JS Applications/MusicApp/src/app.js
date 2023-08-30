const main = "";

page(decorateContext);

updateNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = renderMain;
  ctx.updateNav = updateNav;
  const user = getUserData();
  if (user) {
    ctx.user = user;
  }
  next();
}

function renderMain(content) {
  render(content, main);
}
