
// import { delay } from 'https://deno.land/x/delay@v0.2.0/mod.ts';

// async function listen()
// {
//   let it = 0;
//   while(true)
//   {
//     const watcher = Deno.watchFs("md");
//     for await (const file of watcher) {
//       console.log(file.kind, file.paths[0], it++);


//       for await (const dirEntry of Deno.readDir("md")) {
//         console.log(dirEntry.name);
//       }
      
//       watcher.close()
//     }
//     console.log("done")
//     await delay(100);
//   }
// }

// listen()

// import {watch} from "https://deno.land/x/watch@1.1.0/mod.ts";

// for await (const changes of watch("src")) {
//   console.log(changes.added);
//   console.log(changes.modified);
//   console.log(changes.deleted);
// }





