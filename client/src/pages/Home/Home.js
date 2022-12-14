import React from "react";
import { Text, Card, Button, Img } from "../../components";
import { ContainerHome, StyledLink } from "./Home.styled";

export const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Loreme Ipsum",
      desc: "some random description that will probably be fetched from the API.",
      img: "https://i.pinimg.com/564x/dd/8e/85/dd8e85bf67e4e78579d08861a8033643.jpg",
    },
    {
      id: 2,
      title: "Loreme Ipsum",
      desc: "some random description that will probably be fetched from the API.",
      img: "https://i.pinimg.com/564x/89/e8/08/89e808d6d2ceb8bc4373746cfe8dc6d3.jpg",
    },
    {
      id: 3,
      title: "Loreme Ipsum",
      desc: "some random description that will probably be fetched from the API.",
      img: "https://i.pinimg.com/564x/9d/8a/1f/9d8a1f2d215cd50402eef5c5bb08c83a.jpg",
    },
  ];
  return (
    <div>
      <ContainerHome>
        {posts.map((post) => (
          <StyledLink to={`/post/${post.id}`} key={post.id}>
            <Card className={`small`}>
              {" "}
              <Img src={post.img} alt="blog img" />
              <Text className="title">{post.title}</Text>
              <Text>{post.desc}</Text>
              <Button className={`secondary`}> Read More</Button>
            </Card>
          </StyledLink>
        ))}
      </ContainerHome>
    </div>
  );
};
