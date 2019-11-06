import React from 'react';

const SearchForm = ({coinList, coin, handleChange}) => {

    return (
        <div>
            <form>
                <label>Coins: &nbsp;</label>
                <select name='coins' value={coin} onChange={handleChange}>
                    <option value={''}>Select...</option>
                    {coinList.map(coin => {
                        return <option key={coin.id} value={coin.id}>{coin.name}</option>
                    })}
                </select>
            </form>
        </div>
    )
}

export default SearchForm