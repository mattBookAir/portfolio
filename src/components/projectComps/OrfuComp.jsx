//import images, starting with brand dev
import colorPallettes from "/src/assets/projects/orfu/brandDev/colorPallettes.png";
import concept1 from "/src/assets/projects/orfu/brandDev/concept1.png";
import concept2 from "/src/assets/projects/orfu/brandDev/concept2.png";
import concept3 from "/src/assets/projects/orfu/brandDev/concept3.png";
import concept4 from "/src/assets/projects/orfu/brandDev/concept4.png";
import finalLogo from "/src/assets/logos/orfu.png";
//import devPages
import donateCS from "/src/assets/projects/orfu/devPages/donateComingSoon.png";
import hpV1 from "/src/assets/projects/orfu/devPages/hpV1.png";
//import graphics
import conceptCompare from "/src/assets/projects/orfu/graphics/conceptCompare.png";
import conceptDiagram from "/src/assets/projects/orfu/graphics/conceptDiagram.png";
import hybridIcon from "/src/assets/projects/orfu/graphics/hybridIcon.png";
import infographicSmall from "/src/assets/projects/orfu/graphics/infographicSmall.png";
import infographic2 from "/src/assets/projects/orfu/graphics/infographic2.png";
//import mockups
import aboutMockup from "/src/assets/projects/orfu/mockups/aboutMockup.jpg";
import learnPage from "/src/assets/projects/orfu/mockups/learnPage.png";
//import sitemaps
import sitemap from "/src/assets/projects/orfu/sitemaps/sitemap.png";
import siteChart from "/src/assets/projects/orfu/sitemaps/siteChart.png";
//import wireframes
import factSheetFrame from "/src/assets/projects/orfu/wireframes/factSheetFrame.png";
import infoPageFrame from "/src/assets/projects/orfu/wireframes/infoPageFrame.png";
import recipeDetailsFrame from "/src/assets/projects/orfu/wireframes/recipeDetailsFrame.png";
import recipeSubFrame from "/src/assets/projects/orfu/wireframes/recipeSubFrame.png";
import storyFrame from "/src/assets/projects/orfu/wireframes/storyFrame.png";
import storyOnlyFrame from "/src/assets/projects/orfu/wireframes/storyOnlyFrame.png";
import surveyConceptFrame from "/src/assets/projects/orfu/wireframes/surveyConceptFrame.png";
import toolkitConceptFrame from "/src/assets/projects/orfu/wireframes/toolkitConceptFrame.png";
//import carousel component
import PicCarousel from "/src/components/PicCarousel";

export const OrfuComp = () => {
  const logos = [
    concept1,
    concept2,
    concept3,
    concept4,
    finalLogo,
  ]
  return (
    <div className="projectContent" id="orfu">
      <p className="projectP" id="rfu1">
        The founder of this nonprofit knew only that she wanted to combine food
        and conversation in a way that would inspire empathy, and that she
        wanted to work with me to do it. As we developed our ideas and
        methodologies, as well as the feasible scale of creating and
        distributing materials as a team of three people, the idea shifted from
        being a magazine to being a website to 1) be able to more efficiently
        distribute individual parts of what would have been the magazine, such
        as featured articles, tips, and fact sheets, and 2) to allow both a)
        user-generated content (through submitted recipes and stories about, for
        instance, connecting over food, or sharing an interesting food-related
        tale), and b) allow users to easily connect with other people who saw
        Our Recipe for Unity&apos;s vision.
        <img className="articlePic" id="conceptCompare" src={conceptCompare} alt="" />
      </p>
      <PicCarousel images={logos} />
      <p>
        Our mission was “To address division in America by promoting and
        fostering compassion, empathy and civil discourse using food as a
        catalyst to bring people together and to create unity.” To that end, we
        needed a website to act as both a place to distribute what was intended
        to be a full library of content, as well as a repository to hold content
        generated by users at scale. Further, we needed that website to create a
        gentle, welcoming atmosphere that would inspire calm and curiosity in
        our users. Furthermore, we needed it to be buildable and manageable by
        three people on a very small budget.

      </p>
      <p>
        The first thing we did, as a few people with little website experience,
        was to find and crawl through other websites that featured either
        designs we liked or which disseminated similar information to what we
        intended to share; after a brief wireframing phase, we delved right into
        building the site itself in WordPress, the framework with which the team
        had the most collective experience at the time, while working
        concurrently on branding the business.
      </p>
      <p>
        We used the following technologies to build the site:
        <ul>
          <li>Adobe Creative Suite and Balsamiq for prototyping</li>
          <li>
            WordPress, with a custom theme and plugins including SiteOrigin
            page-builder, Ninjaforms, and WordPress-Donate.
          </li>
          <li>SiteGround backend, GoDaddy domain hosting</li>
        </ul>
      </p>
      <p>
        The development process started with my learning HTML and CSS through
        Freecodecamp. It was then out of the frying pan and into the fire, as
        the team worked hard to keep within a small budget (we had to build a
        couple custom components with Googled and cobbled-together PHP/HTML/CSS,
        including our search page), realize its ambitious goals (with such a
        small team, many shortcuts had to be taken, and the use of external
        tools and plugins was very necessary), and maintain reasonable timelines
        to be able to pursue an initial release and fundraising before
        out-of-pocket money ran out (many features, such as account creation,
        had to be postponed for the sake of having a prototype ready to test).
        We had the website staged on WordPress, and as we would have meetings
        and make decisions, I would bounce between the roles of administrator,
        graphic designer, copywriter and editor, and web designer.
      </p>
      <p>
        We conducted a very basic test of the website, where we invited
        around 50 people to test a private version of the site and to provide
        feedback that we would incorporate prior to our August 2019 launch.
      </p>
      <p>
        I particularly enjoyed creating the dynamic sidebar, which, when you
        navigated to a new page on the website, would provide both a new quote
        and a Tweet from the ORfU account. I am also proud of the custom search feature,
        which allowed users to search recipes by course, cuisine, region of the
        USA, relevant holidays, tags, states, and keywords.
      </p>
      <p>
        This project really started my journey as a web designer and developer,
        as I don&apos;t know if I&apos;d have even known about it as an option
        for me without having been “forced” to do it by my job. I&apos;m now a
        React developer, and I&apos;m liking it much better than the
        Wordpress/Page builder/plugin approach, so I wish I&apos;d known about
        this option then. I would have had more fun with the project, and I
        would have definitely been able to fill more of our goals and complete
        more of our desired features if I had full Javascript control. However,
        I&apos;m proud of it.
      </p>
      <p>
        While the site was up for only around two years (it is currently on hiatus, as the
        executive director returned to school), it garnered respectable
        attention, and the executive director plans to boot the site back up
        as-is (with modern modifications) in the near future. You can visit an archived version of the site here:
        <br />
        <br />
        <a
          href="https://ourrecipeforunity.org/"
          target="_blank"
          rel="noreferrer"
        >
          https://orfu.org/
        </a>
      </p>
    </div>
  );
};
