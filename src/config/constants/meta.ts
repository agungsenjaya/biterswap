import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Bitgertswap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://bitgertswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | Bitgertswap`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | Bitgertswap`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | Bitgertswap`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | Bitgertswap`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | Bitgertswap`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | Bitgertswap`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | Bitgertswap`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | Bitgertswap`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | Bitgertswap`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | Bitgertswap`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | Bitgertswap`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | Bitgertswap`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | Bitgertswap`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | Bitgertswap`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | Bitgertswap`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | Bitgertswap`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | Bitgertswap`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | Bitgertswap`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | Bitgertswap`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | Bitgertswap`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | Bitgertswap`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | Bitgertswap`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | Bitgertswap`,
      }
    default:
      return null
  }
}
