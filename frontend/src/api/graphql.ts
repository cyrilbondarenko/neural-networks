import gql from "graphql-tag";

export const GetArticlesByTagSlug = gql`query GetArticleByTagSlug($tag: String) {
  posts(where: {tag: $tag, orderby: {field: DATE, order: ASC}}) {
    nodes {
      excerpt(format: RENDERED)
      title
      databaseId
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      date
      acf {
        sourcetitle
        sourceurl
      }
      terms {
        nodes {
          ... on Tag {
            id
            name
          }
        }
      }
    }
  }
}`;

export const GetArticleById = gql`query GetArticleById($id: ID!) {
  post(id: $id, idType: DATABASE_ID) {
    acf {
      sourcetitle
      sourceurl
    }
    terms {
        nodes {
          ... on Tag {
            id
            name
          }
        }
      }
    title
    content
    featuredImage {
      node {
        mediaItemUrl
      }
    }
    date
  }
}`;

export const GetArticleByCat = gql`query GetArticleByCat($categoryName: String = "статьи") {
  posts(where: {orderby: {field: DATE, order: DESC}, categoryName: $categoryName}) {
    nodes {
      excerpt(format: RENDERED)
      title
      databaseId
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      date
      acf {
        sourcetitle
        sourceurl
      }
      terms {
        nodes {
          ... on Tag {
            id
            name
          }
        }
      }
    }
  }
}`;

export const GetBooks = gql`query GetBooks($categoryName: String = "книги") {
  posts(where: {orderby: {field: DATE, order: DESC}, categoryName: $categoryName}) {
    nodes {
      excerpt(format: RENDERED)
      title
      databaseId
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      date
      acf {
        sourcetitle
        sourceurl
      }
      terms {
        nodes {
          ... on Tag {
            id
            name
          }
        }
      }
      acfBooks {
        specs {
          field
          value
        }
        author
      }
    }
  }
}`

export const GetBookById = gql`query GetBookByID($id: ID!) {
  post(id: $id, idType: DATABASE_ID) {
    acf {
      sourcetitle
      sourceurl
    }
    terms {
      nodes {
        ... on Tag {
          id
          name
        }
      }
    }
    title
    content
    featuredImage {
      node {
        mediaItemUrl
      }
    }
    date
    acfBooks {
      author
      specs {
        field
        value
      }
    }
  }
}`