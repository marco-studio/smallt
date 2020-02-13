module.exports = {
  siteMetadata: {
    title: `Small Talk! With Alec Cuenca - Motivation, Inspiration, Pinoy Podcast`,
    description: `#SmallTalk is a segment where I share my thoughts and wisdom with regard to self-improvement. This segment tries to tackle different topics such as relationships, family, love, business, sports, mental health, etc.`,
    author: `Kwaku, Patrick, Bilal & Tom`,
    twitter: `https://twitter.com/ginoongalec`,
    instagram: `https://www.instagram.com/smalltalkpodcasts/?hl=en`,
    facebook: ``,
    youtube: ``,
    apple: `https://podcasts.apple.com/us/podcast/small-talk-alec-cuenca-motivation-inspiration-pinoy/id1460155116?mt=2&app=podcast`,
    stitcher: ``,
    google: `https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9hODg3ZDkwL3BvZGNhc3QvcnNz`,
    pocket: `https://pca.st/z543`,
    spotify: `https://open.spotify.com/show/6MWunfa6H0AvLew8vu6SN0?si=5hjEgmOhT66GveGh-W7L_A`,
    overcast: `https://overcast.fm/itunes1460155116/small-talk-with-alec-cuenca-motivation-inspiration-pinoy-podcast`,
    castbox: `https://castbox.fm/channel/Small-Talk!-With-Alec-Cuenca---Motivation%2C-Inspiration%2C-Pinoy-Podcast-id2100401?utm_source=website&utm_medium=dlink&utm_campaign=ex_share_ch&utm_content=Small%20Talk!%20With%20Alec%20Cuenca%20-%20Motivation%2C%20Inspiration%2C%20Pinoy%20Podcast-CastBox_FM`,
    castro: `https://castro.fm/itunes/1460155116`,
    podbean: `https://www.podbean.com/podcast-detail/gqnr3-9233a/Small-Talk%21-With-Alec-Cuenca---Motivation-Inspiration-Pinoy-Podcast`,
    beaker: `https://www.breaker.audio/shows?feed_url=https%3A%2F%2Fanchor.fm%2Fs%2Fa887d90%2Fpodcast%2Frss`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `https://anchor.fm/s/a887d90/podcast/rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
