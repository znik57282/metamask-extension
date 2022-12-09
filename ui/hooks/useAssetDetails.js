import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNfts } from '../ducks/metamask/metamask';
import { getAssetDetails } from '../helpers/utils/token-util';
import { hideLoadingIndication, showLoadingIndication } from '../store/actions';
import { usePrevious } from './usePrevious';

export function useAssetDetails(tokenAddress, userAddress, transactionData) {
  const dispatch = useDispatch();
  // state selectors
  const nfts = useSelector(getNfts);

  // in-hook state
  const [currentAsset, setCurrentAsset] = useState(null);

  // previous state checkers
  const prevTokenAddress = usePrevious(tokenAddress);
  const prevUserAddress = usePrevious(userAddress);
  const prevTransactionData = usePrevious(transactionData);

  useEffect(() => {
    async function getAndSetAssetDetails() {
      dispatch(showLoadingIndication());
      const assetDetails = await getAssetDetails(
        tokenAddress,
        userAddress,
        transactionData,
        nfts,
      );
      setCurrentAsset(assetDetails);
      dispatch(hideLoadingIndication());
    }
    if (
      tokenAddress !== prevTokenAddress ||
      userAddress !== prevUserAddress ||
      transactionData !== prevTransactionData
    ) {
      getAndSetAssetDetails();
    }
  }, [
    dispatch,
    prevTokenAddress,
    prevTransactionData,
    prevUserAddress,
    tokenAddress,
    userAddress,
    transactionData,
    nfts,
  ]);

  if (currentAsset) {
    const {
      standard,
      symbol,
      image,
      name,
      balance,
      tokenId,
      toAddress,
      tokenAmount,
      decimals,
    } = currentAsset;

    return {
      toAddress,
      tokenId,
      decimals,
      tokenAmount,
      assetAddress: tokenAddress,
      assetStandard: standard,
      tokenSymbol: symbol ?? '',
      tokenImage: image,
      userBalance: balance,
      assetName: name,
    };
  }

  return {};
}
