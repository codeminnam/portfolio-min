import React from 'react';
import styled from 'styled-components';

const PortfolioSection = styled.section`
  background-color: #f2f8fa;
`;

const PortfolioContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 120px 30px;
`;

const PortfolioContent = styled.div``;

const PortfolioTitle = styled.strong`
  background-color: #7d6efe;
  color: #ffffff;
  display: inline-block;
  margin-bottom: 10px;
`;

const PortfolioItem = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  & + & {
    border-top: 1px solid #111;
    margin-top: 30px;
  }
`;
const ItemDesc = styled.div`
  margin-bottom: 30px;
`;
const ItemTitle = styled.strong``;

const ImageContainer = styled.div`
  text-align: left;
  margin: 10px auto;
  width: 500px;
  & + & {
    margin-top: 30px;
  }
`;
const ItemImage = styled.img`
  display: block;
  width: 500px;
`;

const ImageDesc = styled.p`
  width: 500px;
`;

const Portfolio = () => {
  return (
    <PortfolioSection>
      <PortfolioContainer>
        <PortfolioContent>
          <PortfolioTitle>Portfolio</PortfolioTitle>
          <PortfolioItem>
            <ItemDesc>
              <ItemTitle>
                #1.{' '}
                <a href="https://ts-booklist.netlify.app/" target="_blank">
                  TS-Booklist
                </a>
              </ItemTitle>
              <p>
                <strong>- Summary: </strong>A website you can manage book
                information fetched from API.
              </p>
              <p>
                <strong>- Description: </strong>
                Implemented CRUD in module which contains components, action
                creators, reducer, and saga. Divided and implemented components
                for their own purposes; pages(routing), containers(data
                processing), and components(rendering DOM).
              </p>
              <p>
                <strong>- Tech stacks: </strong>
                ReactJs, Typescript, Redux-saga, REST API, Antd, React Hooks,
                ES6
              </p>
              <p>
                <strong>- Git repository: </strong>
                <a
                  href="https://github.com/codeminnam/ts-booklist"
                  target="_blank"
                >
                  https://github.com/codeminnam/ts-booklist
                </a>
              </p>
            </ItemDesc>
            <ImageContainer>
              <ItemImage src="/images/booklist/signin.png" />
              <ImageDesc>Sign-in page</ImageDesc>
            </ImageContainer>
            <ImageContainer>
              <ItemImage src="/images/booklist/list.png" />
              <ImageDesc>Booklist page</ImageDesc>
            </ImageContainer>
            <ImageContainer>
              <ItemImage src="/images/booklist/add.png" />
              <ImageDesc>Addbook page</ImageDesc>
            </ImageContainer>
          </PortfolioItem>
          <PortfolioItem>
            <ItemDesc>
              <ItemTitle>#2. Reddit Music Player</ItemTitle>
              <p>
                <strong>- Summary: </strong>A music player website fetching
                genre information from reddit and making a playlist.
              </p>
              <p>
                <strong>- Description: </strong>
                Implemented interaction between genre list, playlist, and
                youtube video player components, with data fetched via graphQL.
                Mixed class and functional components.
              </p>
              <p>
                <strong>- Tech stacks: </strong>ReactJs, GraphQL, ES6
              </p>
              <p>
                <strong>- Git repository: </strong>
                <a
                  href="https://github.com/codeminnam/musicplayer"
                  target="_blank"
                >
                  https://github.com/codeminnam/musicplayer
                </a>
              </p>
            </ItemDesc>
            <ImageContainer>
              <ItemImage src="/images/reddit/reddit.png" />
              <ImageDesc>
                Once you click genre, subgenre list opens below it. When you
                click subgenre, a tag of it shows up in the middle area. If you
                pick all the subgenres you want for your playlist and click
                'Make a playlist' button, the website reads song recommendation
                list from Reddit, and make a list on the right side, and shows
                Youtube clip of the first song on the playlist.
              </ImageDesc>
            </ImageContainer>
          </PortfolioItem>
          <PortfolioItem>
            <ItemDesc>
              <ItemTitle>#3. Redux Comment</ItemTitle>
              <p>
                <strong>- Summary: </strong>
                Comment application in which comments are fetched via API with
                pagination.
              </p>
              <p>
                <strong>- Description: </strong>
                Implemented CRUD that interacts with API server. 3 components -
                comment list, pagination, and form share same state. Using
                json-server, I made mock REST API.
              </p>
              <p>
                <strong>- Tech stacks: </strong>
                ReactJs, Redux-thunk, REST API, Styled-components, React Hooks,
                ES6, Json-server
              </p>
              <p>
                <strong>- Git repository: </strong>
                <a
                  href="https://github.com/codeminnam/redux-comment"
                  target="_blank"
                >
                  https://github.com/codeminnam/redux-comment
                </a>
              </p>
            </ItemDesc>
            <ImageContainer>
              <ItemImage src="/images/comment/screenshot.png" />
              <ImageDesc>Single comment page</ImageDesc>
            </ImageContainer>
          </PortfolioItem>
          <PortfolioItem>
            <ItemDesc>
              <ItemTitle>#4. HonyakunHonyakun</ItemTitle>
              <p>
                <strong>- Summary: </strong>
                An individual OJT project created from scratch: from defining
                requirements through front-end, back-end, and DB development to
                deployment.
              </p>
              <p>
                <strong>- Description: </strong>
                Wrote requirement documents, designed and created DB, and made
                MVC and Rest controller, with functions including user
                management, dashboard, board, and comment.
              </p>
              <p>
                <strong>- Tech stacks: </strong>Javascript, Java, Spring Boot,
                REST API, Thymeleaf, MariaDB
              </p>
            </ItemDesc>
            <ImageContainer>
              <ItemImage src="/images/honyakun/1.png" />
              <ImageDesc>
                Sign-in Page: At this page you can log in, sign up, and reset
                password. Sign up and reset password is done on the modal, and
                you get email to authenticate once you submit the form.
              </ImageDesc>
            </ImageContainer>
            <ImageContainer>
              <ItemImage src="/images/honyakun/7.png" />
              <ImageDesc>
                Dashboard page: You can find your user information, the posts
                you left and the messages when you get reply to your post.
              </ImageDesc>
            </ImageContainer>
            <ImageContainer>
              <ItemImage src="/images/honyakun/10.png" />
              <ImageDesc>
                Board page: On this page you can sort posts and search posts by
                title.
              </ImageDesc>
            </ImageContainer>
            <ImageContainer>
              <ItemImage src="/images/honyakun/11.png" />
              <ImageDesc>
                Post detail page: You can see the post here. You can edit or
                delete the post or the files on the post if you're the owner of
                the post. Also, you can view, reply, download the file and leave
                comments.
              </ImageDesc>
            </ImageContainer>
            <ImageContainer>
              <ItemImage src="/images/honyakun/db.png" />
              <ImageDesc>Database design</ImageDesc>
            </ImageContainer>
            <ImageContainer>
              <ItemImage src="/images/honyakun/design.png" />
              <ImageDesc>Page design</ImageDesc>
            </ImageContainer>
            <ImageContainer>
              <ItemImage src="/images/honyakun/documentation.png" />
              <ImageDesc>
                Documentation - Requirement definition, action definition, page
                flow, and so on.
              </ImageDesc>
            </ImageContainer>
          </PortfolioItem>
        </PortfolioContent>
      </PortfolioContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
