const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.seeElement('#favoriteRestaurant');
  I.see('Kamu belum mempunyai restaurant favorite', '.fav-resto-not-found');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.see('Kamu belum mempunyai restaurant favorite', '.fav-resto-not-found');

  I.amOnPage('/');

  I.waitForElement('.label-name a', 5);
  I.seeElement('.label-name a');

  const firstResto = locate('.label-name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.favoriteItem');
  const favoriteRestoName = await I.grabTextFrom('.label-name');

  assert.strictEqual(firstRestoName, favoriteRestoName);
});
