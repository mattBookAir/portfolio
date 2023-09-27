export const CbComp = () => {
  return (
    <div>
      <p>
        I was on an Amtrak in November of 2022 when I remembered a game I played
        growing up—who, what, when, where, and why—that I thought would make a
        great online game. In this game, which is typically called
        &apos;exquisite corpse&apos; after the first sentence created with this
        method, players pass a piece of paper around, each secretly contributing
        to either a drawing or a short story and hiding their contribution from
        the next person. At the end, a humorous patchwork of a story or drawing,
        created collaboratively, is revealed. I had just finished my personal
        portfolio on WordPress and realized that web design and development was
        of interest to me, and I thought figuring out how to wire up a
        multiplayer game like this would allow me to expand my knowledge of web
        development. It took only a little toying around with possible WordPress
        plugins and solutions to figure out the best way to do this would be to
        learn to program it from the ground up myself. So, after some research,
        I decided to teach myself Javascript, specifically ReactJS. And, after
        completing FreeCodeCamp&apos;s Javascript and React modules, as well as
        a couple to-do list and tic-tac-toe game tutorials, I was equipped with
        enough knowledge to begin planning my game.
      </p>

      <p>
        The general model I aimed to follow was that of a &apos;Jackbox&apos;
        style game, where users join a virtual room on separate devices,
        allowing play both in the same room and separately (which I thought
        would be great at the height of the pandemic). I also wanted users to be
        able to chat real-time if they were not playing together. There was no
        framing device or motif, just the game (hope I can find screenshots…).
        As I developed the game, AI was becoming all the rage, so right as I
        began development, I realized I could send the final sentences off to an
        AI image generator to create absurd pictures. Then, as ChatGPT gained
        prominence, I realized I could additionally send off the sentences to it
        to further expand upon the ludicrous tale. Eventually, everything
        coalesced into the idea of framing the whole game as a computer
        operating system where players answer the various parts of each
        others&apos; stories as &apos;emails,&apos; and where they&apos;d all be
        contributing to a news article where AI would provide both the hero
        image and the opening blurb.
      </p>

      <p>
        The primary libraries used by the front end are ReactJS,
        Create-React-App, React-Draggable for the moveable windows, and
        React-Sound for the sound effects. It connects to the NodeJS backend via
        Socket.io and Nginx; the backend uses Node, Express, DezgoAPI, and
        ChatGPT&apos;s API (?) and lives on a DigitalOcean Ubuntu droplet. Ngrok
        was used for testing prior to the use of DigitalOcean. No CSS
        preprocessors were used. The game&apos;s frontend is hosted on Itch.io,
        and versions are managed on GitHub.
      </p>

      <p>
        Initially, I had a very plain, skeuomorphic design meant to emulate the
        tabletop version of the game; you type your answers onto
        &apos;cards,&apos; which sit atop a wooden surface meant to emulate a
        table. However, as the game grew more complicated, I thought this
        approach may get more confusing, so when I decided to add ChatGPT&apos;s
        contributions to the game, I also decided to reframe the game as a
        computer OS, where each part of the game is divided up into a
        &apos;program&apos; window with which the user would have some previous
        experience or knowledge, such as an internet browser, start menu, or
        chat window. The game went through many small design/framing iterations
        as I learned and developed, such as the voting stage happening in its
        own window, the virtual assistant being your boss, or the windows being
        in a fixed vs. draggable position.
      </p>

      <p>
        I was learning Javascript as I developed the game, the process was
        largely me writing down the rules of the game and, breaking them up into
        distinct features to build, and learning Javascript and React methods to
        make those features real, including how to make an API call and handle
        the response to enable real-time gameplay and communication;
        additionally, I had to learn to think programmatically and lightly
        mathematically, including working out a very simple &apos;round
        robin&apos; paper-passing algorithm to accommodate however many players
        were in a given room. It was very stop-and-go, but it took about 6
        months altogether to build from the beginning.
      </p>

      <p>
        Again, the development of this game was very stop-and-go, and there were
        many moments I considered moving on from it. The undertaking was huge
        for me, as I only knew how to make div soup and style it with vanilla
        CSS within the bounds of a WordPress editor, and when I was using
        SiteGround to manage my hosting. Figuring out the basics of coding was
        very difficult for me, especially as I am a hands-on learner, and it is
        much better to learn and plan ahead when programming (and I am bad at
        that). This is not more visible anywhere than in the voting stage of the
        game, which went through more changes than perhaps any other part of the
        game. I still don&apos;t know to this day why it proved so difficult for
        me (I suspect it was just a lack of experience), but something about
        collecting everyone&apos;s written responses on the server, sending them
        back out to the frontend, mapping them over a form, and collecting those
        form responses was a nightmare. The voting stage would end before
        everyone had submitted their responses, the voting would end early, the
        results would come back wrong or empty. I eventually got it to work by
        including it in the chat, but boy was it tough.
      </p>

      <p>
        Testing was limited to my circle of acquaintances, family, and friends,
        as well as a couple posts on small subreddits. They tunneled in through
        Ngrok.
      </p>

      <p>
        Other than the fact that it works, I think I&apos;m most proud of the
        visuals. There&apos;s a lot of jankiness, and I&apos;d like to change a
        lot, but I think I did well to replicate the style of Windows XP by
        hand. It&apos;s small, but I also like the way the finished article
        slowly loads into the internet browser (and I also get a kick out of the
        images at the top of the faux-TMZ site, which come from stories
        generated by players). Translating to a mobile layout was also quite an
        undertaking.
      </p>

      <p>
        I learned everything I&apos;ve been using to this day. While I
        ultimately wish I&apos;d gone for something a little smaller scale and
        standard for my portfolio, I&apos;m glad I saw the project through to
        the end, as it gave me confidence in my ability to program and see a
        programming project through to the end. The project really did encompass
        so much of what&apos;s important to web development—frontend design,
        backend design, iteration, UI/UX considerations, API calls etc.—so, on
        the other hand, I am glad I chose something complicated enough to teach
        me so much.
      </p>

      <p>
        I&apos;m going back to edit the game when I have time, namely fixing the
        mobile version, optimizing the game, adding some (secret) features, and
        open sourcing it once I have a chance to clean up the game&apos;s
        structure.
      </p>

      <p>The game has been played hundreds of times.</p>
    </div>
  );
};
