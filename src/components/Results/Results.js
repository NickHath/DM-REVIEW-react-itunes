import React from 'react'


export default function Results({artistName, preview, song, collection, singlePrice, collectionPrice, type}) {
	return (

			//04: plug each prop into it's appropriate table cell (<td>)
			<tr>
				<td>
					<button>
						<a href={preview} target="_blank">Play</a>
					</button>
				</td>
				<td>{song}</td>
				<td>{artistName}</td>
				<td>{collection}</td>
				<td><img alt="Album Cover"/></td>
				<td>{type}</td>
				<td>${singlePrice}</td>
				<td>${collectionPrice}</td>
			</tr>
	)
}