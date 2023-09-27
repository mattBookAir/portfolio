export const JoshComp = () => {
  return (
    <div>
      <p>
        The goal of this project was to develop a portfolio for a graphics
        researcher that would efficiently balance substantive prose about said
        research visual samples from it.
      </p>
      <p>
        The client wanted visuals to take center stage, with explanatory text
        being revealed in a particular image&apos;s fullscreen Lightbox, and for
        relevant skills to be noticeably listed without taking up too much
        space.
      </p>
      <p>
        The one-page portfolio, hosted on GitHub pages, is built in ReactJS,
        using Vite, and styled with vanilla CSS. The Lightbox and gallery are
        custom-built components. The website&apos;s copy is stored in a JSON
        file and mapped to the site, as the client was tech-savvy and desired
        quick turnaround.
      </p>
      <p>
        After considering multiple types of design, we landed on a stacked
        horizontal treatment of the site, where each category he wanted to
        display has its own color-coded row, and where prose would take a
        relative backseat to images.
      </p>
      <p>
        This fairly basic site featured a fairly basic development process, and
        as it included only minor features, it was a simple process to create
        the skeleton of the site while the client wrote the copy for each
        section. Development took 2-3 weeks on both of our schedules.
      </p>
      <p>
        The primary challenge was page speed; the client wanted to feature 27
        GIFs of his work, and to have those all going at once made the website
        incredibly slow. To mitigate this, still JPEG/PNG versions of said GIFs
        would be loaded by default, and a user would hover over a particular
        picture to see it animate. This considerably sped up the website.
      </p>
      <p>
        The website was compared against similar researchers&apos; portfolios,
        and tested by many of those researchers, who provided valuable feedback,
        including feedback about how the spacing of the rows affected their
        perception of the website&apos;s content.
      </p>
      <p>
        I&apos;m proud of building a Lightbox from scratch! This was still
        pretty early in my React journey, so I&apos;m proud of the way it turned
        out. I also like the expandable/collapsible bio section, a feature I
        carried over/rebuilt from my Wordpress website.
      </p>
      <p>
        The fast turnaround of this project, partly due to my developing
        intuition about how users interact with websites and how to code
        efficiently for that interaction, really bolstered my confidence as a
        designer/developer.
      </p>
      <p>
        I have already renovated the site once for this client, and would do so
        again.
      </p>
      <p>He got many many job offers :) and landed a dream position!</p>
    </div>
  );
};
