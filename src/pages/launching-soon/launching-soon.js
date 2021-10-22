import React, { useState } from 'react'
import {
  Container,
  Row,
  Col
} from '../style'
import { 
  Header
} from '../../components'
import {
  PageContainer,
  PageInner,
  Content,
  Banner,
  ShortDesc,
  Roadmap,
  RoadmapWithBackground,
  ConnectToDiscord
} from './style'
import bannerGif from '../../assets/image/banner.gif'
import limited_presale from '../../assets/image/limited_presale.gif'
import computer from '../../assets/image/computer.gif'
import banner from '../../assets/image/banner.png'
import phase1 from '../../assets/image/phase1.png'
import phase2 from '../../assets/image/phase2.png'
import phase3 from '../../assets/image/phase3.png'

const LaunchingSoon = () => {
  const [isFixed, setIsFixed] = useState(false);
  const JoinToDiscord = () => {
    window.open('http://discord.gg/hTdUmKfAtb', '_blank');
  }
  return (
    <PageContainer onWheel={ event => {
      if (event.nativeEvent.wheelDelta > 0) {
        if(window.pageYOffset === 0 ) {
          setIsFixed(false);
        };
      } else {
        if(window.pageYOffset > 0) {
          setIsFixed(true);
        };
      }
    }}>
      <PageInner>
        <Header isFixed={isFixed} />
        <Content>
          <Container>
            <Banner>
              <img src={bannerGif} alt="sad pixel" />
            </Banner>
          </Container>
          <ShortDesc>
            <Container>
              <Row>
                <Col>
                  <p>Sad Pixels is the first stage of a 3-phase multimedia art project. Each phase represents a multi-layered approach to one overarching theme: Technology and social media are destroying our mental health.</p>
                  <p>There is room for generative art projects to explore themes of deeper substance, make social commentary, and expand into the world of subversive art. This project aims to do just that.</p>
                  <div className="m-5">
                    <img src={banner} alt="sad pixel" />
                  </div>
                  <p>Sad Pixels is the launchpad to jumpstart a unique “evolutionary art” format. The project takes on the notion that pixels are the simplest building blocks in graphic design, yet despite their simplicity, they are capable of creating complex digital art. The three phases reflect the evolution of minimalistic pixel art into a fully immersive experience:</p>
                  <div className="abstract">
                    <p>Phase 1: Pixel Art</p>
                    <p>Phase 2: Anime Airdrop & Live-Action Art</p>
                    <p>Phase 3: Metaverse Expansion & Tokenomics</p>
                  </div>
                  <p>This progression incrementally unlocks value for the community as the phases evolve into higher art forms. The sum of all parts benefits the whole project. At each phase, a portion of profits will be donated to mental health organizations, chosen with the help of the community. Sad Pixels is being launched by a California team of entertainment industry veterans. More details on the project and the team below.</p>
                  <div className="no-full-width"><img src={limited_presale} alt="Limited Presale" /></div>
                </Col>
              </Row>
            </Container>
          </ShortDesc>
          <RoadmapWithBackground>
            <Container>
              <Row>
                <Col>
                  <h1>Phase 1:<br />Pixel Art</h1>
                  <p>Sad Pixels will be released as a 10,000 character NFT collection. Each character reflects the heavy toll that big tech has taken on our mental health. 
                    Every NFT is unique and randomly assigned on-chain (with the exception of 10 ultra rare GIF characters, explained below). 
                    This on-chain randomization method ensures that community members get a fair chance at minting whichever character, regardless of rarity. <br />
                    There are 10 ultra rare GIFs, and 1 will be placed randomly in the collection for a lucky winner to mint. Once all Sad Pixels are minted, the final 9 GIFs will be auctioned off.
                  </p>
                  <div className="mb-7">
                    <img src={computer} alt="computer" />
                  </div>
                  <p>As Phase 1 progresses, we will work on dropping merch— stuff that you’d actually want to wear. Even the Fairfax Avenue crowd will want to get their hands on this.</p>
                  <div className="no-full-width mb-5">
                    <img src={phase1} alt="dropping merch" />
                  </div>
                  {/* <div className="desc-with-icon">
                    <p><span>💎 &nbsp;Merch drop- Stuff that you would actually want to wear.</span></p>
                    <p><span>💎 &nbsp;$21k cash giveaway- $7k for each of our three most active community members.</span></p>
                    <p><span>💎 &nbsp;$30k charity donation- sent to the top three mental health organizations selected by the community. Future donations will be made with portions of secondary sales.</span></p>
                  </div>     */}
                </Col>
              </Row>
            </Container>
          </RoadmapWithBackground>
          <Roadmap>
            <Container>
              <Row>
                <Col>
                  <h1>Phase 2:<br />Anime airdrop & Live-Action Art</h1>
                  <p>As Phase 1 mints out, the production of Phase 2 is unlocked. The Sad Pixels characters will be re-imagined as anime versions and airdropped to the community. 
                    This airdrop will pump up the value of the original collection, and bring in new interest from anime art lovers. As the anime drawings take form, we’ll share art updates with our members. 
                    With ongoing communication and transparency, we hope to build long-term trust with our community. Diamond hands will be rewarded.
                  </p>
                  <p className="font-italic">The Sad Pixels get brought to life...</p>
                  <p>Have you ever seen a generative NFT project take human form? 
                    This is where things get interesting. Beyond anime, we aim to produce a series of live-action art videos. 
                    This is perhaps the most ambitious component of the project. 
                    These full-scale one-of-one pieces will be dark, yet thought-provoking video productions. 
                    We will seed this content across social media to strategically leverage our team’s entertainment industry expertise (we have previously created YouTube and TikTok campaigns garnering 100 million+ views). 
                    We want to stand out by doing something different. Without giving away too many details, our creative team has already developed specific treatment concepts for these videos. 
                    The art will be bold, subversive, and address the mental health theme of the project head-on. Insert trigger warning here.<br />
                    We will auction off these videos as one-of-one NFTs. The auction will add artistic credibility and extra visibility for the original Sad Pixels NFT collection.
                  </p>
                  <div className="mt-3">
                    <img src={phase2} alt="Anime airdrop & Live-Action Art" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Roadmap>
          <RoadmapWithBackground>
            <Container>
              <Row>
                <Col>
                  <h1>Phase 3:<br />Metaverse Expansion & Tokenomics</h1>
                  <p>It may seem counterintuitive for this project to dive into the metaverse, when it is critiquing the very idea that technology is taking over our lives. 
                    However, that is the poetic irony of the project; technological overload is the train wreck that we can’t look away from. 
                    We are drawn to it, despite our awareness that it is destroying our humanity.
                  </p>  
                  <p>The metaverse will inevitably bring darkness, in the sense that it will exacerbate mental health issues. 
                    To counter this, we want to create a metaverse art gallery, where artists are welcome to explore subversive themes. 
                    There is healing (or at least catharsis) in free artistic expression. 
                    We may have become desensitized by technology, but this gallery can exist as a stimulating place to revive the sense of novelty that we have lost. 
                    Through shared experiences with provocative art, maybe we’ll feel a little less numb.</p>
                  <p>Brand new art forms will exist within the metaverse, and we want to facilitate this artistic innovation by providing it with a home. 
                    This will be a new art gallery concept, for experimental and emerging cyber art forms. 
                    We are unafraid to use this space as a one-of-a-kind venue for all that is weird, dark, different— and even controversial.<br />
                    We want to partner with digital artists and recording artists to use this space for other unique projects. Our team is deeply involved in the music industry, so we would love to invite our LA friends to come perform and get involved.
                  </p>
                  <p className="font-italic">Time for a serotonin boost...</p>
                  <p>
                    We could offer you a 5% royalty on secondary sales, and act as if that’s a legit source of passive income… but let’s be real here, that tiny royalty split across thousands of holders won’t even pay your light bills. 
                    We do want to create extra utility, but that will take reaching the scale needed to do this right in the long term. 
                    We hope to grow Sad Pixels into a blue-chip project with a serious legacy, and then launch a passive income token from there. 
                    This could come in the form of an air-dropped project offering yield, perhaps in the form of a $SEROTONIN Token. 
                    This airdrop could provide a nice little *boost* to the value of your Sad Pixels NFT.
                  </p>
                  <p>
                    As the project grows over time, we also envision our community being able to use their $SEROTONIN token to access unique experiences. 
                    These might come in the form of exclusive events in our metaverse art gallery, and beyond. 
                    As you can see, we’re full of creative ideas, and we’re excited for this vision to fully come to life.
                  </p>
                  <div className="mt-3">
                    <img src={phase3} alt="Metaverse Expansion & Tokenomics" />
                  </div>
                </Col>
              </Row>
            </Container>
          </RoadmapWithBackground>
          <Roadmap>
            <Container>
              <Row>
                <Col>
                  <h1>Our Team</h1>
                  <p>
                    We know you guys love to hate on anonymous projects. We’re not here to rug you, but we are trying to make an artistic statement with our anonymity. 
                    The message of this collection is centered around the idea that social media and tech are destroying our mental health. Our team truly believes in this message, so it wouldn’t make sense to post our socials. 
                    We’re not here to get clout off of social media.
                  </p>
                  <p>
                    We want our efforts to speak for themselves through the art. Our intention is to be thought-provoking, and even invite you to reflect on the balance that you keep between life online and offline.
                  </p>
                  <p>
                    Our team’s credentials include business degrees from USC and UC Berkeley. Our data scientist has executed multiple smart contract deployments, with innovative techniques to minimize gas fees. 
                    Our team has 15 years+ combined experience creating art projects with billion-streaming recording artists. This includes creative marketing campaigns that have amassed hundreds of millions of YouTube and TikTok views. 
                    On the finance side, our team has also successfully managed major label budgets in the range of $70 million dollars.
                  </p>
                  <div className="mt-7">
                    <ConnectToDiscord onClick={JoinToDiscord}>
                      Join Discord
                    </ConnectToDiscord>
                  </div>
                </Col>
              </Row>
            </Container>
          </Roadmap>
          <Roadmap>
            <Container>
              <Row>
                <Col>
                  <div className="footer">
                    <h5>Copyright © 2021 Sad Pixels - All Rights Reserved.</h5>
                    <div className="short-border"></div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Roadmap>
        </Content>
      </PageInner>
    </PageContainer>
  );
}

export default LaunchingSoon