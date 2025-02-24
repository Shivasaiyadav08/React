import React from 'react'

function Card() {
    return (
        <>
        <div className=' theme bg-white text-black w-xl h-full rounded-lg shadow-lg flex flex-col justify-around items-center'>
            <img className='w-fit ' src="https://tse1.mm.bing.net/th?id=OIP.viDQHQ1PMUXJqsBqE5Y6DAHaEK&pid=Api&P=0&h=220" alt="" /> 

            <div className='card-body w-fit p-5'>

                <p>
                PUBG: Battlegrounds is a 2017 battle royale video game published by Krafton, and developed by Krafton's PUBG Studios. The game, which was inspired by the Japanese film Battle Royale (2000), is based on previous mods created by Brendan "PlayerUnknown" Greene for other games, and expanded into a standalone game under Greene's creative direction. Played from either a third-person...
                </p>
            </div>

        </div>
        </>
    )
}

export default Card
