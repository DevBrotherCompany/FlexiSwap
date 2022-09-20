import { gql } from '@apollo/client'

const GET_TRADES = gql`
  query GetAllTrades {
    trades(first: $first) {
      givings {
        items {
          item {
            file
          }
        }
      }
    }
  }
`

export interface GetAllTradesResponse {}
