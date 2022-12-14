import React from 'react';
import Header from '../../components/Header';
import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap';
import { ContentContainer, Form, AdsBlock } from './styles'
import ShortenerService from '../../services/shortenerServece'
import vars from '../../configs/vars';
class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoanding: false,
      url: '',
      code: '',
      errorMessage: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { url } = this.state;

    this.setState({ isLoanding: true, errorMessage: '' });

    if (!url) {
      this.setState({ isLoanding: false, errorMessage: 'Please enter a valid URL.' });
    } else {
      try {
        const service = new ShortenerService();
        const result = await service.generate({ url });

        this.setState({ isLoanding: false, code: result.code })
      } catch (error) {
        this.setState({ isLoanding: false, errorMessage: 'Sorry, there was an error trying to shorten the url.' })
      }
    }
  }

  copyToClipboard(){
    const element = this.inputURL;
    element.select();
    document.execCommand('copy');
  }


  render() {
    const { isLoanding, errorMessage, code } = this.state;
    return (
      <Container>
        <Header>Seu novo encurtador de URL. :)</Header>
        <ContentContainer>
          <Form onSubmit={this.handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Cole sua url aqui para encurtar"
                defaultValue=""
                onChange={e => this.setState({ url: e.target.value })}
              />
              <Button
                variant="primary" type="submit">Encurtar
              </Button>
            </InputGroup>

            {isLoanding ? (
              <Spinner animation="border" />
            ) : (
              code && (
                <>
                  <InputGroup className="mb-3">
                    <FormControl
                      autoFocus={true}
                      defaultValue={vars.HOST_APP + code}
                      ref={(input) => this.inputURL = input}
                      
                    />
                    <Button
                      variant="outline-secondary" onClick={() => this.copyToClipboard()}>Copiar
                    </Button>
                  </InputGroup>
                  <p>Para acompanhar as estat??sticas, acesse <a target="_blank" href={vars.HOST_APP + code + '/stats'}>{vars.HOST_APP + code}/stats</a></p>
                </>
              )
            )}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          </Form>
        </ContentContainer>
        <ContentContainer>
          <AdsBlock>AdSense</AdsBlock>
        </ContentContainer>
      </Container>
    )
  }

}

export default HomePage;