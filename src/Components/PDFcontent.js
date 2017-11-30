import React, { Component } from 'react'

class PDFcontent extends Component {

PDFdate = () => {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();
	
	if(dd < 10) {
		dd = '0' + dd
	} 
	
	if(mm < 10) {
		mm = '0' + mm
	} 
	
	return today = mm + '/' + dd + '/' + yyyy;
}

	render() {
		const { chosenCustomer } = this.props
		return (
			<div>
				<p>
					Virksomhed: {chosenCustomer.orgName}<br/> 
					Kontaktperson: {chosenCustomer.contactFirstName} {chosenCustomer.contactLastName}<br/> 
					Adresse: {chosenCustomer.orgAddress}<br/> 
					By: {chosenCustomer.orgZip} {chosenCustomer.orgCity}
				</p>

				<p style={{marginLeft: '850px'}}>Aalborg, {this.PDFdate()}</p>

				<h1>Tilbud</h1>
				<p>Dette er en beskrivelse</p>
			</div>
		)
	}
}

export default PDFcontent