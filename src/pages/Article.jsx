import ArticleBack from '../assets/images/article_back.png'
import ArticleBackMob from '../assets/images/article_back_mob.png'
import ArticleBackIllustration from '../assets/images/article_illustration.png'

import { ReactComponent as TwitterIcon } from '../assets/icons/social/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/social/linkedIn.svg';
import { ReactComponent as RedditIcon } from '../assets/icons/social/reddit.svg';
import { ReactComponent as ShareIcon } from '../assets/icons/social/share.svg';

import Avatar from '../assets/images/avatar.png';
import TiktokFrame from '../assets/images/TikTok.png'
const ArticlePage = () => {
  return <div className="article-page">
    <Article />
  </div>;
};

export default ArticlePage;

const Article = () => {
  return (
    <>
      <picture>
        <source srcset={ArticleBack} media="(min-width: 600px)" />
        <img className="article__back" src={ArticleBackMob} alt="back" />
      </picture>

      <div className="article">
        <div className="article__title">QYOU Partners With Capcom for Resident Evil Village TikTok Channel</div>
        <div className="article-info">
          <div className="article-info__date">by James Fudge    -    May 8, 2021</div>
          <div className="article-info__reading-time">Reading Time: 2min read</div>
        </div>

        <picture>
          <source srcset={ArticleBackIllustration} media="(min-width: 600px)" />
          <img className="article__illustration" src={ArticleBackIllustration} alt="QYOU Partners With Capcom for Resident Evil Village TikTok Channel" />
        </picture>

        <div className="article-content">
          <SocialLinks />
          <p>
            Los Angeles-based influencer marketing agency QYOU Media announced that it has booked a series of new projects for the second quarter of 2021, including a campaign for Capcom’s latest entry in the popular Resident Evil series, Resident Evil Village.
          </p>
          <p>
            QYOU Media worked with Capcom to develop the TikTok channel for Resident Evil, populating it with a variety of that range from funny to weird for its latest game, with much of the content focusing on the character Lady Dimitrescu. QYOU Media produces content created by social media stars and digital content creators for India and the United States.
          </p>
          <div style={{ textAlign: 'center' }}>
            <img style={{ width: '33rem' }} src={TiktokFrame} alt=" tiktok" />
          </div>
          <p>
            The move for the company that has focused on influencer marketing for the movie industry into gaming isn’t surprising; in April it announced <a href="#">Kyle J. Scott had joined the company</a> as its new vice president of global partnerships. Prior to joining the company, Scott worked at esports organization NRG Esports.
          </p>
          <p>
            Resident Evil Village was officially released on Friday. The TikTok channel for Resident Evil currently has 126.3K followers and a total of 1.7M likes.
          </p>
        </div>

        <div className="article-author">
          <div className="article-author__avatar">
            <img src={Avatar} alt="James Fudge" />
          </div>
          <div className="article-author-content">
            <div className="article-author__title">James Fudge</div>
            <div>James has been covering the video games industry for nearly 23 years. He currently serves as The Esports Observer's senior editor.</div>
            <div className="article-author-links">
              <a href="#">
                <TwitterIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const SocialLinks = () => {
  const links = [
    { title: 'Twitter', icon: <TwitterIcon /> },
    { title: 'LinkedIn', icon: <LinkedInIcon /> },
    { title: 'Reddit', icon: <RedditIcon /> },
    { title: 'Share', icon: <ShareIcon /> }
  ]
  return <div className="article-social">
    {links.map(link => (
      <div key={link.title} className="article-social__link">
        {link.icon}
      </div>
    ))}
  </div>
}
