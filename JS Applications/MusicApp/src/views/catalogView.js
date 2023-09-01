import { getAllAlbums } from "../api/data.js";
import { html, nothing } from "../lib.js";

const cardTemplate = (card, hasUser) => html` <div class="card-box">
  <img src=${card.imgUrl} />
  <div>
    <div class="text-center">
      <p class="name">Name: ${card.name}</p>
      <p class="artist">Artist: ${card.artist}</p>
      <p class="genre">Genre: ${card.genre}</p>
      <p class="price">Price: $${card.price}</p>
      <p class="date">Release Date: ${card.releaseDate}</p>
    </div>
    ${hasUser
      ? html`<div class="btn-group">
          <a href="/details/${card._id}" id="details">Details</a>
        </div>`
      : nothing}
  </div>
</div>`;

const catalogTemplate = (albums, hasUser) => html` <section id="catalogPage">
  <h1>All Albums</h1>
  ${albums.length > 0
    ? albums.map((album) => cardTemplate(album, hasUser))
    : html`<p>No Albums in Catalog!</p>`}
</section>`;

export async function showCatalog(ctx) {
  const allAlbums = await getAllAlbums();
  ctx.render(catalogTemplate(allAlbums, !!ctx.user));
}
