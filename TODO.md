# TODO

1. Check insternet connectivity.
2. Try catch
   ´js
   try {
   throw new Error("Error");
   } catch (error) {
   // handle Error
   }
   ´

3. DO use Safe Area View.
4. DO use Keyboard Avoiding View.
5. DO remember the difference in pushing the screen and navigating the screen.
6. Set up theming guidelines.
   - Spacing
   - Color
   - Typography
7. Prettier
8. eslintrc config
9. android simulator with docker
10. jsdoc https://jsdoc.app/
11. Require signed commits
12. Add security module to docs

## Security

- Don't use secrets when openning the app from an url
- Don't use secrets when using async storage and react native dotenv
- Always use SSL
- Use [OAuth2 with PKCE](https://reactnative.dev/docs/security)
