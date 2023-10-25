export default async function AboutMe() {
  return (
    <div
      class={
        "relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50  md:py-8 lg:py-12"
      }
    >
      <div
        class={
          "relative w-full bg-white px-6 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pb-28 lg:pt-16"
        }
      >
        <div class={"prose prose-slate mx-auto lg:prose-lg"}>
          <div>
            <h2>About Me</h2>
          </div>
          <div class={"grid"}>
            <div>
              <h3 class={""}>Qualifications</h3>
              <div>
                Bachelor's degree in Computer Science from the University of
                Pretoria.
              </div>
              <div>Graduated 2022</div>
            </div>
            <div>
              <h3>Projects</h3>
              <div class={" pl-2 "}>
                <div>Route Optimizing App V1</div>
                <div>Route Optimizing App V2</div>
                <div>Water Tank Refill System</div>
                <div>IOT Thermometer</div>
                <div>OLED Display Driver</div>
              </div>

              <div>Read about them and some more in my Blog</div>
            </div>
            <div>
              <h3>Contributions</h3>
              <div>
                Contributed my OLED Display driver to Devicescript, currently a
                experimental project by Microsoft. See here.
              </div>
            </div>

            <div>
              <h3>Occupational Status:</h3>
              <div>
                Looking for a job in the field of Web Development and/or
                Embedded Devices in which I can be creative, learn, and build
                new things.
              </div>
            </div>

            <div>
              <h3>Proficient In:</h3>
              <div class={" grid grid-cols-[10em_min-content] pl-2 "}>
                <div class={" underline"}>Item</div>{" "}
                <div class={"underline"}>Enjoyment</div>
                <div>Next JS</div> <div>10</div>
                <div>React</div> <div>10</div>
                <div>Typescript</div> <div>10</div>
                <div>Tailwind</div> <div>10</div>
                <div>Zustand</div> <div>10</div>
                <div>Google Maps API</div> <div>8</div>
                <div>MongoDB</div> <div>7</div>
                <div>Mongoose</div> <div>4</div>
                <div>AWS EC2 (Ubuntu)</div> <div>9</div>
              </div>

              <div class={" pt-4"}>
                These are the tools I consider myself good at. Using these I can
                mostly build whatever is needed as seen in my projects. I either
                use them on a daily basis or used them extensively in the past.
              </div>
            </div>

            <div>
              <h3>Familiar With:</h3>
              <div class={" grid grid-cols-[10em_min-content] pl-2 "}>
                <div class={" underline"}>Item</div>{" "}
                <div class={"underline"}>Enjoyment</div>
                <div>C++</div>
                <div>10</div>
                <div>Immer</div>
                <div>10</div>
                <div>Express JS</div>
                <div>10</div>
                <div>Nest JS</div>
                <div>10</div>
                <div>Fresh JS</div>
                <div>10</div>
                <div>Tanstack Query</div>
                <div>10</div>
                <div>Blender</div>
                <div>10</div>
                <div>Unreal Engine 4</div>
                <div>10</div>
                <div>AWS S3</div>
                <div>7</div>
                <div>PM2</div>
                <div></div>
                <div>AWS Route 53</div>
                <div>8</div>
                <div>Zod</div>
                <div>9</div>
                <div>tRPC</div> <div>9</div>
                <div>Azure MSAL</div>
                <div>7</div>
                <div>Google OAuth</div>
                <div>7</div>
                <div>Deno</div>
                <div>8</div>
                <div>Next Auth</div>
                <div>7</div>
                <div>Excel API</div>
                <div>7</div>
              </div>

              <div class={" pt-4"}>
                I can use these tools without much trouble, but I do not
                understand them to such an extent as with the tool in the
                "Proficient" section.
              </div>
            </div>

            <div>
              <h3>Limited Experience:</h3>
              <div class={" grid grid-cols-[10em_min-content] pl-2 "}>
                <div class={" underline"}>Item</div>{" "}
                <div class={"underline"}>Enjoyment</div>
                <div>Solid JS</div> <div>10</div>
                <div>Devicescript</div> <div>10</div>
                <div>Deno KV</div>
                <div>10</div>
                <div>KiCad</div> <div>10</div>
                <div>Turborepo</div> <div>9</div>
                <div>EJS</div> <div>6</div>
                <div>Angular</div> <div>8</div>
                <div>Postgres</div> <div>8</div>
                <div>Python</div> <div>6</div>
                <div>Java</div> <div>6</div>
              </div>
              <div class={" pt-4"}>
                These are the tools that I used long ago, experimented with, or
                recently started using. I cannot consider myself good at them
                due to lack of experience or due to significant time that passed
                since last using them.
              </div>
            </div>

            <div>
              <h3>Electronics</h3>

              <div>Microcontrollers</div>
              <div class={"pl-2 "}>
                <div>Arduino Uno R3</div>
                <div>ESP 8266</div>
                <div>ESP 01</div>
                <div>Pi Pico</div>
              </div>

              <div>Used in Projects</div>
              <div class={"pl-2 "}>
                <div>OLED Displays</div>
                <div>16x2 LCD</div>
                <div>Wifi</div>
                <div>Temp + humidity Sensor</div>
                <div>RS 485</div>
                <div>I2C</div>
                <div>Keypads</div>
                <div>Relays</div>
                <div>Ultrasonic Sensor</div>
              </div>
            </div>

            <div>
              <h3>Want to learn</h3>
              <div class={"pl-2 "}>
                <div>Remix JS</div>
                <div>C</div>
                <div>Zig</div>
                <div>Framer Motion</div>
                <div>Three JS</div>
                <div>More Electronics</div>
                <div>Web Assembly</div>
                <div>Postgres</div>
                <div>Compiler Construction</div>
              </div>
            </div>

            <div>
              <h3>General Interests</h3>
              <div class={"pl-2 "}>
                <div>Any Coding</div>
                <div>Electronics</div>
                <div>History</div>
                <div>Psychology</div>
                <div>Aircraft</div>
                <div>Economics</div>
                <div>Strategy Games</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
