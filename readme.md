TypeScript is good. But the supporting infrastructure around it is bloated and overengineered.

Don't spend your time setting up frameworks or packaging libraries just to make 
your TypeScript to work in Browser. No need for overengineered and bloated shit like WebPack, 
Babel, Require.JS, System.JS etc.

TypeScript can produce the build all by itself. Use this repo as an example.

Run
===

- Clone repository
- `npm install`
- Open terminal and type `npm run build-and-watch`
- Open another terminal tab and type `npm run server`
- Open Browser http://localhost:8080

Details
=======

- Yes, you may need WebPack in complex cases to produce optimised build.
- TypeScript produces the build but not the loader. For some strange reason TypeScript Team
  refuses to add 10 lines required for the Loader. That's why those 10 lines of code provided
  separately. 
- Your 10 lines loader don't implement full AMD spec! Yes, because - fuck AMD spec. I need
  to make my small TypeScript project work without spending my valuable time on outdated and overengineered shit like full AMD spec.
