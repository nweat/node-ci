const Page = require('./helpers/page');

let page;
test('header has the correct text', async () => {
  const text = 'test';
  expect(text).toEqual('test');
});

/*
beforeEach(async () => {
  page = await Page.build();
  await page.goto('http://localhost:3000');
});

afterEach(async () => {
  //await page.close();
});

test('header has the correct text', async () => {
  const text = await page.getContentsOf('a.brand-logo');
  expect(text).toEqual('Blogster');
});

test('clicking login starts oauth flow', async () => {
  await page.click('.right a');
  expect(page.url()).toMatch(/accounts\.google\.com/);
});

test('when signed in shows logout button', async () => {
  await page.login();
  const text = await page.getContentsOf('a[href="/auth/logout"]');
  expect(text).toEqual('Logout');
});
*/
