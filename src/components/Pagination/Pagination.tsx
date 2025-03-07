import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentPage, selectItemsPerPage, selectTotalGames } from '@/store/slices/casinoGames/selectors';
import { setCurrentPage } from '@/store/slices/casinoGames/casinoGamesSlice';
import { AppDispatch } from '@/store/types';



export const Pagination = () => {
    const dispatch = useDispatch<AppDispatch>();
    const itemsPerPage = useSelector( selectItemsPerPage );
    const currentPage = useSelector( selectCurrentPage );
    const totalgames = useSelector( selectTotalGames )
    const totalPages = Math.ceil( totalgames / itemsPerPage);
 
    const onPageChange = (behavior: string) => {
        dispatch(setCurrentPage(behavior === 'reduce' ? currentPage - 1 : currentPage +1 ));
    }

  return (
    <div className='pagination-controls'>
      <button
        onClick={() => onPageChange('reduce')}
        disabled={currentPage === 1 || currentPage === 0}
      >
        Previous
      </button>
      <span style={{ color: 'white' }}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange('inscrease')}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};