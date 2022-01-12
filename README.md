There is only one story here, and it should fail with a helpful message, 
since it tries to click on a button named `foo`, which doesn't exist.

In the default webpack builder, it fails silently.

In the vite builder (enable by un-commenting out the line in main.js),
it fails with an `ignoredException` message.
