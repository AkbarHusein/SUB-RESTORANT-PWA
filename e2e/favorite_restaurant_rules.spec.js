const assert = require('assert');

Feature('Favoriting and Unfavoriting Restaurant');

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

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.favoriteItem');
  const favoriteRestoName = await I.grabTextFrom('.label-name');

  assert.strictEqual(firstRestoName, favoriteRestoName);

  // *Unfavoriting restaurant
  I.seeElement('.favoriteItem');
  I.seeElement('.label-name a');

  I.waitForElement('.label-name a', 5);
  I.seeElement('.label-name a');

  I.click(locate('.label-name a').first());

  I.waitForElement('.restaurant-item', 5);
  I.seeElement('.restaurant-item');

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#favoriteRestaurant');
  I.see('Kamu belum mempunyai restaurant favorite', '.fav-resto-not-found');
});
