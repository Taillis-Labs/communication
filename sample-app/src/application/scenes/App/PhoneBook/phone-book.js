import React, { PureComponent } from "react"
import { Form, Button, FormGroup, Col } from "react-bootstrap"
import Field from "application/components/Form/Field"

class PhoneBook extends PureComponent {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await this.props.fetchSheet()
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <Form horizontal onSubmit={handleSubmit}>
        <Field
          name="firstName"
          type="text"
          label="First Name"
        />
        <Field
          name="lastName"
          type="text"
          label="Last Name"
        />
        <Field
          name="dateOfBirth"
          type="text"
          label="Date Of Birth"
        />
        <Field
          name="phoneNumber"
          type="text"
          label="Phone Numbber"
        />


        <FormGroup className="text-right">
          <Col>
            <Button type="submit" bsStyle="primary">
              Save
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
export default PhoneBook
