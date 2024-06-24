import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { SSRMultipartLink } from "@apollo/experimental-nextjs-app-support";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwt7qnhb009y07w8fec7bs6f/master",
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      //   fetchOptions: { cache: "no-store" },
    }),
  });
});

// function addReview() {
//   const httpLink = new HttpLink({
//     uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwt7qnhb009y07w8fec7bs6f/master",
//   });

//   return new NextSSRApolloClient({
//     cache: new NextSSRInMemoryCache(),
//     link:
//       typeof window === "undefined"
//         ? ApolloLink.from([
//             new SSRMultipartLink({
//               stripDefer: true,
//             }),
//             httpLink,
//           ])
//         : httpLink,
//   });
// }

export const AddHotelReview = gql`
  mutation getHotels {
    categoriesConnection {
      edges {
        node {
          id
          name
          publishedAt
          slug
          updatedAt
          publishedBy {
            name
          }
        }
      }
    }
  }
`;

export const GetSingleHotelQuery = gql`
  query getHotel($slug: String) {
    categoriesConnection(where: { slug: $slug }) {
      edges {
        node {
          id
          name
          publishedAt
          slug
          updatedAt
          publishedBy {
            name
          }
        }
      }
    }
  }
`;
export const GetHotelsQuery = gql`
  query getHotels {
    categoriesConnection {
      edges {
        node {
          id
          name
          publishedAt
          slug
          updatedAt
          publishedBy {
            name
          }
        }
      }
    }
  }
`;
export const GetReviewsQuery = gql`
  query getReviews {
    reviewsConnection {
      edges {
        node {
          id
          stage
          updatedAt
          content
          createdAt
          email
          headline
          id
          name
          rating
          product {
            entryId: id
            name
            documentInStages(includeCurrent: true) {
              id
              stage
              updatedAt
              publishedAt
            }
          }
        }
      }
    }
  }
`;

export const GetSingleReviewQuery = gql`
  query GetSingleReview($name: String) {
    reviewsConnection(where: { name: $name }) {
      edges {
        node {
          id
          stage
          updatedAt
          content
          createdAt
          email
          headline
          id
          name
          product {
            entryId: id
            name
            documentInStages(includeCurrent: true) {
              id
              stage
              updatedAt
              publishedAt
            }
          }
        }
      }
    }
  }
`;

// export const getHotels = async function () {
//   const query = gql`
//     query getHotels($slug: String!) {
//       categoriesConnection {
//         aggregate {
//           count
//         }
//         edges {
//           node {
//             id
//             name
//             publishedAt
//             slug
//             updatedAt
//             publishedBy {
//               name
//             }
//           }
//         }
//       }
//     }
//   `;
// };
// export const getSingleHotel = async function (slug: string) {
//   const query = gql`
//     query getSingleHotel($slug: String!) {
//       categoriesConnection(where: { slug: $slug }) {
//         aggregate {
//           count
//         }
//         edges {
//           node {
//             id
//             name
//             publishedAt
//             slug
//             updatedAt
//             publishedBy {
//               name
//             }
//           }
//         }
//       }
//     }
//   `;
// };
