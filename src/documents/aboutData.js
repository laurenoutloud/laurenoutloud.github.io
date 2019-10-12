import React from "react";
import naturePhoto from "../images/nature-photo.jpg";

export const introduction = () => (
  <div className="introduction">
    <img className="about-image" src={naturePhoto} />
    <h3>About Me</h3>
    <p>Hi, my name is Lauren! I am a software developer, thrill seeker, and world
    traveler. I am currently seeking full-time employment opportunities both
    within the U.S. and abroad as a full-time software engineer.</p>
    <h3>Bio</h3>
    <p>I grew up as a military child alongside two brothers. Both of my parents
    were in the U.S. Army, and as a result our family moved every couple of
    years. In addition to the U.S., I have lived in Germany, South Korea, and
    Belgium, and have traveled to several other countries such as China, Italy,
    Austria, England, France, Spain, and Japan. I got to experience the world at
    such a young age, and those experiences made me love to meet new people,
    visit new places, and try new things. <br />
    <br /> Upon graduating from high school, I attended the University of
    Central Florida (UCF) for two years. Originally, I declared my major in
    biomedical sciences- but switched to computer science after my first year of
    college to pursue my passion. I joined the Association for Computing
    Machinery (ACM) at UCF, and I competed in my first programming competition
    hosted by Deloitte. It was a great experience, and it inspired me to want to
    program on a more competitive level. The fall of 2015, I transferred to
    Texas Tech University (TTU) to be closer to family and to take advantage of
    their study abroad programs. Since transferring to TTU, I have joined
    several computer science and engineering related organizations such as ACM @
    TTU, Software Development Club, and the Society of Women Engineers. After
    completing my first year at TTU, I spent an entire academic year in Tokyo,
    Japan studying the Japanese language and culture. I recently completed my
    final semester of education at the undergraduate level, and I couldn't be
    more thrilled to be starting the next chapter of my life.</p>
    <h3>Goals</h3>
    <p>The following are goals that I would like to accomplish within the next five
    years:
    <ul>
      <li>Become a Google Developer Expert</li>
      <li>Become fluent in Japanese</li>
      <li>Become certified in at least one programming language</li>
      <li>Travel to at least 3 new countries</li>
      <li>Read 100 books (to include listening to audiobooks)</li>
    </ul></p>
    <h3>Honors & Awards</h3>
    <p><strong>Institutional Honors. </strong>I graduated with honors cum laude from Texas Tech University. </p>

    <p><strong>Boren Scholar. </strong>In April of 2016 I was selected as a recipient of the Boren Scholarship award for the amount of $20,000. This highly selective and prestigious award allowed me to study abroad in Japan for an entire academic year. More information can be found <a href="http://today.ttu.edu/posts/2016/05/scholarships" target="_blank">here</a>.</p>

    <p><strong>Pagasus Gold Scholarship Recipient.</strong>The Pegasus Gold Scholarship is a four year academic scholarship offered by UCF to incoming freshman who excelled academically in high school.</p>
  </div>
);

export const hobbies = () => (
<div className="hobbies">

</div>);

export const education = () => <div>Education</div>;

export const workExperience = () => <div>Work</div>;

export const affiliateOrganizations = () => <div>Affiliate Orgs</div>;
