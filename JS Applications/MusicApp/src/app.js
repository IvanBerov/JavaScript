import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showHome } from "./views/homeView.js";
import { showLogin } from "./views/login.js";
import { updateNav } from "./views/nav.js";
import { showRegister } from "./views/register.js";

const main = document.getElementById("main-content");

page(decorateContext);

page("/", showHome);
page("/home", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/catalog", () => console.log("catalogView"));
page("/create", () => console.log("createView"));
page("/detail/:id", () => console.log("detailView"));
page("/edit/:id", () => console.log("editView"));
page("/search", () => console.log("searchView"));

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
