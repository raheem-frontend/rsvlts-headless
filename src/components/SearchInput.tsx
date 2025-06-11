import SearchIcon from '@/assets/icons/SearchIcon'
import React from 'react'

function SearchInput() {
    return (
        <div className='min-w-[169px] h-[32px] bg-[#F3F1F1] flex items-center justify-center px-[12px] border'>
            <SearchIcon />
            <input type="text" className='outline-none border-none py-[8px] px-[12px] w-[128px] text-[14px]'  placeholder='Search'/>
        </div>
    )
}

export default SearchInput