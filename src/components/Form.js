import React from 'react';

class Form extends React.Component {

  render() {
    return (
			<div>
				<form onSubmit={event => this.props.handleSubmit(event)}>
					<input type="text" name="firstName" onChange={event => this.props.handleChange(event)} value={this.props.formData.firstName} />
					<input type="text" name="lastName" onChange={event => this.props.handleChange(event)} value={this.props.formData.lastName} />
					<input type="submit"/>
				</form>
				{ this.props.listOfSubmissions() }
			</div>
    )
  }
}

export default Form;
