import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { SvgIconTypeMap } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import BlogFooter from "./BlogFooter";
import BlogHeader from "./BlogHeader";
import BlogSidebar from "./BlogSidebar";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import MainFeaturedPost from "./MainFeaturedPost";

export type Section = {
  title: string;
  url: string;
}
const sections: Section[] = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
]

export type Post = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageText: string;
  linkText?: string;
}

const mainFeaturedPost: Post = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
}

const featuredPosts: Post[] = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
]

export type Archive = {
  title: string;
  url: string;
}

export type Social = {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
  name: string;
}

interface SideBar {
  title: string;
  description: string;
  archives: Archive[];
  social: Social[];
}
const sidebar: SideBar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
}

export default function Blog() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <BlogHeader title="Blog" sections={sections} />
        <div>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" />
            <BlogSidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </div>
      </Container>
      <BlogFooter
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  )
}
