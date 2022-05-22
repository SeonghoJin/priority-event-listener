import App from './app';

test("app-test", () => {
    const app = new App();
    expect(app).toBeInstanceOf(App);
})