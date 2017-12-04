import React, { Component } from 'react'

class PDFtable extends Component {
	render() {
		return (
			<div>
				<table style={{marginLeft: '20px'}}>
					<thead>       
						<tr>
							<th>Country</th>
							<th>Population</th>
							<th>Date</th>
							<th>Age</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Chinna</td>
							<td>1,363,480,000</td>
							<td>March 24, 2014</td>
							<td>19.1</td>
						</tr>
						<tr>
							<td>India</td>
							<td>1,241,900,000</td>
							<td>March 24, 2014</td>
							<td>17.4</td>
						</tr>
						<tr>
							<td>United States</td>
							<td>317,746,000</td>
							<td>March 24, 2014</td>
							<td>4.44</td>
						</tr>
						<tr>
							<td>Indonesia</td>
							<td>249,866,000</td>
							<td>July 1, 2013</td>
							<td>3.49</td>
						</tr>
						<tr>
							<td>Brazil</td>
							<td>201,032,714</td>
							<td>July 1, 2013</td>
							<td>2.81</td>
						</tr>
					</tbody>
				</table> 
			</div>
		)
	}
}

export default PDFtable